import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from '@apsara/ui';
import { ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-bottom-sheet-showcase',
  standalone: true,
  imports: [CommonModule, BottomSheetComponent, ButtonComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Bottom Sheet</h3>
        <app-button label="Open Bottom Sheet" (clicked)="openBottomSheet()" />
      </div>

      <app-bottom-sheet
        [isOpen]="isOpen()"
        title="Share"
        [hasHandle]="true"
        (closed)="onClose()">
        <div class="space-y-4">
          <p class="text-sm text-gray-600">Choose how you want to share this content:</p>
          <div class="grid grid-cols-3 gap-4">
            <button class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100">
              <i class="material-icons text-blue-500">email</i>
              <span class="text-sm">Email</span>
            </button>
            <button class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100">
              <i class="material-icons text-green-500">message</i>
              <span class="text-sm">Message</span>
            </button>
            <button class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100">
              <i class="material-icons text-blue-700">link</i>
              <span class="text-sm">Copy Link</span>
            </button>
          </div>
        </div>
      </app-bottom-sheet>
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
export class BottomSheetShowcaseComponent {
  isOpen = signal(false);

  openBottomSheet(): void {
    this.isOpen.set(true);
  }

  onClose(): void {
    this.isOpen.set(false);
  }
}
