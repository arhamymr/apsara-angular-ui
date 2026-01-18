import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from '@apsara/ui';

@Component({
  selector: 'app-chips-showcase',
  standalone: true,
  imports: [CommonModule, ChipsComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Removable Chips</h3>
        <app-chips
          [modelValue]="tags()"
          [addable]="true"
          [placeholder]="'Add a tag...'"
          (changed)="onTagsChange($event)" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Tags:</strong> {{ getTagsString() }}
        </p>
      </div>
    </div>
  `
})
export class ChipsShowcaseComponent {
  tags = signal([
    { value: '1', label: 'JavaScript' },
    { value: '2', label: 'TypeScript' },
    { value: '3', label: 'Angular' }
  ]);

  getTagsString(): string {
    const tags = this.tags();
    if (tags.length === 0) return 'None';
    return tags.map(t => t.label).join(', ');
  }

  onTagsChange(tags: Array<{ value: string; label: string }>): void {
    this.tags.set(tags);
  }
}
