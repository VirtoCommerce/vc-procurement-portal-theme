import { Component, OnInit, Input } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { OrganizationDetails } from 'src/app/models/organization';
import { OrganizationConverterService } from 'src/app/services/converters/organization-converter.service';
import { IOrganization } from 'src/app/models/dto/iorganization';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  @Input() organization: IOrganization;
  @Input() organizationDetails: OrganizationDetails;

  constructor(
    private organizationService: OrganizationService,
    private orgConverter: OrganizationConverterService
  ) {}

  ngOnInit() {
  }

  updateCompany() {
    const updatedOrg = this.orgConverter.toUpdateOrganization(this.organizationDetails);
    this.organizationService
      .updateOrganization(updatedOrg)
      .subscribe();
  }
}
