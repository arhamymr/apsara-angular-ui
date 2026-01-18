import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent, DialogResult } from '@apsara/ui';
import { ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-dialog-showcase',
  standalone: true,
  imports: [CommonModule, DialogComponent, ButtonComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Dialog Examples</h3>
        <div class="flex flex-wrap gap-3">
          <app-button label="Open Simple Dialog" (clicked)="openDialog('simple')" />
          <app-button label="Open Form Dialog" variant="secondary" (clicked)="openDialog('form')" />
          <app-button label="Open Confirmation" variant="danger" (clicked)="openDialog('confirm')" />
        </div>
      </div>

      <app-dialog
        [isOpen]="dialogs()['simple']()"
        title="Simple Dialog"
        (closed)="onDialogClose('simple', $event)">
        <p class="text-sm text-gray-600">
          This is a simple dialog with a title and content.
          You can close it by clicking the X button or clicking outside.
        </p>
      </app-dialog>

      <app-dialog
        [isOpen]="dialogs()['form']()"
        title="Form Dialog"
        (closed)="onDialogClose('form', $event)">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Enter your name" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
          </div>
        </div>
        <div dialog-actions class="flex gap-3">
          <app-button label="Cancel" variant="tertiary" (clicked)="onDialogClose('form', { action: 'cancel' })" />
          <app-button label="Submit" (clicked)="onDialogClose('form', { action: 'confirm' })" />
        </div>
      </app-dialog>

      <app-dialog
        [isOpen]="dialogs()['confirm']()"
        title="Confirm Delete"
        (closed)="onDialogClose('confirm', $event)">
        <p class="text-sm text-gray-600">
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
        <div dialog-actions class="flex gap-3">
          <app-button label="Cancel" variant="tertiary" (clicked)="onDialogClose('confirm', { action: 'cancel' })" />
          <app-button label="Delete" variant="danger" (clicked)="onDialogClose('confirm', { action: 'confirm' })" />
        </div>
      </app-dialog>

      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Last action:</strong> {{ lastAction() || 'None' }}
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
export class DialogShowcaseComponent {
  dialogs = signal<{ [key: string]: () => boolean }>({
    simple: () => false,
    form: () => false,
    confirm: () => false
  });
  lastAction = signal<string>('');

  openDialog(key: string): void {
    this.dialogs.update(d => ({ ...d, [key]: () => true }));
  }

  onDialogClose(key: string, result: DialogResult): void {
    this.dialogs.update(d => ({ ...d, [key]: () => false }));
    this.lastAction.set(`${result.action} (${key})`);
  }
}
