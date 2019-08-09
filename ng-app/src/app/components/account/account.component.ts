import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/dto/iuser';
import { EditUser } from 'src/app/models/user';
import { UserConverterService } from 'src/app/services/converters/user-converter.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: IUser;

  constructor(
    private userService: UserService,
    private userConverter: UserConverterService
  ) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((data: any) => {
      this.user = data as IUser;
    });
  }

  updateUser() {
    const updatedUser = this.userConverter.toEditCurrentAccount(this.user);
    this.userService.updateUser(updatedUser).subscribe();
  }
}
