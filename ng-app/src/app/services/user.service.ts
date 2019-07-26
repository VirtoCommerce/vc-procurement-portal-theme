import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`/users/${id}`);
    }


    getUserName() {
      console.log('getUserName');
      const url = 'storefrontapi/account';
      return this.http.get<any>(url);
    }

}
