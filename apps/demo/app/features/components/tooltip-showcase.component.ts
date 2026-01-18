import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from '@apsara/ui';
import { ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-tooltip-showcase',
  standalone: true,
  imports: [CommonModule, TooltipComponent, ButtonComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Tooltip Placements</h3>
        <div class="flex flex-wrap gap-4 items-center justify-center py-8">
          <app-tooltip content="Tooltip on top" placement="top">
            <app-button label="Top" />
          </app-tooltip>
          <app-tooltip content="Tooltip on bottom" placement="bottom">
            <app-button label="Bottom" />
          </app-tooltip>
          <app-tooltip content="Tooltip on left" placement="left">
            <app-button label="Left" />
          </app-tooltip>
          <app-tooltip content="Tooltip on right" placement="right">
            <app-button label="Right" />
          </app-tooltip>
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">With Icons</h3>
        <div class="flex flex-wrap gap-4">
          <app-tooltip content="Add item" placement="top">
            <button class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <i class="material-icons">add</i>
            </button>
          </app-tooltip>
          <app-tooltip content="Delete item" placement="top">
            <button class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <i class="material-icons">delete</i>
            </button>
          </app-tooltip>
          <app-tooltip content="Settings" placement="top">
            <button class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <i class="material-icons">settings</i>
            </button>
          </app-tooltip>
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
export class TooltipShowcaseComponent {}
