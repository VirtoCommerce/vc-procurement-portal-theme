import { Component, OnInit, Input } from '@angular/core';
import { OrganizationService } from '@api/organization.service';
import { OrganizationDetails } from 'src/app/models/organization';
import { OrganizationConverterService } from 'src/app/services/converters/organization-converter.service';
import { IOrganization } from 'src/app/models/dto/iorganization';
import { AlertsService } from 'src/app/modules/alerts/alerts.service';

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
