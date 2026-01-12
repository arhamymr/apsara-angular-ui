import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuComponent, type MenuItem } from '../../../shared/ui/menu/menu.component';

@Component({
  selector: 'app-menu-section',
  imports: [CommonModule, MatTabsModule, MenuComponent],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Menu</h1>
        <p class="section-description">Menus display a list of choices on temporary surfaces.</p>
      </header>
      
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Button Trigger</h3>
              <p>Menu triggered by a button.</p>
              <div class="demo-row">
                <app-menu 
                  label="Actions" 
                  [items]="buttonMenuItems"
                  triggerType="button"
                  color="primary">
                </app-menu>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Icon Trigger</h3>
              <p>Menu triggered by an icon button.</p>
              <div class="demo-row">
                <app-menu 
                  [items]="iconMenuItems"
                  triggerType="icon"
                  color="primary">
                </app-menu>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Cascading Menu</h3>
              <p>Menu with nested submenus.</p>
              <div class="demo-row">
                <app-menu 
                  label="Share" 
                  [items]="cascadingMenuItems"
                  triggerType="button"
                  color="primary">
                </app-menu>
              </div>
            </section>
          </div>
        </mat-tab>
        
        <mat-tab label="Code">
          <div class="tab-content">
            <pre class="code-block"><code>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} MenuComponent, type MenuItem {{ '}' }} from '../../shared/ui/menu/menu.component';

@Component({{ '{' }}
  selector: 'app-example',
  imports: [MenuComponent],
  template: \`
    &lt;!-- Button Trigger Menu --&gt;
    &lt;app-menu 
      label="Actions" 
      [items]="menuItems"
      triggerType="button"
      color="primary"&gt;
    &lt;/app-menu&gt;
    
    &lt;!-- Icon Trigger Menu --&gt;
    &lt;app-menu 
      [items]="iconMenuItems"
      triggerType="icon"&gt;
    &lt;/app-menu&gt;
  \`
{{ '}' }})
export class ExampleComponent {{ '{' }}
  menuItems: MenuItem[] = [
    {{ '{' }} label: 'New Item', icon: 'add' {{ '}' }},
    {{ '{' }} label: 'Edit', icon: 'edit' {{ '}' }},
    {{ '{' }} label: 'Duplicate', icon: 'content_copy' {{ '}' }},
    {{ '{' }} divider: true {{ '}' }},
    {{ '{' }} label: 'Delete', icon: 'delete', disabled: true {{ '}' }},
  ];
  
  iconMenuItems: MenuItem[] = [
    {{ '{' }} label: 'Refresh', icon: 'refresh' {{ '}' }},
    {{ '{' }} label: 'Settings', icon: 'settings' {{ '}' }},
    {{ '{' }} divider: true {{ '}' }},
    {{ '{' }} label: 'Sign out', icon: 'logout' {{ '}' }},
  ];
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
    .demo-row { display: flex; gap: 12px; flex-wrap: wrap; }
    .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }
  `]
})
export class MenuSectionComponent {
  activeTab = signal(0);
  
  buttonMenuItems: MenuItem[] = [
    { label: 'New Item', icon: 'add' },
    { label: 'Edit', icon: 'edit' },
    { label: 'Duplicate', icon: 'content_copy' },
    { divider: true },
    { label: 'Delete', icon: 'delete', disabled: true },
  ];
  
  iconMenuItems: MenuItem[] = [
    { label: 'Refresh', icon: 'refresh' },
    { label: 'Settings', icon: 'settings' },
    { divider: true },
    { label: 'Sign out', icon: 'logout' },
  ];
  
  cascadingMenuItems: MenuItem[] = [
    { label: 'Email', icon: 'email' },
    { label: 'Copy Link', icon: 'link' },
    { divider: true },
    { 
      label: 'Social', 
      icon: 'share',
      submenu: [
        { label: 'Facebook', icon: 'facebook' },
        { label: 'Twitter', icon: 'twitter' },
        { label: 'LinkedIn', icon: 'linkedin' },
      ]
    },
  ];
}
