
import { IDynamicProperty } from './common/dynamic-property';
import { IAddress } from './common/address';

export interface IOrganization {
  phoneNumbers: any[];
  emails: any[];
  memberType: string;
  addresses: IAddress[];
  phones: any[];
  groups: any[];
  userGroups: any[];
  dynamicProperties: IDynamicProperty[];
  id: string;
}
