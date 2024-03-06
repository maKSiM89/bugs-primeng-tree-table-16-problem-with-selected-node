import { Component } from '@angular/core';
import { TreeTableNode } from 'primeng/api';
import { FILES } from './const/files.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedNodes: TreeTableNode | TreeTableNode[] | null = [];
  readonly files = FILES;
}
