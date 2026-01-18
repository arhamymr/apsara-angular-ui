import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '@apsara/ui';

@Component({
  selector: 'app-slider-showcase',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Volume Control</h3>
        <div class="flex items-center gap-4">
          <i class="material-icons text-gray-400">volume_down</i>
          <app-slider
            [min]="0"
            [max]="100"
            [modelValue]="volume()"
            [showValue]="true"
            (changed)="onVolumeChange($event)" />
          <i class="material-icons text-gray-400">volume_up</i>
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Price Range</h3>
        <app-slider
          [min]="0"
          [max]="1000"
          [step]="10"
          [modelValue]="price()"
          [showValue]="true"
          (changed)="onPriceChange($event)" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Different Sizes</h3>
        <app-slider
          [modelValue]="30"
          [size]="'sm'"
          [showValue]="false" />
        <app-slider
          [modelValue]="50"
          [size]="'md'"
          [showValue]="false" />
        <app-slider
          [modelValue]="70"
          [size]="'lg'"
          [showValue]="false" />
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
export class SliderShowcaseComponent {
  volume = signal(75);
  price = signal(500);

  onVolumeChange(value: number): void {
    this.volume.set(value);
  }

  onPriceChange(value: number): void {
    this.price.set(value);
  }
}
