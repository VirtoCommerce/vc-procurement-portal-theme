
import { IDynamicProperty } from '@models/dto/common/dynamic-property';
import { IAddress } from '@models/dto/common/address';

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
  name: string;
  email: string;
}



