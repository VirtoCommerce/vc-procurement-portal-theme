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

export class EditUser {
  id: string;
  organizationId: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  selectRole: string;
  selectedWorkflowRole: string;
  userName: string;
}

export class EditUserPassword {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export class EditUserPhone {
  phoneNumber: string;
}

