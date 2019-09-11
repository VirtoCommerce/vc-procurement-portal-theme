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


  private rolesStorage: WorkflowUserRolesRecord[];

  constructor() {
    const lcItem = localStorage.getItem(ROLES_STORAGE_ITEM_KEY);
    if (lcItem) {
      this.rolesStorage = JSON.parse(lcItem) as WorkflowUserRolesRecord[];
    }
    if (!this.rolesStorage) {
      this.rolesStorage = [];
    }
  }


  updateUserRoles(userId: string, roles: string[]) {
    if (!userId) {
      throw new Error('userId cannot be empty or null.');
    }
    if (!roles) {
      throw new Error('roles cannot be null or undefined.');
    }
    const record =  this.rolesStorage.find(x => x.userId === userId);
    if (record) {
      record.roles = roles;
    } else {
      this.rolesStorage.push(new WorkflowUserRolesRecord(userId, roles));
    }
    localStorage.setItem(ROLES_STORAGE_ITEM_KEY, JSON.stringify(this.rolesStorage));
  }

  getUserRoles(userId: string): string[] {
    const record = this.rolesStorage.find(x => x.userId === userId);
    return (record || {roles: []}).roles;
  }

}
