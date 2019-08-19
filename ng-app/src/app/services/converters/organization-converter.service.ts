import { Injectable } from '@angular/core';
import { IOrganization } from 'src/app/models/dto/iorganization';
import { OrganizationDetails, UpdateOrganization } from 'src/app/models/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationConverterService {

  constructor() { }

  toOrganizationDetails(orgDto: IOrganization): OrganizationDetails {
    const result = new OrganizationDetails();
    result.name = orgDto.name;
    result.id = orgDto.id;
    result.billingAddress = orgDto.addresses.find(x => x.type === 1);
    result.shippingAddress = orgDto.addresses.find(x => x.type === 2);
    result.phoneNumber = orgDto.phones[0];
    result.email = orgDto.email;
    result.contactPerson = orgDto.dynamicProperties.find(x => x.name === 'contactPerson').values[0].value;
    result.taxNumber = orgDto.dynamicProperties.find(x => x.name === 'taxNumber').values[0].value;
    result.companyRegistrationNumber = orgDto.dynamicProperties.find(x => x.name === 'companyRegistrationNumber').values[0].value;
    result.returnInvalidOrdersToCreator = orgDto.dynamicProperties.find(x => x.name === 'returnInvalidOrdersToCreator').values[0].value.toLowerCase();
    return result;
  }

  toUpdateOrganization(orgView: OrganizationDetails, orgForUpdate: IOrganization): UpdateOrganization {
    const result = new UpdateOrganization();
    result.addresses = [];
    result.phones = [];
    result.emails = [];
    result.id = orgView.id;
    result.name = orgView.name;
    result.addresses.push(orgView.billingAddress, orgView.shippingAddress);
    result.dynamicProperties = orgForUpdate.dynamicProperties;
    result.dynamicProperties.find(x => x.name === 'contactPerson').values[0].value = orgView.contactPerson;
    result.dynamicProperties.find(x => x.name === 'taxNumber').values[0].value = orgView.taxNumber;
    result.dynamicProperties.find(x => x.name === 'companyRegistrationNumber').values[0].value = orgView.companyRegistrationNumber;
    result.dynamicProperties.find(x => x.name === 'returnInvalidOrdersToCreator').values[0].value = orgView.returnInvalidOrdersToCreator;
    result.emails.push(orgView.email);
    result.phones.push(orgView.phoneNumber);
    return result;
  }

}
