import { Component, OnInit, Input } from '@angular/core';
import { OrganizationService } from '@api/organization.service';
import { OrganizationDetails } from '@models/organization';
import { OrganizationConverterService } from '@services/converters/organization-converter.service';
import { IOrganization } from '@models/dto/iorganization';
import { AlertsService } from '@modules/alerts/alerts.service';

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
    private orgConverter: OrganizationConverterService,
    private aletsService: AlertsService
  ) {}

  ngOnInit() {
  }

  updateCompany() {
    const updatedOrg = this.orgConverter.toUpdateOrganization(this.organizationDetails, this.organization);
    this.organizationService
      .updateOrganization(updatedOrg)
      .subscribe(() => this.aletsService.success('Organization data is updated successfuly!'));
  }

  setOrdersProperty(value: boolean) {
    this.organizationDetails.returnInvalidOrdersToCreator = value;
    console.log(this.organizationDetails.returnInvalidOrdersToCreator);
  }
}
