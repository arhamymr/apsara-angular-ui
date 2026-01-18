import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '@apsara/ui';
import { CardComponent } from '@apsara/ui';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-input-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent, CardComponent, CodeSnippetComponent],
  template: `
    <section id="input" class="mb-16 scroll-m-20">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-foreground mb-2">Input</h2>
        <p class="text-dimmed">Inputs allow users to enter text into a UI</p>
      </div>

      <app-card>
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">Basic Input</h3>
          <div class="grid grid-cols-1 max-w-[320px] gap-4">
            <app-input
              label="Username"
              placeholder="Enter your username"
              [(ngModel)]="inputValue" />
            <p class="text-sm text-dimmed mt-2 font-mono">Value: {{ inputValue }}</p>
          </div>
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">States</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Default</span>
              <app-input label="Default" placeholder="Placeholder" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">With Hint</span>
              <app-input
                label="Email"
                placeholder="Enter email"
                hint="We'll never share your email" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">With Error</span>
              <app-input
                label="Password"
                type="password"
                placeholder="Enter password"
                error="Password must be at least 8 characters"
                [showPassword]="showPassword()" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Disabled</span>
              <app-input
                label="Disabled"
                placeholder="Cannot edit"
                [disabled]="true" />
            </div>
          </div>
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">Input Types</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Text</span>
              <app-input type="text" label="Text" placeholder="Text input" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Email</span>
              <app-input type="email" label="Email" placeholder="email@example.com" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Password</span>
              <app-input
                type="password"
                label="Password"
                placeholder="Enter password"
                [showPassword]="showPassword()"
                (suffixClick)="togglePassword()" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Number</span>
              <app-input type="number" label="Quantity" placeholder="0" />
            </div>
          </div>
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">Required Field</h3>
          <div class="grid grid-cols-1 max-w-[320px] gap-4">
            <app-input
              label="Full Name"
              placeholder="Enter your full name"
              [required]="true" />
            <span class="text-xs text-dimmed">This field is required</span>
          </div>
        </div>
      </app-card>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Usage</h3>
        <app-code-snippet [code]="inputImportCode" language="typescript" />
        <app-code-snippet [code]="inputUsageCode" language="html" />
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
              <td class="p-3 border-b border-border text-foreground">Floating label text</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">type</code></td>
              <td class="p-3 border-b border-border text-foreground">'text' | 'email' | 'password' | 'number' | 'tel' | 'url'</td>
              <td class="p-3 border-b border-border text-foreground">'text'</td>
              <td class="p-3 border-b border-border text-foreground">Input type</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">placeholder</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Placeholder text</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">value</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Input value</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">disabled</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Disables the input</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">error</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Error message text</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">hint</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Hint text below input</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">required</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Shows required indicator</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">prefixIcon</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Icon before input (emoji/text)</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">suffixIcon</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Icon after input (emoji/text)</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">showPassword</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Show password toggle button</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
})
export class InputShowcaseComponent {
  inputValue = '';
  showPassword = signal(false);

  togglePassword(): void {
    this.showPassword.update(v => !v);
  }

  inputImportCode = `import { InputComponent } from '@apsara/ui/input';`;

  inputUsageCode = `<app-input
  label="Email"
  type="email"
  placeholder="Enter your email"
  hint="We'll never share your email"
  [(ngModel)]="email" />`;
}
