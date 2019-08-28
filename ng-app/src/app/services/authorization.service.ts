import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from '../models/dto/iuser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  currentUser: IUser;
  isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private userService: UserService) {
   }

   get isAdmin() {
     if (this.currentUser == null) {
      this.userService.getCurrentUser().subscribe((data: any) => {
        this.currentUser = data as IUser;
        this.isAdmin$.next(this.currentUser && this.currentUser.role.id === 'store-admin');
      });
     }
     return this.isAdmin$;
   }

   logout() {
     this.currentUser = null;
   }

}
