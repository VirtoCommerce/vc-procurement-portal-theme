import { Component, OnInit } from "@angular/core";
import { OrganizationService } from "src/app/services/organization.service";
import { IOrganization } from "src/app/models/dto/iorganization";
import { IUser } from "src/app/models/dto/iuser";
import { UserService } from "src/app/services/user.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import settings_data from "src/assets/config/config.dev.json";
import { IAppConfig } from "src/app/models/iapp-config";
import { PaginationInfo } from "src/app/models/inner/pagination-info";
import { PageSizeChangedArgs } from "../page-size-selector/page-size-selector.component";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"]
})
export class CompanyComponent implements OnInit {
  users: IUser[];
  organization: IOrganization;
  companyName: string;
  billingAddress: {
    country: string;
    city: string;
    postalCode: string;
    address1: string;
    address2: string;
  };
  shippingAddress: {
    country: string;
    city: string;
    postalCode: string;
    address1: string;
    address2: string;
  };

  settings = settings_data as IAppConfig;
  paginationInfo = new PaginationInfo(this.settings.defaultPageSize);
  pageSizes = this.settings.pageSizes;

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.organizationService.getUserOrganization().subscribe((data: any) => {
      this.organization = data as IOrganization;
      this.companyName = this.organization.name;
      this.organization.addresses.forEach(address => {
        if (address.type == 1) {
          this.billingAddress = {
            country: address.countryName,
            city: address.city,
            postalCode: address.postalCode,
            address1: address.line1,
            address2: address.line2
          };
        }
        if (address.type == 2) {
          this.shippingAddress = {
            country: address.countryName,
            city: address.city,
            postalCode: address.postalCode,
            address1: address.line1,
            address2: address.line2
          };
        }
      });
    });

    this.fetchUsers();
  }

  pageSizeChanged(eventArgs: PageSizeChangedArgs) {
    this.paginationInfo.pageSize = eventArgs.newPageSize;
    this.fetchUsers();
  }

  pageChanged() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.organizationService
      .getOrganizationUsers(
        this.paginationInfo.page,
        this.paginationInfo.pageSize
      )
      .subscribe((data: any) => {
        this.users = data.results;
        this.paginationInfo.collectionSize = data.totalCount;
        console.log("Users: ", this.users);
      });
  }

  updateCompany() {
    this.organizationService.updateOrganization(this.companyName).subscribe();
  }

  deleteUser(user: IUser) {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.fetchUsers();
    });
  }

  openCreateUserModal(content) {
    this.modalService.open(content, { centered: true });
  }

  addNewUser(form) {
    const user = {
      email: form.value.email,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      organizationId: this.organization.id,
      password: form.value.password,
      role: form.value.selectRole,
      //storeId:
      userName: form.value.userName
    };
    //console.log(form.value)
    this.userService.registerNewUser(user).subscribe(() => {
      this.fetchUsers();
      this.modalService.dismissAll();
    });
  }
}
