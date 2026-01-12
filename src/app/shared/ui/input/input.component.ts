import { Component, input, output, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';

@Component({
  selector: 'app-input',
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, FormsModule],
  template: `
    <mat-form-field 
      [appearance]="appearance()"
      [class.full-width]="fullWidth()"
      [class.has-error]="errorMessage()"
      class="custom-input">
      
      @if (label()) {
        <mat-label>{{ label() }}</mat-label>
      }
      
      @if (prefixIcon()) {
        <mat-icon matPrefix>{{ prefixIcon() }}</mat-icon>
      }
      
      <input matInput
        [type]="type()"
        [placeholder]="placeholder()"
        [value]="value()"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [required]="required()"
        [attr.minlength]="minLength() || undefined"
        [attr.maxlength]="maxLength() || undefined"
        [pattern]="pattern()"
        (input)="onInput($event)"
        (blur)="onBlur()"
        (focus)="onFocus()"
      />
      
      @if (suffixIcon()) {
        <mat-icon matSuffix>{{ suffixIcon() }}</mat-icon>
      }
      
      @if (suffixButton()) {
        <button mat-icon-button matSuffix (click)="suffixClick.emit($event)">
          <mat-icon>{{ suffixButton() }}</mat-icon>
        </button>
      }
      
      @if (hint()) {
        <mat-hint>{{ hint() }}</mat-hint>
      }
      
      @if (errorMessage()) {
        <mat-error>{{ errorMessage() }}</mat-error>
      }
    </mat-form-field>
  `,
  styles: [`
    :host {
      --input-primary: #1976d2;
      --input-error: #f44336;
      --input-success: #4caf50;
    }
    
    .custom-input {
      width: 100%;
      
      &.full-width {
        width: 100%;
      }
    }
    
    mat-form-field {
      width: 100%;
    }
    
    ::ng-deep {
      .mat-mdc-form-field {
        &.has-error {
          .mdc-line-ripple::after {
            background-color: var(--input-error);
          }
        }
      }
      
      .mat-mdc-text-field-wrapper {
        border-radius: 8px;
      }
      
      .mat-mdc-form-field-flex {
        border-radius: 8px;
      }
    }
    
    input {
      font-size: 14px;
    }
  `]
})
export class InputComponent {
  readonly label = input<string>('');
  readonly type = input<InputType>('text');
  readonly placeholder = input<string>('');
  readonly value = input<string>('');
  readonly hint = input<string>('');
  readonly error = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly minLength = input<number | null>(null);
  readonly maxLength = input<number | null>(null);
  readonly pattern = input<string>('');
  readonly appearance = input<'outline' | 'fill'>('outline');
  readonly fullWidth = input<boolean>(true);
  readonly prefixIcon = input<string>('');
  readonly suffixIcon = input<string>('');
  readonly suffixButton = input<string>('');
  
  readonly valueChange = output<string>();
  readonly suffixClick = output<Event>();
  readonly focus = output<void>();
  readonly blur = output<void>();
  
  errorMessage = signal<string>('');
  
  constructor() {
    effect(() => {
      const error = this.error();
      if (error) {
        this.errorMessage.set(error);
      }
    });
  }
  
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
  
  onFocus(): void {
    this.focus.emit();
  }
  
  onBlur(): void {
    this.blur.emit();
  }
}
