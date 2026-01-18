import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@apsara/ui';

@Component({
  selector: 'app-menu-showcase',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Dropdown Menu</h3>
        <app-menu
          [label]="'File'"
          [icon]="'description'"
          [items]="fileMenuItems"
          (itemClicked)="onMenuClick($event)" />
        <app-menu
          [label]="'Edit'"
          [items]="editMenuItems"
          (itemClicked)="onMenuClick($event)" />
        <app-menu
          [label]="'Help'"
          [items]="helpMenuItems"
          (itemClicked)="onMenuClick($event)" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Last clicked:</strong> {{ lastClicked() || 'None' }}
        </p>
      </div>
    </div>
  `,
  styles: [`
    .ai-review-banner {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      background: #fef3c7;
      border: 1px solid #f59e0b;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .ai-review-icon {
      font-size: 1.25rem;
    }

    .ai-review-text {
      font-size: 0.875rem;
      font-weight: 600;
      color: #92400e;
    }
  `]
})
export class MenuShowcaseComponent {
  lastClicked = signal<string>('');

  fileMenuItems = [
    { label: 'New', icon: 'note_add', shortcut: 'Ctrl+N' },
    { label: 'Open', icon: 'folder_open', shortcut: 'Ctrl+O' },
    { divider: true },
    { label: 'Save', icon: 'save', shortcut: 'Ctrl+S' },
    { label: 'Save As...', icon: 'save_as' },
    { divider: true },
    { label: 'Exit', icon: 'exit_to_app' }
  ];

  editMenuItems = [
    { label: 'Undo', icon: 'undo', shortcut: 'Ctrl+Z' },
    { label: 'Redo', icon: 'redo', shortcut: 'Ctrl+Y' },
    { divider: true },
    { label: 'Cut', icon: 'cut', shortcut: 'Ctrl+X' },
    { label: 'Copy', icon: 'content_copy', shortcut: 'Ctrl+C' },
    { label: 'Paste', icon: 'content_paste', shortcut: 'Ctrl+V' }
  ];

  helpMenuItems = [
    { label: 'Help Center', icon: 'help' },
    { label: 'Documentation', icon: 'menu_book' },
    { divider: true },
    { label: 'About', icon: 'info' }
  ];

  onMenuClick(value: unknown): void {
    this.lastClicked.set(value as string);
  }
}
