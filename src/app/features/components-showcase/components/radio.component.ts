import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-radio-section',
  imports: [CommonModule, MatRadioModule, MatTabsModule],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Radio</h1>
        <p class="section-description">Radio buttons allow users to select one option from a set.</p>
      </header>
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Basic Radio Group</h3>
              <div class="demo-row">
                <mat-radio-group>
                  <mat-radio-button value="option1">Option 1</mat-radio-button>
                  <mat-radio-button value="option2">Option 2</mat-radio-button>
                  <mat-radio-button value="option3">Option 3</mat-radio-button>
                </mat-radio-group>
              </div>
            </section>
          </div>
        </mat-tab>
        <mat-tab label="Code">
          <div class="tab-content"><pre class="code-block"><code>&lt;mat-radio-group&gt;
  &lt;mat-radio-button value="option1"&gt;Option 1&lt;/mat-radio-button&gt;
&lt;/mat-radio-group&gt;</code></pre></div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`.section-container { max-width: 1000px; margin: 0 auto; } .section-header { margin-bottom: 32px; } h1 { font-size: 36px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; } .section-description { font-size: 16px; color: #616161; margin: 0; line-height: 1.6; } .section-tabs { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); } .tab-content { padding: 32px; } .demo-group { margin-bottom: 40px; } .demo-group h3 { font-size: 18px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; } .demo-group p { font-size: 14px; color: #616161; margin: 0 0 16px; } .demo-row { display: flex; gap: 16px; flex-wrap: wrap; } .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }`]
})
export class RadioSectionComponent { activeTab = signal(0); }
