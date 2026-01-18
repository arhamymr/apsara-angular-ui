import { Component, input, output, signal, computed, effect, ContentChildren, QueryList, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabHeaderComponent } from './tab-header.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, TabComponent, TabHeaderComponent],
  template: `
    <div class="tabs-container" [class.tabs-animation-disabled]="animationDisabled()">
      <app-tab-header
        [tabs]="tabs()"
        [selectedIndex]="selectedIndex()"
        (tabClick)="selectTab($event)"
        (keydown)="onKeydown($event)" />
      <div class="tab-body-wrapper">
        @for (tab of tabs(); track tab.value; let i = $index) {
          <div
            class="tab-body-content"
            [class.tab-body-active]="selectedIndex() === i"
            role="tabpanel"
            [attr.id]="'tab-panel-' + tab.value"
            [attr.aria-labelledby]="'tab-label-' + tab.value"
            [attr.aria-expanded]="selectedIndex() === i"
            [attr.aria-hidden]="selectedIndex() !== i"
            tabindex="0">
            <ng-content select="[tab-content]" />
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .tabs-container {
      display: flex;
      flex-direction: column;
    }
    .tab-body-wrapper {
      position: relative;
      overflow: hidden;
    }
    .tab-body-content {
      display: none;
      padding: 24px;
    }
    .tab-body-content.tab-body-active {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  readonly animationDisabled = input<boolean>(false);
  readonly selectedIndex = input<number>(0);
  readonly tabs = input.required<QueryList<TabComponent>>();

  readonly selectedTabChange = output<number>();

  selectTab(index: number): void {
    this.selectedTabChange.emit(index);
  }

  selectTabByValue(value: string): void {
    const tabsArray = this.tabs().toArray();
    const index = tabsArray.findIndex(tab => tab.value() === value);
    if (index >= 0) {
      this.selectTab(index);
    }
  }

  onKeydown(event: KeyboardEvent): void {
    const tabs = this.tabs();
    const currentIndex = this.selectedIndex();
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowRight':
        newIndex = Math.min(currentIndex + 1, tabs.length - 1);
        break;
      case 'ArrowLeft':
        newIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    this.selectTab(newIndex);
  }
}
