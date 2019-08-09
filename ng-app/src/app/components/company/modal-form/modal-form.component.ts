import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/dto/iuser';
import { User,AddNewUser } from 'src/app/models/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
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

}
