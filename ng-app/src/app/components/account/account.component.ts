import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';
import { IUser } from 'src/app/models/dto/iuser';
import { UserConverterService } from 'src/app/services/converters/user-converter.service';
import { concatMap } from 'rxjs/operators';
import { AlertsService } from 'src/app/modules/alerts/alerts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: IUser;

  constructor(
    private userService: UserService,
    private userConverter: UserConverterService,
    private aletsService: AlertsService
  ) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((data: any) => {
      this.user = data as IUser;
      console.log(this.user);
    });
  }

  updateUser() {
    const updatedUser = this.userConverter.toEditCurrentAccount(this.user);
    const newPhoneNumber = this.userConverter.toEditCurrentAccountPhoneNumber(this.user);
    this.userService.updateUser(updatedUser)
    .pipe(concatMap(() => this.userService.updatePhoneNumber(newPhoneNumber)))
    .subscribe(() => this.aletsService.success('Account data is updated successfuly!'));
  }
}
