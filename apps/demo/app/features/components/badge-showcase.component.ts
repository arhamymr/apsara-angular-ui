import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent, CardComponent } from '@apsara/ui';

@Component({
  selector: 'app-badge-showcase',
  standalone: true,
  imports: [CommonModule, BadgeComponent, CardComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="default">Default</app-badge>
        <span class="text-xs text-dimmed">Default</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="secondary">Secondary</app-badge>
        <span class="text-xs text-dimmed">Secondary</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="destructive">Destructive</app-badge>
        <span class="text-xs text-dimmed">Destructive</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="outline">Outline</app-badge>
        <span class="text-xs text-dimmed">Outline</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="success">Success</app-badge>
        <span class="text-xs text-dimmed">Success</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="warning">Warning</app-badge>
        <span class="text-xs text-dimmed">Warning</span>
      </app-card>
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
export class BadgeShowcaseComponent {}
