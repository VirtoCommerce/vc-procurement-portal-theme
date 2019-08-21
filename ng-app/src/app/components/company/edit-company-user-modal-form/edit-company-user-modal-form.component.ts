import { Component, OnInit, Input } from '@angular/core';
import { User} from 'src/app/models/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-company-user-modal-form',
  templateUrl: './edit-company-user-modal-form.component.html',
  styleUrls: ['./edit-company-user-modal-form.component.scss']
})
export class EditCompanyUserModalFormComponent implements OnInit {
  @Input() user: User;
  @Input() editUserMode: boolean;
  changePassword: boolean;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    if (!this.user) {
      this.user = {} as User;
    }
  }

  passBack(userView){
    if (userView.form.valid) {
      this.activeModal.close(userView.value);
    }
  }

  checkValid(form: NgForm){
    form.form.controls.confirmPassword.updateValueAndValidity();
  }

  closeModal(){
    this.activeModal.dismiss();
  }

}
