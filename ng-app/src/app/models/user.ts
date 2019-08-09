export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token?: string;
    workflowRole: string;
    email: string;
    organizationId: string;
}

export class AddNewUser {
  userName: string;
  password: string;
  firstName: string;
  fullName: string;
  lastName: string;
  roles: Array<string>;
  email: string;
  organizationId: string;
}

export class EditUser {
  firstName: string;
  lastName: string;
  fullName: string;
  roles: Array<string>;
  email: string;
  id: string;
}

export class EditUserPassword {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

