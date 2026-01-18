import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from '@apsara/ui';
import { ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-snackbar-showcase',
  standalone: true,
  imports: [CommonModule, SnackbarComponent, ButtonComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Snackbar Examples</h3>
        <div class="flex flex-wrap gap-3">
          <app-button label="Show Success" (clicked)="showSnackbar('success')" />
          <app-button label="Show Error" variant="danger" (clicked)="showSnackbar('error')" />
          <app-button label="Show Info" variant="secondary" (clicked)="showSnackbar('info')" />
          <app-button label="Show with Action" variant="tertiary" (clicked)="showSnackbar('action')" />
        </div>
      </div>

      <app-snackbar
        [isOpen]="snackbarOpen()"
        [title]="snackbarTitle()"
        [message]="snackbarMessage()"
        [icon]="snackbarIcon()"
        [action]="snackbarAction()"
        [duration]="4000"
        (closed)="onSnackbarClose()"
        (actionClicked)="onActionClick()" />
    </div>
  `
})
export class SnackbarShowcaseComponent {
  snackbarOpen = signal(false);
  snackbarTitle = signal('');
  snackbarMessage = signal('');
  snackbarIcon = signal('');
  snackbarAction = signal('');

  showSnackbar(type: string): void {
    switch (type) {
      case 'success':
        this.snackbarTitle.set('Success');
        this.snackbarMessage.set('Your changes have been saved.');
        this.snackbarIcon.set('check_circle');
        this.snackbarAction.set('');
        break;
      case 'error':
        this.snackbarTitle.set('Error');
        this.snackbarMessage.set('Something went wrong. Please try again.');
        this.snackbarIcon.set('error');
        this.snackbarAction.set('Retry');
        break;
      case 'info':
        this.snackbarTitle.set('Info');
        this.snackbarMessage.set('New updates are available.');
        this.snackbarIcon.set('info');
        this.snackbarAction.set('');
        break;
      case 'action':
        this.snackbarTitle.set('Reminder');
        this.snackbarMessage.set('You have a meeting in 10 minutes.');
        this.snackbarIcon.set('notifications');
        this.snackbarAction.set('View');
        break;
    }
    this.snackbarOpen.set(true);
  }

  onSnackbarClose(): void {
    this.snackbarOpen.set(false);
  }

  onActionClick(): void {
    console.log('Snackbar action clicked');
  }
}
