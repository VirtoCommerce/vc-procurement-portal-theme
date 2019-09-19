import { Injectable } from '@angular/core';
import { UserService } from '@api/user.service';
import { ExtendedUser } from '@models/dto/iuser';
import { RoleEnum } from '@models/role';
import { Subject, Observable } from 'rxjs';

const CURRENT_USER_LS_KEY = 'pp_current_user_name';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private currentUser: ExtendedUser = null;

  private user$ = new Subject<ExtendedUser>();

  currentUser$: Observable<ExtendedUser>;

  constructor(private userService: UserService) {
    this.currentUser$ = this.user$.asObservable();
  }

  /**
   * getting current user into promise
   */
  public async getCurrentUser(): Promise<ExtendedUser> {
    const currentUserName = localStorage.getItem(CURRENT_USER_LS_KEY);
    if (this.currentUser == null || !currentUserName || this.currentUser.userName !== currentUserName ) {
      const request =  this.userService.getCurrentUser();
      this.currentUser =  await request.toPromise();
      this.user$.next(this.currentUser);
      if (this.currentUser) {
        localStorage.setItem(CURRENT_USER_LS_KEY, this.currentUser.userName);
      } else {
        localStorage.removeItem(CURRENT_USER_LS_KEY);
      }
    }
    return this.currentUser;
  }

  public async refreshUser(): Promise<ExtendedUser> {
    const currentUserName = localStorage.getItem(CURRENT_USER_LS_KEY);
    if (this.currentUser == null || !currentUserName || this.currentUser.userName !== currentUserName ) {
      return this.getCurrentUser();
    }
    this.user$.next(this.currentUser);
    return this.currentUser;
  }

  /**
   * for check user permissions
   * @param user
   * @param roles
   */
  checkUserPermission( user: ExtendedUser, ...roles: RoleEnum[]): boolean {
    if (roles.length < 1 || !user.roles || user.roles.length < 1 ) {
      return false;
    }

    if (roles.some(r => user.roles.some(x => x.id === r))) {
      return true;
    }
    return false;
  }

  /**
   * for check current user permission by roles
   * @param roles
   */
  async checkPermission( ...roles: RoleEnum[]): Promise<boolean> {
    const user = await this.getCurrentUser();
    return this.checkUserPermission(user, ...roles);
  }

  logout() {
     this.currentUser = null;
  }

}
