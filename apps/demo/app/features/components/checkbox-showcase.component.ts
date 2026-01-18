import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '@apsara/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-showcase',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, FormsModule],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic Checkboxes</h3>
        <app-checkbox [label]="'Accept terms and conditions'" />
        <app-checkbox [label]="'Subscribe to newsletter'" [checked]="true" />
        <app-checkbox [label]="'Disabled option'" [disabled]="true" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Indeterminate State</h3>
        <app-checkbox
          [label]="'Select all'"
          [isIndeterminate]="true"
          (onChange)="onSelectAll($event)" />
        <div class="pl-6 space-y-2">
          <app-checkbox [label]="'Option 1'" [(ngModel)]="option1" />
          <app-checkbox [label]="'Option 2'" [(ngModel)]="option2" />
          <app-checkbox [label]="'Option 3'" [(ngModel)]="option3" />
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
export class CheckboxShowcaseComponent {
  option1 = signal(false);
  option2 = signal(false);
  option3 = signal(false);

  onSelectAll(value: boolean): void {
    this.option1.set(value);
    this.option2.set(value);
    this.option3.set(value);
  }
}
