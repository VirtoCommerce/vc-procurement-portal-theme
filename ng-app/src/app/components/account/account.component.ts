import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { IUser } from "src/app/models/dto/iuser";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent implements OnInit {
  user: IUser;
  userName: string;
  email: string;
  phone: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((data: any) => {
      this.user = data as IUser;
      this.userName = this.user.userName;
      this.email = this.user.email;
      this.phone = this.user.phoneNumbers[0];
      console.log(this.user);
    });
  }

  updateUser() {
    this.userService
      .updateUser(this.user.firstName, this.user.lastName, this.email)
      .subscribe();
  }
}
