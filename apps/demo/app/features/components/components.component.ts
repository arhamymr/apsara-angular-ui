import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, TabsShowcaseComponent } from '@apsara/ui';
import { ButtonShowcaseComponent } from './button-showcase.component';
import { CardShowcaseComponent } from './card-showcase.component';
import { InputShowcaseComponent } from './input-showcase.component';
import { CheckboxShowcaseComponent } from './checkbox-showcase.component';
import { RadioShowcaseComponent } from './radio-showcase.component';
import { SlideToggleShowcaseComponent } from './slide-toggle-showcase.component';
import { ButtonToggleShowcaseComponent } from './button-toggle-showcase.component';
import { SelectShowcaseComponent } from './select-showcase.component';
import { AutocompleteShowcaseComponent } from './autocomplete-showcase.component';
import { DatepickerShowcaseComponent } from './datepicker-showcase.component';
import { TimepickerShowcaseComponent } from './timepicker-showcase.component';
import { SliderShowcaseComponent } from './slider-showcase.component';
import { ChipsShowcaseComponent } from './chips-showcase.component';
import { BadgeShowcaseComponent } from './badge-showcase.component';
import { IconShowcaseComponent } from './icon-showcase.component';
import { ProgressBarShowcaseComponent } from './progress-bar-showcase.component';
import { SpinnerShowcaseComponent } from './spinner-showcase.component';
import { ToolbarShowcaseComponent } from './toolbar-showcase.component';
import { ListShowcaseComponent } from './list-showcase.component';
import { MenuShowcaseComponent } from './menu-showcase.component';
import { SidenavShowcaseComponent } from './sidenav-showcase.component';
import { TableShowcaseComponent } from './table-showcase.component';
import { TreeShowcaseComponent } from './tree-showcase.component';
import { PaginatorShowcaseComponent } from './paginator-showcase.component';
import { ExpansionPanelShowcaseComponent } from './expansion-panel-showcase.component';
import { DialogShowcaseComponent } from './dialog-showcase.component';
import { TooltipShowcaseComponent } from './tooltip-showcase.component';
import { SnackbarShowcaseComponent } from './snackbar-showcase.component';
import { BottomSheetShowcaseComponent } from './bottom-sheet-showcase.component';
import { DividerShowcaseComponent } from './divider-showcase.component';
import { GridListShowcaseComponent } from './grid-list-showcase.component';
import { StepperShowcaseComponent } from './stepper-showcase.component';
import { SortHeaderShowcaseComponent } from './sort-header-showcase.component';
import { RipplesShowcaseComponent } from './ripples-showcase.component';

interface ComponentSection {
  id: string;
  title: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-components-showcase',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TabsShowcaseComponent,
    ButtonShowcaseComponent,
    CardShowcaseComponent,
    InputShowcaseComponent,
    CheckboxShowcaseComponent,
    RadioShowcaseComponent,
    SlideToggleShowcaseComponent,
    ButtonToggleShowcaseComponent,
    SelectShowcaseComponent,
    AutocompleteShowcaseComponent,
    DatepickerShowcaseComponent,
    TimepickerShowcaseComponent,
    SliderShowcaseComponent,
    ChipsShowcaseComponent,
    BadgeShowcaseComponent,
    IconShowcaseComponent,
    ProgressBarShowcaseComponent,
    SpinnerShowcaseComponent,
    ToolbarShowcaseComponent,
    ListShowcaseComponent,
    MenuShowcaseComponent,
    SidenavShowcaseComponent,
    TableShowcaseComponent,
    TreeShowcaseComponent,
    PaginatorShowcaseComponent,
    ExpansionPanelShowcaseComponent,
    DialogShowcaseComponent,
    TooltipShowcaseComponent,
    SnackbarShowcaseComponent,
    BottomSheetShowcaseComponent,
    DividerShowcaseComponent,
    GridListShowcaseComponent,
    StepperShowcaseComponent,
    SortHeaderShowcaseComponent,
    RipplesShowcaseComponent
  ],
  template: `
    <div class="flex min-h-[calc(100vh-64px)]">
      <aside class="w-[280px] bg-gray-100 border-r border-gray-200 flex flex-col sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
        <div class="p-6 border-b border-gray-200">
          <h2 class="font-semibold text-gray-900">Components</h2>
          <p class="text-xs text-gray-500 mt-1">UI Library v1.0.0</p>
        </div>

        <nav class="flex-1 p-4 flex flex-col gap-1">
          @for (section of sections; track section.id) {
            <button
              class="flex items-center gap-3 px-3 py-2.5 rounded-lg border-none bg-transparent cursor-pointer text-left transition-all duration-200 text-gray-500 text-sm font-medium"
              [class.bg-blue-500]="activeSection() === section.id"
              [class.text-white]="activeSection() === section.id"
              [class.hover:bg-gray-200]="activeSection() !== section.id"
              (click)="setActiveSection(section.id)">
              <i class="material-icons text-center text-sm">{{ section.icon }}</i>
              <span>{{ section.title }}</span>
            </button>
          }
        </nav>
      </aside>

      <main class="flex-1 p-12 max-w-[900px]">
        @switch (activeSection()) {
          @case ('button') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Button</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Interactive button component with multiple variants, sizes, and states.</p>

              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; ButtonComponent &#125; from '@apsara/ui';</code>
              </div>

              <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Examples</h2>
              <app-button-showcase />
            </section>
          }

          @case ('card') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Card</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Container component for grouping related content.</p>

              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; CardComponent &#125; from '@apsara/ui';</code>
              </div>

              <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Examples</h2>
              <app-card-showcase />
            </section>
          }

          @case ('input') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Input</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Form input component with validation and styling.</p>

              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; InputComponent, FieldComponent, FieldLabelComponent &#125; from '@apsara/ui';</code>
              </div>

              <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Examples</h2>
              <app-input-showcase />
            </section>
          }

          @case ('tabs') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Tabs</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Navigation tabs component for organizing content into sections.</p>

              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; TabsComponent, TabsListComponent, TabsItemComponent, TabsPanelComponent &#125; from '@apsara/ui';</code>
              </div>

              <h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Examples</h2>
              <app-tabs-showcase />
            </section>
          }

          @case ('checkbox') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Checkbox</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Checkbox input component for binary choices.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; CheckboxComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-checkbox-showcase />
            </section>
          }

          @case ('radio') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Radio</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Radio button group for single selection.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; RadioComponent, RadioGroupComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-radio-showcase />
            </section>
          }

          @case ('slide-toggle') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Slide Toggle</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Toggle switch component for boolean values.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; SlideToggleComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-slide-toggle-showcase />
            </section>
          }

          @case ('button-toggle') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Button Toggle</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Group of toggleable buttons.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; ButtonToggleComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-button-toggle-showcase />
            </section>
          }

          @case ('select') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Select</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Dropdown selection component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; SelectComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-select-showcase />
            </section>
          }

          @case ('autocomplete') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Autocomplete</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Input with suggestions dropdown.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; AutocompleteComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-autocomplete-showcase />
            </section>
          }

          @case ('datepicker') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Datepicker</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Date selection component with calendar.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; DatepickerComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-datepicker-showcase />
            </section>
          }

          @case ('timepicker') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Timepicker</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Time selection component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; TimepickerComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-timepicker-showcase />
            </section>
          }

          @case ('slider') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Slider</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Range slider component for numeric values.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; SliderComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-slider-showcase />
            </section>
          }

          @case ('chips') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Chips</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Chip/styled tag components for selections.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; ChipComponent, ChipSetComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-chips-showcase />
            </section>
          }

          @case ('badge') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Badge</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Status badge and count indicator.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; BadgeComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-badge-showcase />
            </section>
          }

          @case ('icon') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Icon</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Icon component with material icons.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; IconComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-icon-showcase />
            </section>
          }

          @case ('progress-bar') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Progress Bar</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Linear progress indicator.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; ProgressBarComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-progress-bar-showcase />
            </section>
          }

          @case ('spinner') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Spinner</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Loading spinner component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; SpinnerComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-spinner-showcase />
            </section>
          }

          @case ('toolbar') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Toolbar</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Application toolbar component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; ToolbarComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-toolbar-showcase />
            </section>
          }

          @case ('list') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">List</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">List and list item components.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; ListComponent, ListItemComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-list-showcase />
            </section>
          }

          @case ('menu') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Menu</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Dropdown menu component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; MenuComponent, MenuItemComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-menu-showcase />
            </section>
          }

          @case ('sidenav') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Sidenav</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Side navigation component with drawer.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; SidenavComponent, SidenavContainerComponent, SidenavContentComponent, SidenavDrawerComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-sidenav-showcase />
            </section>
          }

          @case ('table') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Table</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Data table component with content projection.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; TableComponent, TableHeaderDirective, TableCellDirective &#125; from '@apsara/ui';</code>
              </div>
              <app-table-showcase />
            </section>
          }

          @case ('tree') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Tree</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Hierarchical tree view component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; TreeComponent, type TreeNode &#125; from '@apsara/ui';</code>
              </div>
              <app-tree-showcase />
            </section>
          }

          @case ('paginator') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Paginator</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Pagination controls component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; PaginatorComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-paginator-showcase />
            </section>
          }

          @case ('expansion-panel') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Expansion Panel</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Collapsible content panel.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; ExpansionPanelComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-expansion-panel-showcase />
            </section>
          }

          @case ('dialog') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Dialog</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Modal dialog component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; DialogComponent, type DialogResult &#125; from '@apsara/ui';</code>
              </div>
              <app-dialog-showcase />
            </section>
          }

          @case ('tooltip') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Tooltip</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Tooltip hints on hover.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; TooltipComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-tooltip-showcase />
            </section>
          }

          @case ('snackbar') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Snackbar</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Toast notification component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; SnackbarComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-snackbar-showcase />
            </section>
          }

          @case ('bottom-sheet') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Bottom Sheet</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Slide-up panel from bottom.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; BottomSheetComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-bottom-sheet-showcase />
            </section>
          }

          @case ('divider') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Divider</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Visual divider line.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; DividerComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-divider-showcase />
            </section>
          }

          @case ('grid-list') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Grid List</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Grid layout component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; GridListComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-grid-list-showcase />
            </section>
          }

          @case ('stepper') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Stepper</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Multi-step progress indicator.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; StepperComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-stepper-showcase />
            </section>
          }

          @case ('sort-header') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Sort Header</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Sortable table column header.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; SortHeaderComponent, type SortEvent &#125; from '@apsara/ui';</code>
              </div>
              <app-sort-header-showcase />
            </section>
          }

          @case ('ripples') {
            <section class="mb-16 scroll-m-20">
              <h1 class="text-[32px] font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200">Ripples</h1>
              <p class="text-lg text-gray-600 my-4 leading-relaxed">Ripple effect wrapper component.</p>
              <div class="bg-blue-500/10 border-l-4 border-blue-500 p-5 rounded-r-lg my-6 text-blue-600">
                <strong>Import:</strong> <code class="bg-blue-500/20 px-2 py-0.5 rounded text-sm">import &#123; RippleComponent &#125; from '@apsara/ui';</code>
              </div>
              <app-ripples-showcase />
            </section>
          }
        }
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ComponentsShowcaseComponent {
  activeSection = signal<string>('button');

  sections: ComponentSection[] = [
    { id: 'button', title: 'Button', icon: 'smart_button', category: 'Form' },
    { id: 'card', title: 'Card', icon: 'crop_square', category: 'Data Display' },
    { id: 'input', title: 'Input', icon: 'text_fields', category: 'Form' },
    { id: 'tabs', title: 'Tabs', icon: 'tab', category: 'Navigation' },
    { id: 'checkbox', title: 'Checkbox', icon: 'check_box', category: 'Form' },
    { id: 'radio', title: 'Radio', icon: 'radio_button_checked', category: 'Form' },
    { id: 'slide-toggle', title: 'Slide Toggle', icon: 'toggle_on', category: 'Form' },
    { id: 'button-toggle', title: 'Button Toggle', icon: 'toggle_button', category: 'Form' },
    { id: 'select', title: 'Select', icon: 'list', category: 'Form' },
    { id: 'autocomplete', title: 'Autocomplete', icon: 'autocomplete', category: 'Form' },
    { id: 'datepicker', title: 'Datepicker', icon: 'calendar_today', category: 'Form' },
    { id: 'timepicker', title: 'Timepicker', icon: 'schedule', category: 'Form' },
    { id: 'slider', title: 'Slider', icon: 'linear_scale', category: 'Form' },
    { id: 'chips', title: 'Chips', icon: 'label', category: 'Form' },
    { id: 'badge', title: 'Badge', icon: 'local_offer', category: 'Data Display' },
    { id: 'icon', title: 'Icon', icon: 'insert_emoticon', category: 'Data Display' },
    { id: 'progress-bar', title: 'Progress Bar', icon: 'progress_bar', category: 'Data Display' },
    { id: 'spinner', title: 'Spinner', icon: 'refresh', category: 'Data Display' },
    { id: 'toolbar', title: 'Toolbar', icon: 'toolbar', category: 'Navigation' },
    { id: 'list', title: 'List', icon: 'list', category: 'Navigation' },
    { id: 'menu', title: 'Menu', icon: 'menu', category: 'Navigation' },
    { id: 'sidenav', title: 'Sidenav', icon: 'vertical_split', category: 'Navigation' },
    { id: 'table', title: 'Table', icon: 'table_chart', category: 'Data Display' },
    { id: 'tree', title: 'Tree', icon: 'account_tree', category: 'Data Display' },
    { id: 'paginator', title: 'Paginator', icon: 'last_page', category: 'Navigation' },
    { id: 'expansion-panel', title: 'Expansion Panel', icon: 'expand_more', category: 'Navigation' },
    { id: 'dialog', title: 'Dialog', icon: 'picture_in_picture_alt', category: 'Overlay' },
    { id: 'tooltip', title: 'Tooltip', icon: 'info', category: 'Overlay' },
    { id: 'snackbar', title: 'Snackbar', icon: 'notifications', category: 'Overlay' },
    { id: 'bottom-sheet', title: 'Bottom Sheet', icon: 'vertical_align_bottom', category: 'Overlay' },
    { id: 'divider', title: 'Divider', icon: 'horizontal_rule', category: 'Layout' },
    { id: 'grid-list', title: 'Grid List', icon: 'grid_on', category: 'Layout' },
    { id: 'stepper', title: 'Stepper', icon: 'linear_scale', category: 'Navigation' },
    { id: 'sort-header', title: 'Sort Header', icon: 'sort', category: 'Data Display' },
    { id: 'ripples', title: 'Ripples', icon: 'blur_on', category: 'Utility' }
  ];

  setActiveSection(sectionId: string) {
    this.activeSection.set(sectionId);
  }
}
