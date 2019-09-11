import { Component, OnInit } from '@angular/core';
import { OrderWorkflowService } from '@services/order-workflow.service';

@Component({
  selector: 'app-approval-workflow',
  templateUrl: './approval-workflow.component.html',
  styleUrls: ['./approval-workflow.component.scss']
})
export class ApprovalWorkflowComponent implements OnInit {
  public imageUrl;

  constructor(private orderWorkflowService: OrderWorkflowService) { }

  ngOnInit() {
    this.imageUrl = this.orderWorkflowService.getWorkflowImageUrl();
  }

}
