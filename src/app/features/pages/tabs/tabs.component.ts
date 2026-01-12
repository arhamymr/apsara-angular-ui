import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-tabs',
  imports: [RouterLink, MatTabsModule, MatIconModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Tabs</span>
      </nav>
      
      <header class="page-header">
        <h1>Tabs</h1>
        <p>Tabs organize content into separate views.</p>
      </header>
      
      <section class="demo-section">
        <h2>Basic Tabs</h2>
        <p>Simple tab navigation.</p>
        <div class="demo-row">
          <mat-tab-group>
            <mat-tab label="First">Content of the first tab</mat-tab>
            <mat-tab label="Second">Content of the second tab</mat-tab>
            <mat-tab label="Third">Content of the third tab</mat-tab>
          </mat-tab-group>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Tabs with Icons</h2>
        <p>Tabs with icons in labels.</p>
        <div class="demo-row">
          <mat-tab-group>
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon>home</mat-icon>
                Home
              </ng-template>
              <div class="tab-content">
                <p>Home content goes here</p>
              </div>
            </mat-tab>
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon>person</mat-icon>
                Profile
              </ng-template>
              <div class="tab-content">
                <p>Profile content goes here</p>
              </div>
            </mat-tab>
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon>settings</mat-icon>
                Settings
              </ng-template>
              <div class="tab-content">
                <p>Settings content goes here</p>
              </div>
            </mat-tab>
          </mat-tab-group>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Async Tabs</h2>
        <p>Tabs with lazy-loaded content.</p>
        <div class="demo-row">
          <mat-tab-group>
            <mat-tab label="Tab 1">
              <div class="tab-content">
                <p>First tab content</p>
              </div>
            </mat-tab>
            <mat-tab label="Tab 2">
              <div class="tab-content">
                <p>Second tab content</p>
              </div>
            </mat-tab>
            <mat-tab label="Tab 3">
              <div class="tab-content">
                <p>Third tab content</p>
              </div>
            </mat-tab>
          </mat-tab-group>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Tab Colors</h2>
        <p>Tabs with different header colors.</p>
        <div class="demo-row">
          <mat-tab-group headerPosition="below">
            <mat-tab label="Tab 1">
              <div class="tab-content">
                <p>Content with default tabs</p>
              </div>
            </mat-tab>
            <mat-tab label="Tab 2">
              <div class="tab-content">
                <p>More content here</p>
              </div>
            </mat-tab>
          </mat-tab-group>
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
    .demo-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start; }
    .tab-content { padding: 16px; }
    .tab-content p { margin: 0; color: #616161; }
    mat-icon { margin-right: 8px; }
  `]
})
export class PageTabsComponent {}
