import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { IOrganization } from 'src/app/models/dto/iorganization';
import { IUser } from 'src/app/models/dto/iuser';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import settings_data from 'src/assets/config/config.dev.json';
import { IAppConfig } from 'src/app/models/iapp-config';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { PageSizeChangedArgs } from '../page-size-selector/page-size-selector.component';
import { ModalFormComponent } from '../company/modal-form/modal-form.component';
import { UserConverterService } from 'src/app/services/converters/user-converter.service';
import { OrganizationConverterService } from 'src/app/services/converters/organization-converter.service';
import { OrganizationDetails } from 'src/app/models/organization';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  operationType: string;
  users: IUser[];
  organization: IOrganization;
  organizationDetails: OrganizationDetails;

  settings = settings_data as IAppConfig;
  paginationInfo = new PaginationInfo(this.settings.defaultPageSize);
  pageSizes = this.settings.pageSizes;

  constructor(
    private organizationService: OrganizationService,
    private userService: UserService,
    private modalService: NgbModal,
    private userConverter: UserConverterService,
    private orgConverter: OrganizationConverterService
  ) {}

  ngOnInit() {
    this.organizationService.getUserOrganization().subscribe((data: any) => {
      this.organization = data as IOrganization;
      console.log('Import of organization', this.organization);
      this.organizationDetails = this.orgConverter.toOrganizationDetails(this.organization);
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
      });
  }

  deleteUser(user: IUser) {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.fetchUsers();
    });
  }

  openCreateUserModal() {
    const modalRef = this.modalService.open(ModalFormComponent, { centered: true });
    modalRef.result.then(result => {
      const user = this.userConverter.toAddUser(result, this.organization);
      this.userService.registerNewUser(user).subscribe(() => {
        this.fetchUsers();
      });
    });
  }

  openEditUserModal(user: IUser){
    const modalRef = this.modalService.open(ModalFormComponent, {centered: true});
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.editUserMode = true;
    modalRef.result.then(result => {
      const updatedUser = this.userConverter.toEditUser(result, user);
      this.userService.updateUser(updatedUser).subscribe(() => {
        this.fetchUsers();
      });
    });


  }

}
