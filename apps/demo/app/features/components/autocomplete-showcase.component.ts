import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from '@apsara/ui';

@Component({
  selector: 'app-autocomplete-showcase',
  standalone: true,
  imports: [CommonModule, AutocompleteComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Search Autocomplete</h3>
        <app-autocomplete
          [options]="searchOptions"
          [placeholder]="'Search for a programming language...'"
          [leadingIcon]="'search'"
          (optionSelected)="onLanguageSelect($event)" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Selected Language:</strong> {{ selectedLanguage() || 'None' }}
        </p>
      </div>
    </div>
  `
})
export class AutocompleteShowcaseComponent {
  selectedLanguage = signal<string>('');

  searchOptions = [
    { value: 'javascript', label: 'JavaScript', icon: 'code' },
    { value: 'typescript', label: 'TypeScript', icon: 'code' },
    { value: 'python', label: 'Python', icon: 'code' },
    { value: 'java', label: 'Java', icon: 'code' },
    { value: 'csharp', label: 'C#', icon: 'code' },
    { value: 'cpp', label: 'C++', icon: 'code' },
    { value: 'go', label: 'Go', icon: 'code' },
    { value: 'rust', label: 'Rust', icon: 'code' },
    { value: 'ruby', label: 'Ruby', icon: 'code' },
    { value: 'php', label: 'PHP', icon: 'code' }
  ];

  onLanguageSelect(option: { value: string; label: string }): void {
    this.selectedLanguage.set(option.label);
  }
}
