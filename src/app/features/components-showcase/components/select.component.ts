import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-select-section',
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatTabsModule],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Select</h1>
        <p class="section-description">Selects allow users to choose from a list of options.</p>
      </header>
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Basic Select</h3>
              <div class="demo-row">
                <mat-form-field appearance="outline">
                  <mat-label>Favorite fruit</mat-label>
                  <mat-select>
                    <mat-option value="apple">Apple</mat-option>
                    <mat-option value="banana">Banana</mat-option>
                    <mat-option value="cherry">Cherry</mat-option>
                  </mat-select>
                </mat-form-field>
              </div>
            </section>
          </div>
        </mat-tab>
        <mat-tab label="Code">
          <div class="tab-content"><pre class="code-block"><code>&lt;mat-form-field appearance="outline"&gt;
  &lt;mat-label&gt;Favorite fruit&lt;/mat-label&gt;
  &lt;mat-select&gt;
    &lt;mat-option value="apple"&gt;Apple&lt;/mat-option&gt;
  &lt;/mat-select&gt;
&lt;/mat-form-field&gt;</code></pre></div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`.section-container { max-width: 1000px; margin: 0 auto; } .section-header { margin-bottom: 32px; } h1 { font-size: 36px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; } .section-description { font-size: 16px; color: #616161; margin: 0; line-height: 1.6; } .section-tabs { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); } .tab-content { padding: 32px; } .demo-group { margin-bottom: 40px; } .demo-group h3 { font-size: 18px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; } .demo-group p { font-size: 14px; color: #616161; margin: 0 0 16px; } .demo-row { display: flex; gap: 16px; flex-wrap: wrap; } .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }`]
})
export class SelectSectionComponent { activeTab = signal(0); }
