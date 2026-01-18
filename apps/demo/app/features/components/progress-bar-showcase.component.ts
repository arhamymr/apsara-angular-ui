import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent, ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-progress-bar-showcase',
  standalone: true,
  imports: [CommonModule, ProgressComponent, ButtonComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Determinate Progress</h3>
        <app-progress
          [value]="progressValue()"
          [max]="100"
          color="primary" />
        <div class="flex items-center gap-2">
          <app-button size="sm" label="-10%" (clicked)="decreaseProgress()" />
          <app-button size="sm" label="+10%" (clicked)="increaseProgress()" />
        </div>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Different Colors</h3>
        <app-progress [value]="25" color="primary" />
        <app-progress [value]="50" color="success" />
        <app-progress [value]="75" color="warning" />
        <app-progress [value]="100" color="danger" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Sizes</h3>
        <app-progress [value]="60" size="sm" />
        <app-progress [value]="60" size="md" />
        <app-progress [value]="60" size="lg" />
      </div>
    </div>
  `
})
export class ProgressBarShowcaseComponent {
  progressValue = signal(60);

  increaseProgress(): void {
    this.progressValue.update(v => Math.min(v + 10, 100));
  }

  decreaseProgress(): void {
    this.progressValue.update(v => Math.max(v - 10, 0));
  }
}
