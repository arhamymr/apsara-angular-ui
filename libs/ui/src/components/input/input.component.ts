import { Component, input, output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  template: `
    <div class="input-wrapper" [class.disabled]="disabled()" [class.error]="!!error()">
      @if (label()) {
        <label class="label">{{ label() }} @if (required()) { <span class="required">*</span> }</label>
      }

      <div class="input-container">
        @if (prefixIcon()) {
          <span class="icon prefix">{{ prefixIcon() }}</span>
        }

        <input
          [type]="type()"
          [placeholder]="placeholder()"
          [value]="value()"
          [disabled]="disabled()"
          [class.with-prefix]="!!prefixIcon()"
          [class.with-suffix]="!!suffixIcon()"
          (input)="onInput($event)"
          (blur)="onBlur()"
          (focus)="onFocus()" />

        @if (suffixIcon()) {
          <button type="button" class="icon suffix" (click)="onSuffixClick()">
            {{ showPassword() ? 'Hide' : suffixIcon() }}
          </button>
        }
      </div>

      @if (error()) {
        <span class="error-text">{{ error() }}</span>
      }

      @if (hint()) {
        <span class="hint">{{ hint() }}</span>
      }
    </div>
  `,
  styles: [`
    .input-wrapper {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-family: 'Inter', system-ui, sans-serif;
    }

    .label {
      font-size: 14px;
      font-weight: 500;
      color: var(--foreground);
    }

    .required {
      color: var(--danger);
    }

    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      padding: 10px 14px;
      font-size: 14px;
      border: 1.5px solid var(--input-border);
      border-radius: var(--radius);
      background: var(--input);
      color: var(--foreground);
      transition: all 0.2s;
      box-sizing: border-box;
    }

    input::placeholder {
      color: var(--dimmed);
    }

    input:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px oklch(0.55 0.2 250 / 0.1);
    }

    input:disabled {
      background: var(--muted);
      cursor: not-allowed;
      opacity: 0.6;
    }

    input.with-prefix {
      padding-left: 40px;
    }

    input.with-suffix {
      padding-right: 40px;
    }

    .icon {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      color: var(--dimmed);
      font-size: 18px;
    }

    .icon.prefix {
      left: 4px;
    }

    .icon.suffix {
      right: 4px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: var(--radius-xs);
    }

    .icon.suffix:hover {
      background: var(--accent);
    }

    .error-text {
      font-size: 12px;
      color: var(--danger);
    }

    .hint {
      font-size: 12px;
      color: var(--dimmed);
    }

    .input-wrapper.error input {
      border-color: var(--danger);
    }

    .input-wrapper.error input:focus {
      box-shadow: 0 0 0 3px oklch(0.6098 0.244 28.41 / 0.1);
    }

    .input-wrapper.disabled {
      opacity: 0.6;
    }
  `]
})
export class InputComponent implements ControlValueAccessor {
  readonly label = input<string>('');
  readonly type = input<InputType>('text');
  readonly placeholder = input<string>('');
  readonly value = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly error = input<string>('');
  readonly hint = input<string>('');
  readonly required = input<boolean>(false);
  readonly prefixIcon = input<string>('');
  readonly suffixIcon = input<string>('');
  readonly showPassword = input<boolean>(false);

  readonly suffixClick = output<void>();

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onChange(input.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  onFocus(): void {
  }

  onSuffixClick(): void {
    this.suffixClick.emit();
  }
}
