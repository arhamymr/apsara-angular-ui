import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from '@apsara/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timepicker-showcase',
  standalone: true,
  imports: [CommonModule, TimepickerComponent, FormsModule],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic Timepicker</h3>
        <app-timepicker
          [(ngModel)]="selectedTime"
          (changed)="onTimeChange($event)" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Selected Time:</strong> {{ selectedTime() || 'None' }}
        </p>
      </div>
    </div>
  `
})
export class TimepickerShowcaseComponent {
  selectedTime = signal<string>('12:00');

  onTimeChange(value: string): void {
    this.selectedTime.set(value);
  }
}
