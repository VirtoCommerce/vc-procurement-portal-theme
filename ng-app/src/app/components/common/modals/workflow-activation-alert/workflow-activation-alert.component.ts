import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-workflow-activation-alert',
  templateUrl: './workflow-activation-alert.component.html',
  styleUrls: ['./workflow-activation-alert.component.scss']
})
export class WorkflowActivationAlertComponent implements OnInit {
  public action = new Subject<string>();
  public title: string;

  constructor() { }

  ngOnInit() {
  }

  public close() {
    this.action.next('dismiss');
  }

  public cancel() {
    this.action.next('cancel');
  }

  public navigateToOrders() {
    this.action.next('redirect');
  }
}
