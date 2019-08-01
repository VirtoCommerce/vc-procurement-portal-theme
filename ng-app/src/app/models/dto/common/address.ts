export interface IAddress {
  type: AddressType;
  key: string;
  name: string;
  countryCode: string;
  countryName: string;
  city: string;
  postalCode: string;
  line1: string;
  line2: string;
  regionId: string;
  regionName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  id: string;
}

export enum AddressType {
  Billing = 1,
  Shipping = 2,
  BillingAndShipping = Billing | Shipping
}
