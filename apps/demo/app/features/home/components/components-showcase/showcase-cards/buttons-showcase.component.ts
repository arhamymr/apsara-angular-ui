import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-buttons-showcase',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  template: `
    <app-card class="flex-1 flex flex-col h-full">
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-foreground mb-1.5">Button Variants</h3>
        <p class="text-sm text-muted-foreground">Multiple variants, sizes, and states</p>
      </div>
      <div class="flex-1 flex flex-col gap-5">
        <div class="flex flex-wrap gap-2">
          <app-button variant="primary">Primary</app-button>
          <app-button variant="secondary">Secondary</app-button>
          <app-button variant="plain">Tertiary</app-button>
            <app-button variant="destructive">Danger</app-button>
        </div>
        <div class="flex flex-wrap gap-2">
          <app-button variant="outline">Outline</app-button>
          <app-button variant="plain">Ghost</app-button>
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <app-button size="xs" variant="primary">XS</app-button>
          <app-button size="sm" variant="primary">SM</app-button>
          <app-button size="md" variant="primary">MD</app-button>
          <app-button size="lg" variant="primary">LG</app-button>
        </div>
        <div class="flex flex-wrap gap-2">
          <app-button variant="primary" [disabled]="true">Loading</app-button>
          <app-button variant="primary" [disabled]="true">Disabled</app-button>
        </div>
      </div>
    </app-card>
  `
})
export class ButtonsShowcaseComponent {}
