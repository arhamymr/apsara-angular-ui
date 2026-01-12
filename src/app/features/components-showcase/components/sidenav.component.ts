import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-sidenav-section',
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, MatTabsModule],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Sidenav</h1>
        <p class="section-description">Sidenavs provide access to destinations in an app.</p>
      </header>
      
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Side Navigation</h3>
              <p>Collapsible side navigation panel.</p>
              <div class="demo-row">
                <div class="sidenav-demo">
                  <mat-sidenav-container class="sidenav-container">
                    <mat-sidenav mode="side" opened class="sidenav-panel">
                      <div class="sidenav-header">
                        <span class="sidenav-title">Menu</span>
                      </div>
                      <mat-nav-list>
                        <a mat-list-item routerLinkActive="active"><mat-icon matListItemIcon>dashboard</mat-icon><span matListItemTitle>Dashboard</span></a>
                        <a mat-list-item routerLinkActive="active"><mat-icon matListItemIcon>folder</mat-icon><span matListItemTitle>Projects</span></a>
                        <a mat-list-item routerLinkActive="active"><mat-icon matListItemIcon>group</mat-icon><span matListItemTitle>Team</span></a>
                        <a mat-list-item routerLinkActive="active"><mat-icon matListItemIcon>settings</mat-icon><span matListItemTitle>Settings</span></a>
                      </mat-nav-list>
                    </mat-sidenav>
                    <mat-sidenav-content class="sidenav-content">
                      <p>Main content area</p>
                    </mat-sidenav-content>
                  </mat-sidenav-container>
                </div>
              </div>
            </section>
          </div>
        </mat-tab>
        
        <mat-tab label="Code">
          <div class="tab-content">
            <pre class="code-block"><code>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} MatSidenavModule {{ '}' }} from '@angular/material/sidenav';

@Component({{ '{' }}
  selector: 'app-sidenav-demo',
  imports: [MatSidenavModule],
  template: \`
    &lt;mat-sidenav-container&gt;
      &lt;mat-sidenav mode="side" opened&gt;
        Navigation content
      &lt;/mat-sidenav&gt;
      &lt;mat-sidenav-content&gt;
        Main content
      &lt;/mat-sidenav-content&gt;
    &lt;/mat-sidenav-container&gt;
  \`
{{ '}' }})
export class SidenavDemoComponent {{ '{' }} {{ '}' }}</code></pre>
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
    .sidenav-demo { width: 100%; height: 300px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
    .sidenav-container { height: 100%; }
    .sidenav-panel { width: 240px; background: #fafafa; border-right: 1px solid #e0e0e0; }
    .sidenav-header { padding: 16px; border-bottom: 1px solid #e0e0e0; }
    .sidenav-title { font-size: 18px; font-weight: 600; }
    .sidenav-content { padding: 16px; }
    .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }
  `]
})
export class SidenavSectionComponent {
  activeTab = signal(0);
}
