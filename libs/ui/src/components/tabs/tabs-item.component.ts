import { Component, input, ChangeDetectionStrategy, output, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatTabLink } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs-item',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTabLink, RouterModule],
  template: `
    <a mat-tab-link
      class="px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer focus:outline-none
             hover:text-[var(--foreground)] hover:border-[var(--border)]
             text-[var(--dimmed)] border-transparent
             [&.mat-mdc-tab-active]:text-[var(--primary)] [&.mat-mdc-tab-active]:border-[var(--primary)]
             disabled:cursor-not-allowed disabled:opacity-50"
      [active]="isActive()"
      [disabled]="disabled()"
      [routerLink]="[]"
      [queryParams]="{ tab: value() }">
      <ng-content></ng-content>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsItemComponent {
  readonly value = input.required<string>();
  readonly disabled = input<boolean>(false);

  isActive(): boolean {
    return false;
  }
}
