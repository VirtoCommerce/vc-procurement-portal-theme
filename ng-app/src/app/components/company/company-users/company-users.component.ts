import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/dto/iuser';
import { IAppConfig } from 'src/app/models/iapp-config';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserConverterService } from 'src/app/services/converters/user-converter.service';
import { OrganizationService } from 'src/app/services/organization.service';
import { PageSizeChangedArgs } from '../../page-size-selector/page-size-selector.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { IOrganization } from 'src/app/models/dto/iorganization';
import settings_data from 'src/assets/config/config.dev.json';
import { ConfirmService } from 'src/app/modules/confirm-modal/confirm-modal-service';

@Component({
  selector: 'app-company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.scss']
})
export class CompanyUsersComponent implements OnInit {
  @Input() organization: IOrganization;
  users: IUser[];

  settings = settings_data as IAppConfig;
  paginationInfo = new PaginationInfo(this.settings.defaultPageSize);
  pageSizes = this.settings.pageSizes;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private userConverter: UserConverterService,
    private organizationService: OrganizationService,
    private confirmService: ConfirmService
  ) {}

  ngOnInit() {
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
    const confirmOptions = {
      title: 'Delete user',
      message: 'Are you sure you want to delete this user?'
    };
    this.confirmService.confirm(confirmOptions).then(() =>
      this.userService.deleteUser(user.id).subscribe(() => {
        this.fetchUsers();
      })
    );
  }

  openCreateUserModal() {
    const modalRef = this.modalService.open(ModalFormComponent, {
      centered: true
    });
    modalRef.result.then(result => {
      const user = this.userConverter.toAddUser(result, this.organization);
      this.userService.registerNewUser(user).subscribe(() => {
        this.fetchUsers();
      });
    });
  }

  openEditUserModal(user: IUser) {
    const modalRef = this.modalService.open(ModalFormComponent, {
      centered: true
    });
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
