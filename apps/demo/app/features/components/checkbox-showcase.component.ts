import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '@apsara/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-showcase',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, FormsModule],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic Checkboxes</h3>
        <app-checkbox [label]="'Accept terms and conditions'" />
        <app-checkbox [label]="'Subscribe to newsletter'" [checked]="true" />
        <app-checkbox [label]="'Disabled option'" [disabled]="true" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Indeterminate State</h3>
        <app-checkbox
          [label]="'Select all'"
          [isIndeterminate]="true"
          (onChange)="onSelectAll($event)" />
        <div class="pl-6 space-y-2">
          <app-checkbox [label]="'Option 1'" [(ngModel)]="option1" />
          <app-checkbox [label]="'Option 2'" [(ngModel)]="option2" />
          <app-checkbox [label]="'Option 3'" [(ngModel)]="option3" />
        </div>
      </div>
    </div>
  `
})
export class CheckboxShowcaseComponent {
  option1 = signal(false);
  option2 = signal(false);
  option3 = signal(false);

  onSelectAll(value: boolean): void {
    this.option1.set(value);
    this.option2.set(value);
    this.option3.set(value);
  }
}
