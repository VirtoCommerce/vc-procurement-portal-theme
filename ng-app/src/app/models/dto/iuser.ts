import { IDynamicProperty } from './common/dynamic-property';
import { IAddress } from './common/address';
import { IContact } from './icontact';
import { IOrganization } from './iorganization';
import { ISecurityAccount } from './common/security-account';
import { PagedSearchCriteria } from './common/paged-search-criteria';


export class AddNewUserDto {
  userName: string;
  password: string;
  firstName: string;
  fullName: string;
  lastName: string;
  role: string;
  email: string;
  organizationId: string;
}

export class EditUserDto {
  firstName: string;
  lastName: string;
  fullName: string;
  roles: Array<string>;
  email: string;
  id: string;
}


export class OrganisationUsersSearchCriteria extends PagedSearchCriteria {
  OrganizationId: string;
  Sort: string;
  SearchPhrase: string;
}


export interface IUser {
  storeId: string;
  userName: string;
  phoneNumberConfirmed: boolean;
  email: string;
  emailConfirmed: boolean;
  twoFactorEnabled: boolean;
  isLockedOut: boolean;
  accessFailedCount: number;
  lockoutEnabled: boolean;
  isRegisteredUser: boolean;
  isAdministrator: boolean;
  userType: string;
  userState: number;
  externalLogins: any[];
  contactId: string;
  contact: IContact;
  permissions: string[];
  role: IRole;
  roles: IRole[];
  dynamicProperties: IDynamicProperty[];
  firstName: string;
  lastName: string;
  name: string;
  IAddress: IAddress;
  addresses: IAddress[];
  id: string;
  fullName: string;
  organizationId: string;
  organization: IOrganization;
  organizationsIds: string[];
  acceptsMarketing: boolean;
  securityAccounts: ISecurityAccount[];
  phoneNumbers: any[];
  emails: string[];
  memberType: string;
  phones: any[];
  groups: any[];
  userGroups: any[];
  phoneNumber: string;
}

export interface ExtendedUser extends IUser {
  workflowRoles: string[];
}

export interface IRole {
        id: string;
        name: string;
        permissions: string[];
    }
