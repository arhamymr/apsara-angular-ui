import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '@apsara/ui';

@Component({
  selector: 'app-divider-showcase',
  standalone: true,
  imports: [CommonModule, DividerComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Horizontal Divider</h3>
        <div class="space-y-2">
          <p class="text-sm text-gray-600">Section 1 content goes here.</p>
          <app-divider />
          <p class="text-sm text-gray-600">Section 2 content goes here.</p>
          <app-divider />
          <p class="text-sm text-gray-600">Section 3 content goes here.</p>
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">With Text</h3>
        <div class="flex items-center gap-4">
          <span class="text-sm text-gray-500">Left side</span>
          <app-divider class="flex-1" />
          <span class="text-sm text-gray-500">Right side</span>
        </div>
      </div>
      <div class="h-32 flex gap-4">
        <div class="flex-1 bg-gray-50 rounded-lg p-4">
          <h3 class="text-lg font-medium mb-4">Vertical Divider</h3>
          <div class="flex h-full items-center gap-4">
            <span class="text-sm text-gray-600">Left</span>
            <app-divider orientation="vertical" />
            <span class="text-sm text-gray-600">Right</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DividerShowcaseComponent {}
