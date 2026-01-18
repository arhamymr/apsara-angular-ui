import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent, ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-progress-bar-showcase',
  standalone: true,
  imports: [CommonModule, ProgressComponent, ButtonComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Determinate Progress</h3>
        <app-progress
          [value]="progressValue()"
          [max]="100"
          color="primary" />
        <div class="flex items-center gap-2">
          <app-button size="sm" label="-10%" (clicked)="decreaseProgress()" />
          <app-button size="sm" label="+10%" (clicked)="increaseProgress()" />
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Different Colors</h3>
        <app-progress [value]="25" color="primary" />
        <app-progress [value]="50" color="success" />
        <app-progress [value]="75" color="warning" />
        <app-progress [value]="100" color="danger" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Sizes</h3>
        <app-progress [value]="60" size="sm" />
        <app-progress [value]="60" size="md" />
        <app-progress [value]="60" size="lg" />
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
export class ProgressBarShowcaseComponent {
  progressValue = signal(60);

  increaseProgress(): void {
    this.progressValue.update(v => Math.min(v + 10, 100));
  }

  decreaseProgress(): void {
    this.progressValue.update(v => Math.max(v - 10, 0));
  }
}
