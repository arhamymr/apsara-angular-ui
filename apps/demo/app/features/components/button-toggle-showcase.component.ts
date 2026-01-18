import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from '@apsara/ui';

@Component({
  selector: 'app-button-toggle-showcase',
  standalone: true,
  imports: [CommonModule, ButtonToggleComponent],
  template: `
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
  `
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
