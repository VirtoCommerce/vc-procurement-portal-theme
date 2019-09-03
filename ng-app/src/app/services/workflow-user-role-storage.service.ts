import { Injectable } from '@angular/core';


export class WorkflowUserRolesRecord {
  constructor(
   public userId: string,
   public  roles: string[] ) { }
}

const ROLES_STORAGE_ITEM_KEY = 'vc_procurement_portal_user_roles_storage';

@Injectable({
  providedIn: 'root'
})
export class WorkflowUserRoleStorageService {


  private rolesStrorage: WorkflowUserRolesRecord[];

  constructor() {
    const lcItem = localStorage.getItem(ROLES_STORAGE_ITEM_KEY);
    if (lcItem) {
      this.rolesStrorage = JSON.parse(lcItem) as WorkflowUserRolesRecord[];
    }
    if (!this.rolesStrorage) {
      this.rolesStrorage = [];
    }
  }


  updateUserRoles(userId: string, roles: string[]) {
    if (!userId) {
      throw new Error('userId cannot be empty or null.');
    }
    if (!roles) {
      throw new Error('roles cannot be null or undefined.');
    }
    const record =  this.rolesStrorage.find(x => x.userId === userId);
    if (record) {
      record.roles = roles;
    } else {
      this.rolesStrorage.push(new WorkflowUserRolesRecord(userId, roles));
    }
    localStorage.setItem(ROLES_STORAGE_ITEM_KEY, JSON.stringify(this.rolesStrorage));
  }

  getUserRoles(userId: string): string[] {
    const record = this.rolesStrorage.find(x => x.userId === userId);
    return (record || {roles: []}).roles;
  }

}
