import { IAddress } from '@models/dto/common/address';
import { IDynamicProperty } from '@models/dto/common/dynamic-property';

export class OrganizationDetails {
  id: string;
  name: string;
  billingAddress: IAddress;
  shippingAddress: IAddress;
  phoneNumber: string;
  email: string;
  contactPerson: string;
  taxNumber: string;
  companyRegistrationNumber: string;
  returnInvalidOrdersToCreator: boolean;
}

export class UpdateOrganization {
  id: string;
  addresses: IAddress[];
  name: string;
  dynamicProperties: IDynamicProperty[];
  phones: string[];
  emails: string[];
}
