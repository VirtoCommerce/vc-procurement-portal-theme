import { Component, OnInit } from "@angular/core";
import { OrganizationService } from "src/app/services/organization.service";
import { IOrganization } from "src/app/models/iorganization";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"]
})
export class CompanyComponent implements OnInit {
  organization: IOrganization;
  companyName: string;


  constructor(private organizationService: OrganizationService) {}

  ngOnInit() {
    this.organizationService.getUserOrganization().subscribe((data: any) => {
      this.organization = data as IOrganization;
      this.companyName = this.organization.name;
    })
    }

}
