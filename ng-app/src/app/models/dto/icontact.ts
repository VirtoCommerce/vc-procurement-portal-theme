import { IAddress } from '@models/dto/common/address';
import { IOrganization } from '@models/dto/iorganization';
import { ISecurityAccount } from '@models/dto/common/security-account';
import { IDynamicProperty } from '@models/dto/common/dynamic-property';

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
