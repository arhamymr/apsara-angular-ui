import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent, TreeNode } from '@apsara/ui';

@Component({
  selector: 'app-tree-showcase',
  standalone: true,
  imports: [CommonModule, TreeComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">File Tree</h3>
        <app-tree [nodes]="nodes()" (nodeClick)="onNodeClick($event)" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Selected:</strong> {{ selectedNode() || 'None' }}
        </p>
      </div>
    </div>
  `
})
export class TreeShowcaseComponent {
  nodes = signal<TreeNode[]>([
    {
      name: 'src',
      icon: 'folder',
      expanded: true,
      children: [
        { name: 'app', icon: 'folder', children: [
          { name: 'app.component.ts', icon: 'description' },
          { name: 'app.module.ts', icon: 'description' }
        ]},
        { name: 'assets', icon: 'folder', children: [
          { name: 'logo.png', icon: 'image' }
        ]}
      ]
    },
    { name: 'package.json', icon: 'description' },
    { name: 'tsconfig.json', icon: 'description' }
  ]);
  selectedNode = signal<string>('');

  onNodeClick(node: TreeNode): void {
    this.selectedNode.set(node.name);
  }
}
