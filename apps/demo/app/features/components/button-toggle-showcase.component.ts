import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from '@apsara/ui';

@Component({
  selector: 'app-button-toggle-showcase',
  standalone: true,
  imports: [CommonModule, ButtonToggleComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">View Mode</h3>
        <app-button-toggle
          [options]="viewOptions"
          [modelValue]="selectedView()"
          (changed)="onViewChange($event)" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Sort By</h3>
        <app-button-toggle
          [options]="sortOptions"
          [modelValue]="selectedSort()"
          (changed)="onSortChange($event)" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Selected View:</strong> {{ selectedView() }}
        </p>
        <p class="text-sm text-blue-600">
          <strong>Selected Sort:</strong> {{ selectedSort() }}
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
export class ButtonToggleShowcaseComponent {
  selectedView = signal<string>('grid');
  selectedSort = signal<string>('date');

  viewOptions = [
    { value: 'grid', label: 'Grid', icon: 'grid_view' },
    { value: 'list', label: 'List', icon: 'view_list' },
    { value: 'compact', label: 'Compact', icon: 'density_small' }
  ];

  sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' }
  ];

  onViewChange(value: string): void {
    this.selectedView.set(value);
  }

  onSortChange(value: string): void {
    this.selectedSort.set(value);
  }
}
