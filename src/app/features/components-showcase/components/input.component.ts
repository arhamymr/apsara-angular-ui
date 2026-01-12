import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { InputComponent } from '../../../shared/ui/input/input.component';

@Component({
  selector: 'app-input-section',
  imports: [CommonModule, MatTabsModule, InputComponent],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Input</h1>
        <p class="section-description">Text fields allow users to enter text into a UI.</p>
      </header>
      
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Basic Input</h3>
              <p>Standard text input with label and placeholder.</p>
              <div class="demo-row">
                <app-input label="Username" placeholder="Enter your username" prefixIcon="person"></app-input>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>With Icons</h3>
              <p>Inputs with prefix and suffix icons.</p>
              <div class="demo-row">
                <app-input label="Email" placeholder="Enter your email" type="email" prefixIcon="email"></app-input>
                <app-input 
                  label="Password" 
                  placeholder="Enter password" 
                  [type]="hidePassword() ? 'password' : 'text'"
                  suffixButton="visibility"
                  (suffixClick)="togglePassword()">
                </app-input>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Error State</h3>
              <p>Input with error message.</p>
              <div class="demo-row">
                <app-input label="Email" placeholder="Enter your email" value="invalid-email" error="Please enter a valid email"></app-input>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Disabled</h3>
              <p>Disabled input state.</p>
              <div class="demo-row">
                <app-input label="Disabled" placeholder="Disabled input" [disabled]="true"></app-input>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Variants</h3>
              <p>Outline and fill appearances.</p>
              <div class="demo-row">
                <app-input label="Outline" placeholder="Outline variant" appearance="outline"></app-input>
                <app-input label="Fill" placeholder="Fill variant" appearance="fill"></app-input>
              </div>
            </section>
          </div>
        </mat-tab>
        
        <mat-tab label="Code">
          <div class="tab-content">
            <pre class="code-block"><code>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} InputComponent {{ '}' }} from '@shared/ui/input';

@Component({{ '{' }}
  selector: 'app-example',
  imports: [InputComponent],
  template: \`
    &lt;!-- Basic Input --&gt;
    &lt;app-input 
      label="Username" 
      placeholder="Enter your username"
      prefixIcon="person"&gt;
    &lt;/app-input&gt;
    
    &lt;!-- Email with Prefix Icon --&gt;
    &lt;app-input 
      label="Email" 
      placeholder="Enter your email" 
      type="email"
      prefixIcon="email"&gt;
    &lt;/app-input&gt;
    
    &lt;!-- Password with Toggle Visibility --&gt;
    &lt;app-input 
      label="Password" 
      placeholder="Enter password"
      [type]="hidePassword ? 'password' : 'text'"
      suffixButton="visibility"
      (suffixClick)="togglePassword()"&gt;
    &lt;/app-input&gt;
    
    &lt;!-- Input with Error --&gt;
    &lt;app-input 
      label="Email" 
      placeholder="Enter your email"
      value="invalid-email"
      error="Please enter a valid email"&gt;
    &lt;/app-input&gt;
    
    &lt;!-- Disabled Input --&gt;
    &lt;app-input 
      label="Disabled" 
      placeholder="Disabled input"
      [disabled]="true"&gt;
    &lt;/app-input&gt;
    
    &lt;!-- Fill Appearance --&gt;
    &lt;app-input 
      label="Fill" 
      placeholder="Fill variant"
      appearance="fill"&gt;
    &lt;/app-input&gt;
  \`
{{ '}' }})
export class ExampleComponent {{ '{' }}
  hidePassword = true;
  
  togglePassword(): void {{ '{' }}
    this.hidePassword = !this.hidePassword;
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
    .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }
  `]
})
export class InputSectionComponent {
  activeTab = signal(0);
  hidePassword = signal(true);
  
  togglePassword(): void {
    this.hidePassword.update(v => !v);
  }
}
