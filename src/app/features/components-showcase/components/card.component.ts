import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { CardComponent } from '../../../shared/ui/card/card.component';

@Component({
  selector: 'app-card-section',
  imports: [CommonModule, MatTabsModule, CardComponent],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Card</h1>
        <p class="section-description">Cards contain content and actions about a single subject.</p>
      </header>
      
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Elevated Card</h3>
              <p>Card with shadow elevation.</p>
              <div class="demo-row">
                <app-card header="Card Title" subheader="Card subtitle">
                  <p>Card content goes here. This is the main body of the card.</p>
                  <div class="card-actions">
                    <button mat-button>Action 1</button>
                    <button mat-button>Action 2</button>
                  </div>
                </app-card>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Outlined Card</h3>
              <p>Card with border instead of shadow.</p>
              <div class="demo-row">
                <app-card variant="outlined">
                  <p>Content with outline style.</p>
                </app-card>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Card with Image</h3>
              <p>Card with header image.</p>
              <div class="demo-row">
                <app-card 
                  image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='120' viewBox='0 0 200 120'%3E%3Crect fill='%23667eea' width='200' height='120'/%3E%3Ctext fill='white' font-family='sans-serif' font-size='16' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E"
                  header="Image Card"
                  subheader="With gradient header">
                  <p>Card with gradient image header.</p>
                </app-card>
              </div>
            </section>
            
            <section class="demo-group">
              <h3>Tonal Card</h3>
              <p>Card with tonal styling.</p>
              <div class="demo-row">
                <app-card variant="tonal" header="Tonal Card" subheader="Subtle appearance">
                  <p>Card with tonal background style.</p>
                </app-card>
              </div>
            </section>
          </div>
        </mat-tab>
        
        <mat-tab label="Code">
          <div class="tab-content">
            <pre class="code-block"><code>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} CardComponent {{ '}' }} from '../../../shared/ui/card/card.component';

@Component({{ '{' }}
  selector: 'app-example',
  imports: [CardComponent],
  template: \`
    &lt;!-- Elevated Card --&gt;
    &lt;app-card header="Card Title" subheader="Card subtitle"&gt;
      &lt;p&gt;Card content goes here.&lt;/p&gt;
      &lt;div class="card-actions"&gt;
        &lt;button mat-button&gt;Action 1&lt;/button&gt;
        &lt;button mat-button&gt;Action 2&lt;/button&gt;
      &lt;/div&gt;
    &lt;/app-card&gt;
    
    &lt;!-- Outlined Card --&gt;
    &lt;app-card variant="outlined"&gt;
      &lt;p&gt;Content with outline style.&lt;/p&gt;
    &lt;/app-card&gt;
    
    &lt;!-- Tonal Card --&gt;
    &lt;app-card variant="tonal" header="Tonal Card" subheader="Subtle appearance"&gt;
      &lt;p&gt;Card with tonal background style.&lt;/p&gt;
    &lt;/app-card&gt;
    
    &lt;!-- Card with Image --&gt;
    &lt;app-card 
      image="path/to/image.jpg"
      header="Image Card"
      subheader="With header"&gt;
      &lt;p&gt;Card with image header.&lt;/p&gt;
    &lt;/app-card&gt;
  \`
{{ '}' }})
export class ExampleComponent {{ '{' }} {{ '}' }}</code></pre>
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
    .card-actions { display: flex; gap: 8px; margin-top: 16px; }
    .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }
  `]
})
export class CardSectionComponent {
  activeTab = signal(0);
}
