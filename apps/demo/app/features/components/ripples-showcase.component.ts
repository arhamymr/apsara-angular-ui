import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleComponent } from '@apsara/ui';
import { ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-ripples-showcase',
  standalone: true,
  imports: [CommonModule, RippleComponent, ButtonComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Ripple Effect on Buttons</h3>
        <div class="flex flex-wrap gap-4">
          <app-ripple>
            <app-button label="Primary" />
          </app-ripple>
          <app-ripple>
            <app-button label="Secondary" variant="secondary" />
          </app-ripple>
          <app-ripple>
            <app-button label="Outline" variant="outline" />
          </app-ripple>
          <app-ripple>
            <app-button label="Danger" variant="danger" />
          </app-ripple>
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Ripple on Custom Elements</h3>
        <div class="flex flex-wrap gap-4">
          <app-ripple>
            <div class="px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
              Custom Button
            </div>
          </app-ripple>
          <app-ripple>
            <div class="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
              Another Element
            </div>
          </app-ripple>
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Disabled Ripple</h3>
        <app-ripple [disabled]="true">
          <app-button label="No Ripple Effect" variant="tertiary" />
        </app-ripple>
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
export class RipplesShowcaseComponent {}
