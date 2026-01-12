import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonComponent } from '../../../shared/ui/button/button.component';

@Component({
  selector: 'app-button-section',
  imports: [CommonModule, MatTabsModule, ButtonComponent],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Button</h1>
        <p class="section-description">
          Buttons allow users to take actions and make choices with a single tap.
        </p>
      </header>
      
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Variants</h3>
              <p>Four visual styles: filled, outlined, text, and soft.</p>
              <div class="demo-row">
                <app-button label="Filled" color="primary"></app-button>
                <app-button label="Outlined" variant="outlined" color="primary"></app-button>
                <app-button label="Text" variant="text" color="primary"></app-button>
                <app-button label="Soft" variant="soft" color="primary"></app-button>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Colors</h3>
              <p>Primary, accent, warn, success, and neutral colors.</p>
              <div class="demo-row">
                <app-button label="Primary" color="primary"></app-button>
                <app-button label="Accent" color="accent"></app-button>
                <app-button label="Warn" color="warn"></app-button>
                <app-button label="Success" color="success"></app-button>
                <app-button label="Neutral" color="neutral"></app-button>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Sizes</h3>
              <p>Small, medium, and large sizes.</p>
              <div class="demo-row">
                <app-button label="Small" size="small" color="primary"></app-button>
                <app-button label="Medium" size="medium" color="primary"></app-button>
                <app-button label="Large" size="large" color="primary"></app-button>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>States</h3>
              <p>Loading and disabled states.</p>
              <div class="demo-row">
                <app-button label="Default" color="primary"></app-button>
                <app-button label="Disabled" [disabled]="true" color="primary"></app-button>
                <app-button label="Loading" [loading]="true" color="primary"></app-button>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>With Icons</h3>
              <p>Icons on the left or as icon-only buttons.</p>
              <div class="demo-row">
                <app-button label="Add Item" icon="add" color="primary"></app-button>
                <app-button label="Delete" icon="delete" color="warn"></app-button>
                <app-button icon="settings" aria-label="Settings"></app-button>
              </div>
            </section>
          </div>
        </mat-tab>
        
        <mat-tab label="Code">
          <div class="tab-content">
            <pre class="code-block"><code>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} ButtonComponent {{ '}' }} from '@shared/ui/button';

@Component({{ '{' }}
  selector: 'app-example',
  imports: [ButtonComponent],
  template: \`
    &lt;!-- Basic Filled Button --&gt;
    &lt;app-button label="Click Me" color="primary"&gt;&lt;/app-button&gt;
    
    &lt;!-- Outlined Variant --&gt;
    &lt;app-button label="Outlined" variant="outlined" color="primary"&gt;&lt;/app-button&gt;
    
    &lt;!-- Text Variant --&gt;
    &lt;app-button label="Text Button" variant="text" color="primary"&gt;&lt;/app-button&gt;
    
    &lt;!-- Soft Variant --&gt;
    &lt;app-button label="Soft" variant="soft" color="primary"&gt;&lt;/app-button&gt;
    
    &lt;!-- Different Colors --&gt;
    &lt;app-button label="Accent" color="accent"&gt;&lt;/app-button&gt;
    &lt;app-button label="Warn" color="warn"&gt;&lt;/app-button&gt;
    &lt;app-button label="Success" color="success"&gt;&lt;/app-button&gt;
    &lt;app-button label="Neutral" color="neutral"&gt;&lt;/app-button&gt;
    
    &lt;!-- With Icons --&gt;
    &lt;app-button label="Add Item" icon="add" color="primary"&gt;&lt;/app-button&gt;
    &lt;app-button label="Delete" icon="delete" color="warn"&gt;&lt;/app-button&gt;
    &lt;app-button icon="settings" aria-label="Settings"&gt;&lt;/app-button&gt;
    
    &lt;!-- Right Icon --&gt;
    &lt;app-button label="Next" iconRight="arrow_forward"&gt;&lt;/app-button&gt;
    
    &lt;!-- Sizes --&gt;
    &lt;app-button label="Small" size="small"&gt;&lt;/app-button&gt;
    &lt;app-button label="Medium" size="medium"&gt;&lt;/app-button&gt;
    &lt;app-button label="Large" size="large"&gt;&lt;/app-button&gt;
    
    &lt;!-- Loading State --&gt;
    &lt;app-button label="Loading" [loading]="true"&gt;&lt;/app-button&gt;
    
    &lt;!-- Disabled --&gt;
    &lt;app-button label="Disabled" [disabled]="true"&gt;&lt;/app-button&gt;
    
    &lt;!-- Full Width --&gt;
    &lt;app-button label="Full Width" [fullWidth]="true"&gt;&lt;/app-button&gt;
  \`
{{ '}' }})
export class ExampleComponent {{ '{' }} {{ '}' }}</code></pre>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .section-container {
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .section-header {
      margin-bottom: 32px;
    }
    
    h1 {
      font-size: 36px;
      font-weight: 600;
      color: #1c1b1f;
      margin: 0 0 8px;
    }
    
    .section-description {
      font-size: 16px;
      color: #616161;
      margin: 0;
      line-height: 1.6;
    }
    
    .section-tabs {
      background: white;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .tab-content {
      padding: 32px;
    }
    
    .demo-group {
      margin-bottom: 40px;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      h3 {
        font-size: 18px;
        font-weight: 600;
        color: #1c1b1f;
        margin: 0 0 8px;
      }
      
      p {
        font-size: 14px;
        color: #616161;
        margin: 0 0 16px;
      }
    }
    
    .demo-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
    }
    
    .code-block {
      background: #1e1e1e;
      color: #d4d4d4;
      padding: 24px;
      border-radius: 8px;
      font-family: 'Fira Code', 'Consolas', monospace;
      font-size: 14px;
      line-height: 1.6;
      overflow-x: auto;
      margin: 0;
    }
  `]
})
export class ButtonSectionComponent {
  activeTab = signal(0);
}
