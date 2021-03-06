import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '@api/organization.service';
import { IOrganization } from '@models/dto/iorganization';
import { OrganizationConverterService } from '@services/converters/organization-converter.service';
import { OrganizationDetails } from '@models/organization';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  organization: IOrganization;
  organizationDetails: OrganizationDetails;

  constructor(
    private organizationService: OrganizationService,
    private orgConverter: OrganizationConverterService
  ) {}

  ngOnInit() {
    this.organizationService.getUserOrganization().subscribe((data: any) => {
      this.organization = data as IOrganization;
      console.log('Import of organization', this.organization);
      this.organizationDetails = this.orgConverter.toOrganizationDetails(this.organization);
    });
  }

}
