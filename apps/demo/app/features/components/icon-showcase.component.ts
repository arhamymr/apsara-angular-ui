import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@apsara/ui';

@Component({
  selector: 'app-icon-showcase',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Sizes</h3>
        <div class="flex items-center gap-4">
          <app-icon name="home" size="xs" />
          <app-icon name="home" size="sm" />
          <app-icon name="home" size="md" />
          <app-icon name="home" size="lg" />
          <app-icon name="home" size="xl" />
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Action Icons</h3>
        <div class="flex items-center gap-4">
          <app-icon name="edit" size="md" />
          <app-icon name="delete" size="md" />
          <app-icon name="add" size="md" />
          <app-icon name="search" size="md" />
          <app-icon name="settings" size="md" />
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Navigation Icons</h3>
        <div class="flex items-center gap-4">
          <app-icon name="chevron_left" size="md" />
          <app-icon name="chevron_right" size="md" />
          <app-icon name="expand_more" size="md" />
          <app-icon name="menu" size="md" />
        </div>
      </div>
    </div>
  `
})
export class IconShowcaseComponent {}
