import { Component, input, output, signal, TemplateRef, effect, inject, ChangeDetectionStrategy, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-template #contentTemplate>
      <div
        role="tabpanel"
        [attr.id]="'panel-' + value()"
        [attr.aria-labelledby]="'tab-' + value()"
        [attr.aria-hidden]="!active()"
        [class]="cn(
          'tab-panel',
          !active() && 'tab-panel-hidden'
        )">
        <ng-content />
      </div>
    </ng-template>
  `,
  styles: [`
    .tab-panel {
      display: block;
    }
    .tab-panel-hidden {
      display: none;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {
  readonly label = input<string>('');
  readonly value = input.required<string>();
  readonly disabled = input<boolean>(false);
  readonly active = signal(false);
  readonly contentTemplate = input.required<TemplateRef<void>>();

  private tabs = inject(TabsComponent, { optional: true });

  constructor() {
    effect(() => {
      if (this.active()) {
        this.tabs?.selectTabByValue(this.value());
      }
    });
  }
}
