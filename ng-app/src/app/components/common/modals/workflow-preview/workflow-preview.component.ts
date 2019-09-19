import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-workflow-preview',
  templateUrl: './workflow-preview.component.html',
  styleUrls: ['./workflow-preview.component.scss']
})
export class WorkflowPreviewComponent implements OnInit {
  public action = new Subject<string>();
  public title: string;
  public workflowImageUrl: string;

  constructor() { }

  ngOnInit() {
  }

  public close() {
    this.action.next('dismiss');
  }
}
