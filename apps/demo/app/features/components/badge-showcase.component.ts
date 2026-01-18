import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@apsara/ui';

@Component({
  selector: 'app-badge-showcase',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  template: `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
        <app-badge variant="default">Default</app-badge>
        <span class="text-xs text-gray-500">Default</span>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
        <app-badge variant="secondary">Secondary</app-badge>
        <span class="text-xs text-gray-500">Secondary</span>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
        <app-badge variant="destructive">Destructive</app-badge>
        <span class="text-xs text-gray-500">Destructive</span>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
        <app-badge variant="outline">Outline</app-badge>
        <span class="text-xs text-gray-500">Outline</span>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
        <app-badge variant="success">Success</app-badge>
        <span class="text-xs text-gray-500">Success</span>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg">
        <app-badge variant="warning">Warning</app-badge>
        <span class="text-xs text-gray-500">Warning</span>
      </div>
    </div>
  `
})
export class BadgeShowcaseComponent {}
