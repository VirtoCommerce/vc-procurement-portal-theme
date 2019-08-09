export class UserViewAddUserModel {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  selectRole: string;
  userName: string;
}

export class UserViewEditUserModel {
  email: string;
  firstName: string;
  lastName: string;
  passwordCheckbox: boolean;
  passwordGroup: { oldPassword: string; password: string; confirmPassword: string };
  selectRole: string;
  userName: string;
}

