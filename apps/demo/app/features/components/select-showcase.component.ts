import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '@apsara/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-showcase',
  standalone: true,
  imports: [CommonModule, SelectComponent, FormsModule],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic Select</h3>
        <app-select
          [options]="countryOptions"
          [placeholder]="'Select a country'"
          [(ngModel)]="selectedCountry"
          (changed)="onCountryChange($event)" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">With Icons</h3>
        <app-select
          [options]="priorityOptions"
          [placeholder]="'Select priority'"
          [(ngModel)]="selectedPriority" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Selected Country:</strong> {{ selectedCountry() || 'None' }}
        </p>
        <p class="text-sm text-blue-600">
          <strong>Selected Priority:</strong> {{ selectedPriority() || 'None' }}
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
export class SelectShowcaseComponent {
  selectedCountry = signal<string>('us');
  selectedPriority = signal<string>('medium');

  countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' }
  ];

  priorityOptions = [
    { value: 'low', label: 'Low Priority', icon: 'arrow_downward' },
    { value: 'medium', label: 'Medium Priority', icon: 'remove' },
    { value: 'high', label: 'High Priority', icon: 'arrow_upward' }
  ];

  onCountryChange(value: string): void {
    this.selectedCountry.set(value);
  }
}
