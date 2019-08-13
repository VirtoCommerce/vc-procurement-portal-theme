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
    return result;
  }

  toUpdateOrganization(orgView: OrganizationDetails): UpdateOrganization {
    const result = new UpdateOrganization();
    result.addresses = [];
    result.id = orgView.id;
    result.name = orgView.name;
    result.addresses.push(orgView.billingAddress, orgView.shippingAddress);
    return result;
  }

}
