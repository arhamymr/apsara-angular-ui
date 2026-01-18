import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from '@apsara/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-showcase',
  standalone: true,
  imports: [CommonModule, RadioComponent, FormsModule],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Gender Selection</h3>
        <app-radio
          [name]="'gender'"
          [options]="genderOptions"
          [(ngModel)]="selectedGender" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Delivery Speed</h3>
        <app-radio
          [name]="'delivery'"
          [options]="deliveryOptions"
          [(ngModel)]="selectedDelivery" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Selected Gender:</strong> {{ selectedGender() || 'None' }}
        </p>
        <p class="text-sm text-blue-600">
          <strong>Selected Delivery:</strong> {{ selectedDelivery() || 'None' }}
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
export class RadioShowcaseComponent {
  selectedGender = signal<string>('female');
  selectedDelivery = signal<string>('standard');

  genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other', disabled: true }
  ];

  deliveryOptions = [
    { value: 'standard', label: 'Standard (5-7 days)' },
    { value: 'express', label: 'Express (2-3 days)' },
    { value: 'overnight', label: 'Overnight' }
  ];
}
