import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from '@apsara/ui';

@Component({
  selector: 'app-grid-list-showcase',
  standalone: true,
  imports: [CommonModule, GridListComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic Grid (2 columns)</h3>
        <app-grid-list [cols]="2">
          @for (item of items(); track $index) {
            <div class="bg-gray-100 rounded-lg p-6 text-center">
              <p class="font-medium text-gray-900">Item {{ $index + 1 }}</p>
            </div>
          }
        </app-grid-list>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Grid with 3 columns</h3>
        <app-grid-list [cols]="3" [gap]="'1.5rem'">
          @for (item of items(); track $index) {
            <div class="bg-blue-50 rounded-lg p-6 text-center">
              <p class="font-medium text-blue-900">Card {{ $index + 1 }}</p>
            </div>
          }
        </app-grid-list>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Responsive Grid (4 columns)</h3>
        <app-grid-list [cols]="4">
          @for (item of items(); track $index) {
            <div class="bg-green-50 rounded-lg p-4 text-center">
              <p class="font-medium text-green-900">{{ $index + 1 }}</p>
            </div>
          }
        </app-grid-list>
      </div>
    </div>
  `
})
export class GridListShowcaseComponent {
  items = signal([1, 2, 3, 4, 5, 6]);
}
