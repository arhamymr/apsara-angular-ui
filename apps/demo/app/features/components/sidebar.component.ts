import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarItem {
  label: string;
  route: string;
}

interface SidebarCategory {
  name: string;
  items: SidebarItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="hidden lg:block sticky top-16 h-[calc(100vh-64px)] overflow-y-auto pr-8 pb-10 max-lg:pb-20 scrollbar-none">
      <div class="pl-1 min-w-fit">
        <nav class="flex flex-col gap-4.5 py-9">
          @for (category of categories(); track category.name) {
            <section class="flex flex-wrap gap-0.5">
              <span class="inline-flex items-center text-sm font-medium text-[var(--dimmed)] [&>svg]:size-3.5">
                {{ category.name }}
              </span>
              <ul class="flex flex-col gap-0.5 w-full list-none m-0 p-0">
                @for (item of category.items; track item.route) {
                  <li class="group/sidebar-item relative flex m-0">
                    <a [routerLink]="item.route"
                       routerLinkActive="bg-[var(--accent)]"
                       [routerLinkActiveOptions]="{ exact: item.route === '/' }"
                       class="flex items-center gap-2.5 w-full relative z-10 text-[var(--foreground)] cursor-pointer text-left transition-colors duration-75 hover:bg-[var(--accent)] [&>svg]:size-4 [&>svg]:text-[var(--dimmed)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] rounded-[var(--radius)] p-2 text-sm decoration-0">
                      {{ item.label }}
                    </a>
                  </li>
                }
              </ul>
            </section>
          }
        </nav>
      </div>
    </aside>
  `,
  styles: [`
    :host {
      display: block;
    }

    .scrollbar-none {
      scrollbar-width: none;
    }

    .scrollbar-none::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class SidebarComponent {
  categories = input.required<SidebarCategory[]>();
}
