import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <header
      class="flex items-center justify-between px-4 h-16 border-b"
      [class]="cn(
        dense() ? 'h-12' : 'h-16',
        colorClass(),
        className()
      )"
      [attr.role]="role()">
      <div class="flex items-center gap-4">
        @if (hasMenu()) {
          <app-button
            variant="plain"
            size="icon"
            (clicked)="onMenuClick()"
            aria-label="Toggle menu">
            <span slot="">menu</span>
          </app-button>
        }
        @if (title()) {
          <h1 class="text-lg font-semibold" [class]="titleColorClass()">{{ title() }}</h1>
        }
      </div>
      <div class="flex items-center gap-2">
        <ng-content select="[toolbar-actions]" />
      </div>
    </header>
  `
})
export class ToolbarComponent {
  title = input<string>('');
  hasMenu = input<boolean>(false);
  dense = input<boolean>(false);
  variant = input<'primary' | 'surface' | 'transparent'>('surface');
  role = input<string>('banner');
  className = input<string>('');
  menuClicked = output<void>();

  colorClass(): string {
    const colors: Record<string, string> = {
      primary: 'bg-[var(--primary)] text-[var(--primary-foreground)]',
      surface: 'bg-[var(--card)] text-[var(--foreground)] border-[var(--border)]',
      transparent: 'bg-transparent text-[var(--foreground)]',
    };
    return colors[this.variant()] || colors['surface'];
  }

  titleColorClass(): string {
    const colors: Record<string, string> = {
      primary: 'text-[var(--primary-foreground)]',
      surface: 'text-[var(--foreground)]',
      transparent: 'text-[var(--foreground)]',
    };
    return colors[this.variant()] || colors['surface'];
  }

  onMenuClick(): void {
    this.menuClicked.emit();
  }

  cn = cn;
}
