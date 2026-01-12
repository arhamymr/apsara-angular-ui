import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-tooltip',
  imports: [RouterLink, MatTooltipModule, MatButtonModule, MatIconModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Tooltip</span>
      </nav>
      
      <header class="page-header">
        <h1>Tooltip</h1>
        <p>Tooltip for displaying additional information.</p>
      </header>
      
      <section class="demo-section">
        <h2>Basic Tooltips</h2>
        <p>Tooltips on buttons and icons.</p>
        <div class="demo-row">
          <button mat-raised-button matTooltip="This is a tooltip">
            Hover Me
          </button>
          <button mat-icon-button matTooltip="Settings">
            <mat-icon>settings</mat-icon>
          </button>
          <button mat-fab matTooltip="Add new item">
            <mat-icon>add</mat-icon>
          </button>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Tooltip Positions</h2>
        <p>Tooltips can appear on different sides.</p>
        <div class="demo-row">
          <button mat-raised-button matTooltip="Above" matTooltipPosition="above">Above</button>
          <button mat-raised-button matTooltip="Below" matTooltipPosition="below">Below</button>
          <button mat-raised-button matTooltip="Left" matTooltipPosition="left">Left</button>
          <button mat-raised-button matTooltip="Right" matTooltipPosition="right">Right</button>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Disabled Tooltip</h2>
        <p>Tooltip can be disabled.</p>
        <div class="demo-row">
          <button mat-raised-button matTooltip="Enabled tooltip">Enabled</button>
          <button mat-raised-button [matTooltipDisabled]="true" matTooltip="This tooltip is disabled">Disabled</button>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Tooltip with Delay</h2>
        <p>Tooltips with custom show/hide delays.</p>
        <div class="demo-row">
          <button mat-raised-button matTooltip="Quick show" [matTooltipShowDelay]="200">Quick Show</button>
          <button mat-raised-button matTooltip="Slow show" [matTooltipShowDelay]="1000">Slow Show</button>
          <button mat-raised-button matTooltip="Quick hide" [matTooltipHideDelay]="200">Quick Hide</button>
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
    .demo-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
  `]
})
export class PageTooltipComponent {}
