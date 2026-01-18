import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-tab-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="tab-header"
      role="tablist"
      (keydown)="$event.stopPropagation()">
      <div class="tab-list">
        @for (tab of tabs(); track tab.value) {
          <button
            type="button"
            role="tab"
            [attr.id]="'tab-label-' + tab.value"
            [attr.aria-selected]="selectedIndex() === i"
            [attr.aria-controls]="'panel-' + tab.value"
            [attr.tabindex]="selectedIndex() === i ? 0 : -1"
            [disabled]="tab.disabled()"
            [class]="cn(
              'tab-label',
              'px-4 py-3 text-sm font-medium transition-all duration-200',
              'border-b-2 border-transparent cursor-pointer',
              'focus-visible:outline-none focus-visible:bg-muted',
              'hover:text-foreground',
              selectedIndex() === i ? 'text-primary border-primary' : 'text-dimmed',
              tab.disabled() && 'opacity-50 cursor-not-allowed'
            )"
            (click)="onTabClick(i)"
            (keydown)="onTabKeydown($event, i)">
            {{ tab.label() }}
          </button>
          @if (selectedIndex() === i) {
            <div class="tab-ink-bar" />
          }
        }
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .tab-header {
      position: relative;
    }
    .tab-list {
      display: flex;
      position: relative;
      gap: 1px;
    }
    .tab-ink-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--primary);
      transition: left 0.2s ease;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeaderComponent {
  readonly tabs = input.required<QueryList<TabComponent>>();
  readonly selectedIndex = input<number>(0);

  readonly tabClick = output<number>();

  onTabClick(index: number): void {
    this.tabClick.emit(index);
  }

  onTabKeydown(event: KeyboardEvent, index: number): void {
    this.tabClick.emit(index);
  }
}
