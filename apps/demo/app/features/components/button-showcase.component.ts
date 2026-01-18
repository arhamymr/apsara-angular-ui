import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, CardComponent } from '@apsara/ui';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent, CodeSnippetComponent],
  template: `
    <section id="button" class="mb-16 scroll-m-20">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-foreground mb-2">Button</h2>
        <p class="text-dimmed">Buttons allow users to take actions and make choices with a single tap</p>
      </div>

      <app-card>
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">Variants</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Primary</span>
              <app-button label="Primary" variant="primary" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Secondary</span>
              <app-button label="Secondary" variant="secondary" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Tertiary</span>
              <app-button label="Tertiary" variant="tertiary" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Danger</span>
              <app-button label="Danger" variant="danger" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Outline</span>
              <app-button label="Outline" variant="outline" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Plain</span>
              <app-button label="Plain" variant="plain" />
            </div>
          </div>
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">Sizes</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">XS</span>
              <app-button label="XS" size="xs" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">SM</span>
              <app-button label="SM" size="sm" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">MD</span>
              <app-button label="MD" size="md" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">LG</span>
              <app-button label="LG" size="lg" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Icon</span>
              <app-button size="icon">
                <span slot="">+</span>
              </app-button>
            </div>
          </div>
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">States</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Default</span>
              <app-button label="Default" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Disabled</span>
              <app-button label="Disabled" [disabled]="true" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Loading</span>
              <app-button label="Loading" [loading]="true" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Block</span>
              <app-button label="Block" [block]="true" />
            </div>
          </div>
        </div>
      </app-card>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Usage</h3>
        <app-code-snippet [code]="buttonImportCode" language="typescript" />
        <app-code-snippet [code]="buttonUsageCode" language="html" />
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Props</h3>
        <table class="w-full border-collapse text-sm bg-card rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Prop</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Type</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Default</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">label</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Button text content</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">variant</code></td>
              <td class="p-3 border-b border-border text-foreground">'primary' | 'secondary' | 'tertiary' | 'danger' | 'outline' | 'plain'</td>
              <td class="p-3 border-b border-border text-foreground">'primary'</td>
              <td class="p-3 border-b border-border text-foreground">Visual style variant</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">size</code></td>
              <td class="p-3 border-b border-border text-foreground">'xs' | 'sm' | 'md' | 'lg' | 'icon'</td>
              <td class="p-3 border-b border-border text-foreground">'md'</td>
              <td class="p-3 border-b border-border text-foreground">Button size</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">disabled</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Disables the button</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">loading</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Shows loading spinner</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">block</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Makes button full width</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">pill</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Makes button pill shaped</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">clicked</code></td>
              <td class="p-3 border-b border-border text-foreground">EventEmitter&lt;Event&gt;</td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">Emitted on button click</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
})
export class ButtonShowcaseComponent {
  buttonImportCode = `import { ButtonComponent } from '@apsara/ui/button';`;

  buttonUsageCode = `<app-button
  label="Click me"
  variant="primary"
  size="md"
  (clicked)="onClick($event)" />`;
}
