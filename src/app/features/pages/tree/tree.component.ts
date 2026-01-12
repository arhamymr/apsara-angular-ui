import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-page-tree',
  imports: [RouterLink, MatTreeModule, MatIconModule, MatButtonModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Tree</span>
      </nav>
      
      <header class="page-header">
        <h1>Tree</h1>
        <p>Tree view for hierarchical data.</p>
      </header>
      
      <section class="demo-section">
        <h2>Nested Tree</h2>
        <p>Tree with nested child nodes.</p>
        <div class="demo-row">
          <mat-tree [dataSource]="dataSource" [treeControl]="treeControl" class="example-tree">
            <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle>
              {{node.name}}
            </mat-tree-node>
            <mat-nested-tree-node *matTreeNodeDef="let node; when: hasChild">
              <div class="mat-tree-node">
                <button mat-icon-button matTreeNodeToggle [attr.aria-label]="'Toggle ' + node.name">
                  <mat-icon class="mat-icon-rtl-mirror">
                    {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
                  </mat-icon>
                </button>
                {{node.name}}
              </div>
              <div [class.example-tree-invisible]="!treeControl.isExpanded(node)" role="group">
                <ng-container matTreeNodeOutlet></ng-container>
              </div>
            </mat-nested-tree-node>
          </mat-tree>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Flat Tree</h2>
        <p>Tree with flat data structure.</p>
        <div class="demo-row">
          <mat-tree [dataSource]="flatDataSource" [treeControl]="flatTreeControl" class="flat-tree">
            <mat-tree-node *matTreeNodeDef="let node">
              {{node.name}}
            </mat-tree-node>
            <mat-tree-node *matTreeNodeDef="let node; when: hasFlatChild">
              <button mat-icon-button matTreeNodeToggle>
                <mat-icon>
                  {{flatTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
                </mat-icon>
              </button>
              {{node.name}}
            </mat-tree-node>
          </mat-tree>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container { max-width: 1000px; margin: 0 auto; padding: 32px; }
    .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; font-size: 14px; }
    .breadcrumb a { color: #1976d2; text-decoration: none; }
    .breadcrumb mat-icon { font-size: 18px; width: 18px; height: 18px; color: #9e9e9e; }
    .page-header { margin-bottom: 48px; }
    .page-header h1 { font-size: 36px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .page-header p { font-size: 16px; color: #616161; margin: 0; line-height: 1.6; }
    .demo-section { margin-bottom: 48px; padding: 24px; background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
    .demo-section h2 { font-size: 20px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .demo-section p { font-size: 14px; color: #616161; margin: 0 0 20px; }
    .demo-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start; }
    .example-tree-invisible { display: none; }
    .example-tree ul, .example-tree li { margin-top: 0; margin-bottom: 0; list-style-type: none; }
    .mat-tree-node, .mat-nested-tree-node { min-height: 40px; display: flex; align-items: center; }
    .mat-tree-node { padding-left: 16px; }
    .flat-tree { width: 250px; }
  `]
})
export class PageTreeComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  
  flatTreeControl = new NestedTreeControl<FoodNode>(node => node.children);
  flatDataSource = new MatTreeNestedDataSource<FoodNode>();
  
  constructor() {
    this.dataSource.data = [
      {
        name: 'Fruit',
        children: [
          { name: 'Apple' },
          { name: 'Banana' },
          { name: 'Cherry' },
        ]
      },
      {
        name: 'Vegetables',
        children: [
          {
            name: 'Green',
            children: [
              { name: 'Broccoli' },
              { name: 'Spinach' },
            ]
          },
          {
            name: 'Orange',
            children: [
              { name: 'Carrots' },
              { name: 'Pumpkin' },
            ]
          },
        ]
      },
    ];
    
    this.flatDataSource.data = [
      { name: 'Documents' },
      { name: 'Downloads' },
      { name: 'Pictures' },
    ];
  }
  
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  hasFlatChild = (_: number, node: FoodNode) => false;
}
