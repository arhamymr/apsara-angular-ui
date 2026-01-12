import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-toolbar-section',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Toolbar</h1>
        <p class="section-description">Toolbars display information and actions related to the current screen.</p>
      </header>
      
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Primary Toolbar</h3>
              <p>Standard primary color toolbar.</p>
              <div class="demo-row">
                <div class="toolbar-demo">
                  <mat-toolbar color="primary">
                    <span>App Title</span>
                    <span class="spacer"></span>
                    <button mat-button>Home</button>
                    <button mat-button>About</button>
                    <button mat-icon-button><mat-icon>notifications</mat-icon></button>
                  </mat-toolbar>
                </div>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Accent Toolbar</h3>
              <p>Toolbar with accent color.</p>
              <div class="demo-row">
                <div class="toolbar-demo">
                  <mat-toolbar color="accent">
                    <span>Menu</span>
                    <span class="spacer"></span>
                    <button mat-button>Search</button>
                    <button mat-icon-button><mat-icon>settings</mat-icon></button>
                  </mat-toolbar>
                </div>
              </div>
            </section>
          </div>
        </mat-tab>
        
        <mat-tab label="Code">
          <div class="tab-content">
            <pre class="code-block"><code>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} MatToolbarModule {{ '}' }} from '@angular/material/toolbar';

@Component({{ '{' }}
  selector: 'app-toolbar-demo',
  imports: [MatToolbarModule],
  template: \`
    &lt;mat-toolbar color="primary"&gt;
      &lt;span&gt;App Title&lt;/span&gt;
      &lt;span class="spacer"&gt;&lt;/span&gt;
      &lt;button mat-button&gt;Home&lt;/button&gt;
    &lt;/mat-toolbar&gt;
  \`
{{ '}' }})
export class ToolbarDemoComponent {{ '{' }} {{ '}' }}</code></pre>
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
    .toolbar-demo { width: 100%; border-radius: 8px; overflow: hidden; }
    .spacer { flex: 1 1 auto; }
    .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }
  `]
})
export class ToolbarSectionComponent {
  activeTab = signal(0);
}
