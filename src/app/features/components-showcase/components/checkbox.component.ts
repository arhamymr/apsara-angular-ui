import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-checkbox-section',
  imports: [CommonModule, MatCheckboxModule, MatTabsModule],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Checkbox</h1>
        <p class="section-description">Checkboxes allow users to select multiple options.</p>
      </header>
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Basic Checkbox</h3>
              <div class="demo-row">
                <mat-checkbox>Option 1</mat-checkbox>
                <mat-checkbox>Option 2</mat-checkbox>
                <mat-checkbox disabled>Disabled</mat-checkbox>
              </div>
            </section>
          </div>
        </mat-tab>
        <mat-tab label="Code">
          <div class="tab-content"><pre class="code-block"><code>&lt;mat-checkbox&gt;Option&lt;/mat-checkbox&gt;</code></pre></div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`.section-container { max-width: 1000px; margin: 0 auto; } .section-header { margin-bottom: 32px; } h1 { font-size: 36px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; } .section-description { font-size: 16px; color: #616161; margin: 0; line-height: 1.6; } .section-tabs { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); } .tab-content { padding: 32px; } .demo-group { margin-bottom: 40px; } .demo-group h3 { font-size: 18px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; } .demo-group p { font-size: 14px; color: #616161; margin: 0 0 16px; } .demo-row { display: flex; gap: 16px; flex-wrap: wrap; } .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }`]
})
export class CheckboxSectionComponent { activeTab = signal(0); }
