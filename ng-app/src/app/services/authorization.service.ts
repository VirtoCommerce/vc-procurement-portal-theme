import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from '../models/dto/iuser';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RoleEnum } from '../models/role';
import { enumToStringArray } from '../helpers/enum.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private currentUser: IUser = null;

  constructor(private userService: UserService) { }

  /**
   * getting current user into promise
   */
  public async getCurrentUser(): Promise<IUser> {

    if (this.currentUser == null) {
      const request =  this.userService.getCurrentUser();
      this.currentUser =  await request.toPromise();
    }
    return this.currentUser;
  }

  /**
   *
   * @param roles for check permission by roles
   */
  async checkPermission(roles: RoleEnum): Promise<boolean> {
    const u = await this.getCurrentUser();
    const stringRoles = enumToStringArray(roles);
    if (stringRoles.length < 1) {
      return false;
    }

    if (stringRoles.every(r => u.roles.some(x => x.id === r))) {
      return true;
    }

    return false;
  }

   logout() {
     this.currentUser = null;
   }

}
