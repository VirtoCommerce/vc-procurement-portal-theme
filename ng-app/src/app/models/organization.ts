import { IAddress } from './dto/common/address';

export class OrganizationDetails {
  id: string;
  name: string;
  billingAddress: IAddress;
  shippingAddress: IAddress;
}

export class UpdateOrganization {
  id: string;
  addresses: IAddress[];
  name: string;
}
