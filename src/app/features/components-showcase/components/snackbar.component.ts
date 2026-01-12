import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-snackbar-section',
  imports: [CommonModule, MatSnackBarModule, MatButtonModule, MatIconModule, MatTabsModule],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Snackbar</h1>
        <p class="section-description">Snackbars provide brief notifications and actions.</p>
      </header>
      
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Success Snackbar</h3>
              <p>Positive feedback message.</p>
              <div class="demo-row">
                <div class="snackbar-demo">
                  <div class="snackbar snackbar-success">
                    <mat-icon>check_circle</mat-icon>
                    <span>Changes saved successfully!</span>
                    <button class="snackbar-action">Dismiss</button>
                  </div>
                </div>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Error Snackbar</h3>
              <p>Error or warning message.</p>
              <div class="demo-row">
                <div class="snackbar-demo">
                  <div class="snackbar snackbar-error">
                    <mat-icon>error</mat-icon>
                    <span>Something went wrong.</span>
                    <button class="snackbar-action">Retry</button>
                  </div>
                </div>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Info Snackbar</h3>
              <p>Informational message.</p>
              <div class="demo-row">
                <div class="snackbar-demo">
                  <div class="snackbar snackbar-info">
                    <mat-icon>info</mat-icon>
                    <span>New update available.</span>
                    <button class="snackbar-action">Update</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </mat-tab>
        
        <mat-tab label="Code">
          <div class="tab-content">
            <pre class="code-block"><code>import {{ '{' }} Component, inject {{ '}' }} from '@angular/core';
import {{ '{' }} MatSnackBar {{ '}' }} from '@angular/material/snack-bar';

@Component({{ '{' }}
  selector: 'app-snackbar-demo',
  template: \`
    &lt;button mat-raised-button (click)="showSuccess()"&gt;
      Show Success
    &lt;/button&gt;
  \`
{{ '}' }})
export class SnackbarDemoComponent {{ '{' }}
  private snackBar = inject(MatSnackBar);
  
  showSuccess() {{ '{' }}
    this.snackBar.open('Success message', 'Dismiss', {{ '{' }}
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    {{ '}' }});
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
    .snackbar-demo { position: relative; width: 100%; height: 150px; background: #f5f5f5; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
    .snackbar { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); min-width: 320px; }
    .snackbar-success { background: #4caf50; color: white; }
    .snackbar-error { background: #f44336; color: white; }
    .snackbar-info { background: #2196f3; color: white; }
    .snackbar mat-icon { font-size: 20px; width: 20px; height: 20px; }
    .snackbar span { flex: 1; font-size: 14px; font-weight: 500; }
    .snackbar-action { padding: 6px 12px; background: rgba(255, 255, 255, 0.2); color: white; border: none; border-radius: 4px; font-size: 13px; font-weight: 500; cursor: pointer; }
    .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }
  `]
})
export class SnackbarSectionComponent {
  activeTab = signal(0);
}
