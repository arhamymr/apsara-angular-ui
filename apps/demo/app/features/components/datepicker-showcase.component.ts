import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from '@apsara/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker-showcase',
  standalone: true,
  imports: [CommonModule, DatepickerComponent, FormsModule],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic Datepicker</h3>
        <app-datepicker
          [placeholder]="'Select a date'"
          [(ngModel)]="selectedDate"
          (changed)="onDateChange($event)" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">With Min/Max Dates</h3>
        <app-datepicker
          [placeholder]="'Select booking date'"
          [minDate]="minDate"
          [maxDate]="maxDate"
          [(ngModel)]="bookingDate" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Selected Date:</strong> {{ formatDate(selectedDate()) }}
        </p>
        <p class="text-sm text-blue-600">
          <strong>Booking Date:</strong> {{ formatDate(bookingDate()) }}
        </p>
      </div>
    </div>
  `
})
export class DatepickerShowcaseComponent {
  selectedDate = signal<Date | null>(null);
  bookingDate = signal<Date | null>(null);
  minDate = new Date();
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 3));

  onDateChange(date: Date | null): void {
    this.selectedDate.set(date);
  }

  formatDate(date: Date | null): string {
    if (!date) return 'None';
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
