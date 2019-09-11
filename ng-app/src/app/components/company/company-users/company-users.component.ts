import { Component, OnInit, Input } from '@angular/core';
import { IUser, ExtendedUser } from 'src/app/models/dto/iuser';
import { IAppConfig } from 'src/app/models/iapp-config';
import { PaginationInfo } from 'src/app/models/inner/pagination-info';
import { UserService } from '@api/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserConverterService } from 'src/app/services/converters/user-converter.service';
import { PageSizeChangedArgs } from '../../page-size-selector/page-size-selector.component';
import { IOrganization } from 'src/app/models/dto/iorganization';
import settings_data from 'src/assets/config/config.dev.json';
import { ConfirmService } from 'src/app/modules/confirm-modal/confirm-modal-service';
import { EditCompanyUserModalFormComponent } from '../edit-company-user-modal-form/edit-company-user-modal-form.component';
import { AlertsService } from 'src/app/modules/alerts/alerts.service';
import { GenericSearchResult } from 'src/app/models/dto/common/generic-search-result';
import { EditUser } from 'src/app/models/user';
import { WorkflowUserRoleStorageService } from 'src/app/services/workflow-user-role-storage.service';

@Component({
  selector: 'app-company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.scss']
})
export class CompanyUsersComponent implements OnInit {
  @Input() organization: IOrganization;
  users: ExtendedUser[];

  settings = settings_data as IAppConfig;
  paginationInfo = new PaginationInfo(this.settings.defaultPageSize);
  pageSizes = this.settings.pageSizes;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private userConverter: UserConverterService,
    private confirmService: ConfirmService,
    private aletsService: AlertsService,
    private workflowUserRolesStorage: WorkflowUserRoleStorageService
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
    this.userService
      .getOrganizationUsers(
        this.paginationInfo.page,
        this.paginationInfo.pageSize
      )
      .subscribe((data: GenericSearchResult<ExtendedUser>) => {
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
        this.aletsService.success(`User ${user.userName} removed successfuly!`);
      }), () => { }
    );
  }

  openCreateUserModal() {
    const modalRef = this.modalService.open(EditCompanyUserModalFormComponent, {
      centered: true,
      backdrop: 'static'
    });
    modalRef.result.then((result: EditUser) => {
      result.organizationId = this.organization.id;
      const user = this.userConverter.toAddUserDto(result);
      this.userService.registerNewUser(user).subscribe(() => {
        this.fetchUsers();
        this.aletsService.success(`User ${user.userName} is created successfuly!`);
      });
    }, () => { });
  }

  openEditUserModal(user: ExtendedUser) {
    const modalRef = this.modalService.open(EditCompanyUserModalFormComponent, {
      centered: true,
      backdrop: 'static'
    });
    modalRef.componentInstance.user =  this.userConverter.toEditUser(user);
    modalRef.componentInstance.editUserMode = true;
    modalRef.result.then((result: EditUser) => {
      result.id = user.id;
      const updatedUser = this.userConverter.toEditUserDto(result);
      this.userService.updateUser(updatedUser).subscribe(() => {
        if (result.selectedWorkflowRole) {
          this.workflowUserRolesStorage.updateUserRoles(user.id, [result.selectedWorkflowRole]);
        }
        this.fetchUsers();
        this.aletsService.success(`User ${user.userName} is updated successfuly!`);
      });
    }, () => { });
  }
}
