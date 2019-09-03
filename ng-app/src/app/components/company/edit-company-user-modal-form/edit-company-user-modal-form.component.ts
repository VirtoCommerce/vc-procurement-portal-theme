import { Component, OnInit, Input } from '@angular/core';
import { User} from 'src/app/models/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { OrderWorkflowService } from 'src/app/services/order-workflow.service';
import { ExtendedUser } from 'src/app/models/dto/iuser';

@Component({
  selector: 'app-edit-company-user-modal-form',
  templateUrl: './edit-company-user-modal-form.component.html',
  styleUrls: ['./edit-company-user-modal-form.component.scss']
})
export class EditCompanyUserModalFormComponent implements OnInit {
  @Input() user: ExtendedUser;
  @Input() editUserMode: boolean;
  changePassword: boolean;
  workflowRoles: string[];
  selectedWorkflowRole: string = null;

  constructor(public activeModal: NgbActiveModal, private workflowService: OrderWorkflowService) {
    this.workflowRoles = this.workflowService.getRoles();
  }

  ngOnInit() {
    if (!this.user) {
      this.user = {} as ExtendedUser;
    }
  }

  passBack(userView: NgForm) {
    if (userView.form.valid) {
      this.activeModal.close(userView.value);
    }
  }

  checkValid(form: NgForm) {
    form.form.controls.confirmPassword.updateValueAndValidity();
  }

  closeModal() {
    this.activeModal.dismiss();
  }

}
