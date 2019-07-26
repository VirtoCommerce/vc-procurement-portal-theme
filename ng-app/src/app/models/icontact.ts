import { IAddress } from './common/address';
import { IOrganization } from './iorganization';
import { ISecurityAccount } from './common/security-account';
import { IDynamicProperty } from './common/dynamic-property';

export interface IContact {
  fullName: string;
  firstName: string;
  lastName: string;
  IAddress: IAddress;
  organizationId: string;
  organization: IOrganization;
  organizationsIds: string[];
  acceptsMarketing: boolean;
  securityAccounts: ISecurityAccount[];
  phoneNumbers: any[];
  email: string;
  emails: string[];
  name: string;
  memberType: string;
  addresses: IAddress[];
  phones: any[];
  groups: any[];
  userGroups: any[];
  dynamicProperties: IDynamicProperty[];
  id: string;
}
