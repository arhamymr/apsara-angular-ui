import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export type { VariantProps as ButtonVariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  [
    'relative font-medium select-none inline-flex justify-center items-center gap-2.5 transition-colors',
    'after:absolute after:inset-0 after:bg-white/15 after:opacity-0 hover:after:opacity-100 active:after:opacity-100 data-popup-open:after:opacity-100 after:transition-opacity',
    'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2',
    'before:size-4.5 before:bg-spinner before:-mr-7 before:opacity-0 before:scale-20 before:transition-[opacity,scale,margin-right]',
    '[&>svg]:opacity-100 [&>svg]:transition-[opacity,scale,margin-right]',
    'disabled:opacity-70 disabled:pointer-events-none data-disabled:opacity-70 data-disabled:pointer-events-none',
    'ring ring-[var(--border)] inset-shadow-2xs inset-shadow-white/15 shadow after:rounded',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--primary)] text-[var(--primary-foreground)] **:[svg]:[color:var(--primary-foreground)]',
          'ring-[var(--primary-border)] outline-[var(--primary)]',
        ],
        secondary: [
          'bg-[var(--secondary)] text-[var(--secondary-foreground)] **:[svg]:[color:var(--secondary-foreground)]',
          'ring-[var(--secondary-border)] outline-[var(--secondary)]',
        ],
        tertiary: [
          'bg-[var(--tertiary)] text-[var(--tertiary-foreground)] **:[svg]:[color:var(--tertiary-foreground)]',
          'ring-[var(--tertiary-border)] outline-[var(--tertiary)] inset-shadow-white/15',
        ],
        danger: [
          'bg-[var(--danger)] text-[var(--danger-foreground)] **:[svg]:[color:var(--danger-foreground)]',
          'ring-[var(--danger-border)] outline-[var(--danger)]',
        ],
        outline: [
          'bg-transparent text-[var(--foreground)] **:[svg]:[color:var(--foreground)]',
          'ring-[var(--border)]',
        ],
        plain: [
          'bg-transparent text-[var(--foreground)] **:[svg]:[color:var(--foreground)]',
          'ring-0 shadow-none',
        ],
      },
      size: {
        'xs': 'h-7 px-2 text-xs rounded-xs *:[svg]:size-3.5',
        'xs-icon': 'size-7 rounded-xs *:[svg]:size-3.5',
        'sm': 'h-[34px] px-3 text-sm rounded-sm *:[svg]:size-4',
        'sm-icon': 'size-[34px] rounded-sm *:[svg]:size-4',
        'md': 'h-[38px] px-4 text-sm rounded-md *:[svg]:size-[18px]',
        'icon': 'size-[38px] rounded-md *:[svg]:size-[18px]',
        'lg': 'h-[46px] px-[22px] text-sm rounded-lg *:[svg]:size-[18px]',
        'lg-icon': 'size-[46px] rounded-lg *:[svg]:size-[18px]',
      },
      pill: {
        true: 'rounded-full after:rounded-full',
      },
      block: {
        true: 'w-full',
      },
      loading: {
        true: [
          'pointer-events-none opacity-70 [&>svg]:opacity-0 [&>svg]:scale-0 [&>svg]:-mr-7',
          'before:size-4.5 before:bg-spinner before:animate-spin before:mr-0 before:opacity-100 before:scale-100',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [disabled]="disabled() || loading()"
      [class]="cn(
        buttonVariants({
          variant: variant(),
          size: size(),
          pill: pill(),
          block: block(),
          loading: loading()
        })
      )"
      (click)="onClick($event)">

      @if (label()) {
        <span class="label">{{ label() }}</span>
      }

      <ng-content select="[slot]" />
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class ButtonComponent {
  readonly label = input<string>('');
  readonly variant = input<VariantProps<typeof buttonVariants>['variant']>('primary');
  readonly size = input<VariantProps<typeof buttonVariants>['size']>('md');
  readonly disabled = input<boolean>(false);
  readonly loading = input<boolean>(false);
  readonly pill = input<boolean>(false);
  readonly block = input<boolean>(false);
  readonly popupOpen = input<boolean | undefined>(undefined);
  readonly clicked = output<Event>();

  cn = cn;
  buttonVariants = buttonVariants;

  onClick(event: Event): void {
    if (!this.disabled() && !this.loading()) {
      this.clicked.emit(event);
    }
  }
}
