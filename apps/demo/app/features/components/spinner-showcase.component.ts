import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '@apsara/ui';

@Component({
  selector: 'app-spinner-showcase',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Sizes</h3>
        <div class="flex items-center gap-6">
          <div class="flex flex-col items-center gap-2">
            <app-spinner size="sm" />
            <span class="text-xs text-gray-500">Small</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <app-spinner size="md" />
            <span class="text-xs text-gray-500">Medium</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <app-spinner size="lg" />
            <span class="text-xs text-gray-500">Large</span>
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Loading States</h3>
        <div class="flex items-center gap-6">
          <div class="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
            <app-spinner size="md" />
            <span class="text-xs text-gray-500">Loading content</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
            <app-spinner size="md" />
            <span class="text-xs text-gray-500">Processing</span>
          </div>
        </div>
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
export class SpinnerShowcaseComponent {}
