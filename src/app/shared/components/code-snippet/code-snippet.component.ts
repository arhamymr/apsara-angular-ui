import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-code-snippet',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  template: `
    <div class="code-snippet">
      <div class="header">
        <div class="header-left">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <span class="language">{{ language() }}</span>
        <div class="header-right">
          <button mat-icon-button 
                  [matTooltip]="copyTooltip()"
                  (click)="copyCode()"
                  class="copy-btn">
            <mat-icon>{{ copied() ? 'check' : 'content_copy' }}</mat-icon>
          </button>
        </div>
      </div>
      <pre class="code-content"><code>{{ code() }}</code></pre>
    </div>
  `,
  styles: [`
    .code-snippet {
      background: #1e1e1e;
      border-radius: 12px;
      overflow: hidden;
      margin: 20px 0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: #2d2d2d;
      border-bottom: 1px solid #3d3d3d;
    }
    
    .header-left {
      display: flex;
      gap: 8px;
    }
    
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    
    .dot.red { background: #ff5f56; }
    .dot.yellow { background: #ffbd2e; }
    .dot.green { background: #27c93f; }
    
    .language {
      font-size: 12px;
      color: #888;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
    
    .header-right {
      display: flex;
      gap: 4px;
    }
    
    .copy-btn {
      color: #888;
      transition: all 0.2s ease;
      
      &:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
      }
    }
    
    .code-content {
      margin: 0;
      padding: 20px;
      overflow-x: auto;
      background: #1e1e1e;
    }
    
    code {
      font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
      font-size: 14px;
      color: #d4d4d4;
      line-height: 1.7;
      white-space: pre;
    }
    
    :host ::ng-deep {
      .keyword { color: #569cd6; }
      .string { color: #ce9178; }
      .number { color: #b5cea8; }
      .comment { color: #6a9955; }
      .type { color: #4ec9b0; }
      .function { color: #dcdcaa; }
      .variable { color: #9cdcfe; }
      .operator { color: #d4d4d4; }
      .tag { color: #569cd6; }
      .attr-name { color: #9cdcfe; }
      .attr-value { color: #ce9178; }
    }
  `]
})
export class CodeSnippetComponent {
  readonly code = input<string>('');
  readonly language = input<string>('typescript');
  
  copied = signal(false);
  copyTooltip = signal<string>('Copy Code');
  
  constructor() {
    effect(() => {
      if (this.copied()) {
        this.copyTooltip.set('Copied!');
        setTimeout(() => {
          this.copied.set(false);
          this.copyTooltip.set('Copy Code');
        }, 2000);
      }
    });
  }
  
  async copyCode(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.code());
      this.copied.set(true);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
}
