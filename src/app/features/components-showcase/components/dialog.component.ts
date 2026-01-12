import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-dialog-section',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatTabsModule],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Dialog</h1>
        <p class="section-description">Dialogs display content in a layer above the main app.</p>
      </header>
      
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Alert Dialog</h3>
              <p>Simple alert with title and action.</p>
              <div class="demo-row">
                <div class="dialog-demo">
                  <div class="dialog-overlay">
                    <div class="dialog">
                      <div class="dialog-header"><h3>Confirm Delete</h3></div>
                      <div class="dialog-content"><p>Are you sure you want to delete this item?</p></div>
                      <div class="dialog-actions">
                        <button mat-button>Cancel</button>
                        <button mat-raised-button color="warn">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Simple Dialog</h3>
              <p>Dialog with list options.</p>
              <div class="demo-row">
                <div class="dialog-demo">
                  <div class="dialog-overlay">
                    <div class="dialog">
                      <div class="dialog-header"><h3>Select Option</h3></div>
                      <div class="dialog-content">
                        <button class="dialog-item">Option 1</button>
                        <button class="dialog-item">Option 2</button>
                        <button class="dialog-item">Option 3</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </mat-tab>
        
        <mat-tab label="Code">
          <div class="tab-content">
            <pre class="code-block"><code>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} MatDialogModule {{ '}' }} from '@angular/material/dialog';

@Component({{ '{' }}
  selector: 'app-dialog-demo',
  imports: [MatDialogModule],
  template: \`
    &lt;button mat-raised-button (click)="openDialog()"&gt;
      Open Dialog
    &lt;/button&gt;
  \`
{{ '}' }})
export class DialogDemoComponent {{ '{' }}
  openDialog() {{ '{' }}
    // Open dialog logic
  {{ '}' }}
{{ '}' }}</code></pre>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .section-container { max-width: 1000px; margin: 0 auto; }
    .section-header { margin-bottom: 32px; }
    h1 { font-size: 36px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .section-description { font-size: 16px; color: #616161; margin: 0; line-height: 1.6; }
    .section-tabs { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
    .tab-content { padding: 32px; }
    .demo-group { margin-bottom: 40px; }
    .demo-group h3 { font-size: 18px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .demo-group p { font-size: 14px; color: #616161; margin: 0 0 16px; }
    .demo-row { display: flex; gap: 16px; flex-wrap: wrap; }
    .dialog-demo { position: relative; width: 100%; height: 250px; background: #f5f5f5; border-radius: 8px; overflow: hidden; }
    .dialog-overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; }
    .dialog { background: white; border-radius: 12px; width: 320px; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25); }
    .dialog-header { padding: 20px 24px 8px; }
    .dialog-header h3 { margin: 0; font-size: 20px; font-weight: 600; }
    .dialog-content { padding: 16px 24px; }
    .dialog-content p { margin: 0; color: #616161; }
    .dialog-actions { padding: 8px 12px; display: flex; justify-content: flex-end; gap: 8px; }
    .dialog-item { display: block; width: 100%; padding: 16px 24px; text-align: left; background: none; border: none; cursor: pointer; }
    .dialog-item:hover { background: #f5f5f5; }
    .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }
  `]
})
export class DialogSectionComponent {
  activeTab = signal(0);
}
