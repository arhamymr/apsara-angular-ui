import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '@apsara/ui';
import { ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-stepper-showcase',
  standalone: true,
  imports: [CommonModule, StepperComponent, ButtonComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Horizontal Stepper</h3>
        <app-stepper
          [steps]="['Account', 'Profile', 'Review']"
          [currentStep]="currentStep()"
          (stepChange)="onStepChange($event)" />
        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
          <p class="text-sm text-gray-600">
            Current Step: <strong>Step {{ currentStep() + 1 }} - {{ getStepContent() }}</strong>
          </p>
        </div>
      </div>
    </div>
  `
})
export class StepperShowcaseComponent {
  currentStep = signal(0);

  onStepChange(step: number): void {
    this.currentStep.set(step);
  }

  getStepContent(): string {
    const contents = [
      'Enter your account details',
      'Fill in your profile information',
      'Review before submitting'
    ];
    return contents[this.currentStep()];
  }
}
