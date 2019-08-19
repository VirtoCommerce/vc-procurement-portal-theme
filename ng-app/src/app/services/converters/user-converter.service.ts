import { Injectable } from '@angular/core';
import { User, AddNewUser, EditUser, EditUserPassword, EditUserPhone } from '../../models/user';
import { IUser } from 'src/app/models/dto/iuser';
import { IOrganization } from 'src/app/models/dto/iorganization';
import { UserViewAddUserModel, UserViewEditUserModel } from 'src/app/models/form';

@Injectable({
  providedIn: 'root'
})
export class UserConverterService {

  constructor() { }

  toAddUser(userView: UserViewAddUserModel , organization: IOrganization ): AddNewUser {
    const result = new AddNewUser();
    result.email = userView.email;
    result.firstName = userView.firstName;
    result.lastName = userView.lastName;
    result.fullName = `${userView.firstName} ${userView.lastName}`;
    result.organizationId = organization.id;
    result.password = userView.password;
    result.role = userView.selectRole;
    result.userName = userView.userName;
    return result;
  }

  toEditUser(userView: UserViewEditUserModel, user: IUser): EditUser {
    const result = new EditUser();
    result.roles = [];
    result.firstName = userView.firstName;
    result.lastName = userView.lastName;
    result.fullName = `${userView.firstName} ${userView.lastName}`;
    result.roles.push(userView.selectRole);
    result.email = userView.email;
    result.id = user.id;
    return result;
  }

  toEditCurrentAccount(userView: IUser): EditUser {
    const result = new EditUser();
    result.roles = [];
    result.firstName = userView.firstName;
    result.lastName = userView.lastName;
    result.fullName = `${userView.firstName} ${userView.lastName}`;
    result.email = userView.email;
    result.roles = userView.roles.map(x => x.id) ;
    result.id = userView.id;
    return result;
  }

  toEditCurrentAccountPhoneNumber(userView: IUser): EditUserPhone {
    const result = new EditUserPhone();
    result.phoneNumber = userView.phoneNumber;
    return result;
  }
}


