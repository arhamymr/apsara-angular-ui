import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-slide-toggle',
  imports: [RouterLink, MatSlideToggleModule, FormsModule, MatIconModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Slide Toggle</span>
      </nav>
      
      <header class="page-header">
        <h1>Slide Toggle</h1>
        <p>On/off switch for binary settings.</p>
      </header>
      
      <section class="demo-section">
        <h2>Basic Toggle</h2>
        <p>Simple on/off switch.</p>
        <div class="demo-row">
          <mat-slide-toggle>Wi-Fi</mat-slide-toggle>
          <mat-slide-toggle [checked]="true">Bluetooth</mat-slide-toggle>
          <mat-slide-toggle [disabled]="true">Airplane Mode (Disabled)</mat-slide-toggle>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Color Variants</h2>
        <p>Toggles with different colors.</p>
        <div class="demo-row">
          <mat-slide-toggle color="primary">Primary</mat-slide-toggle>
          <mat-slide-toggle color="accent">Accent</mat-slide-toggle>
          <mat-slide-toggle color="warn">Warn</mat-slide-toggle>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>With ngModel</h2>
        <p>Toggles bound to a model.</p>
        <div class="demo-row">
          <mat-slide-toggle [(ngModel)]="notifications">
            Notifications
          </mat-slide-toggle>
          <mat-slide-toggle [(ngModel)]="darkMode">
            Dark Mode
          </mat-slide-toggle>
          <mat-slide-toggle [(ngModel)]="autoSave">
            Auto Save
          </mat-slide-toggle>
          <p class="status-text">
            Notifications: {{notifications ? 'On' : 'Off'}} | 
            Dark Mode: {{darkMode ? 'On' : 'Off'}} | 
            Auto Save: {{autoSave ? 'On' : 'Off'}}
          </p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container { max-width: 1000px; margin: 0 auto; padding: 32px; }
    .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; font-size: 14px; }
    .breadcrumb a { color: #1976d2; text-decoration: none; }
    .breadcrumb mat-icon { font-size: 18px; width: 18px; height: 18px; color: #9e9e9e; }
    .page-header { margin-bottom: 48px; }
    .page-header h1 { font-size: 36px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .page-header p { font-size: 16px; color: #616161; margin: 0; line-height: 1.6; }
    .demo-section { margin-bottom: 48px; padding: 24px; background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
    .demo-section h2 { font-size: 20px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .demo-section p { font-size: 14px; color: #616161; margin: 0 0 20px; }
    .demo-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; flex-direction: column; align-items: flex-start; }
    .status-text { margin-top: 16px; color: #616161; }
  `]
})
export class PageSlideToggleComponent {
  notifications = true;
  darkMode = false;
  autoSave = true;
}
