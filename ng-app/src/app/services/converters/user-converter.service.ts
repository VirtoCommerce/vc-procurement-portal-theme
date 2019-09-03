import { Injectable } from '@angular/core';
import { IUser, ExtendedUser, AddNewUserDto, EditUserDto } from 'src/app/models/dto/iuser';
import { EditUser, EditUserPhone } from 'src/app/models/user';
import { WorkflowUserRoleStorageService } from '../workflow-user-role-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserConverterService {

  constructor(private workflowUserRolesStorage: WorkflowUserRoleStorageService) { }

  toAddUserDto(viewModel: EditUser ): AddNewUserDto {
    const result = new AddNewUserDto();
    result.email = viewModel.email;
    result.firstName = viewModel.firstName;
    result.lastName = viewModel.lastName;
    result.fullName = `${viewModel.firstName} ${viewModel.lastName}`;
    result.organizationId = viewModel.id;
    result.password = viewModel.password;
    result.role = viewModel.selectRole;
    result.userName = viewModel.userName;
    return result;
  }

  toEditUserDto(viewModel: EditUser): EditUserDto {
    const result = new EditUserDto();
    result.firstName = viewModel.firstName;
    result.lastName = viewModel.lastName;
    result.fullName = `${viewModel.firstName} ${viewModel.lastName}`;
    result.roles = [viewModel.selectRole];
    result.email = viewModel.email;
    result.id = viewModel.id;
    return result;
  }

  toEditCurrentAccount(userView: IUser): EditUserDto {
    const result = new EditUserDto();
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

  toEditUser(user: ExtendedUser): EditUser {
    const workRoles = this.workflowUserRolesStorage.getUserRoles(user.id);
    const result = new EditUser();
    result.id = user.id;
    result.userName = user.userName;
    result.firstName = user.firstName;
    result.lastName = user.lastName;
    result.organizationId = user.organizationId;
    result.selectRole = user.role.id;
    result.selectedWorkflowRole = workRoles.length > 0 ? workRoles[0] : null;
    return result;
  }

  toExtendedUser(user: IUser ): ExtendedUser {
    return  {...user, workflowRoles: []};
  }
}


