import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    getLogin() {
        const url = window["BASE_URL"] + 'account/login';
        return this.http.get<any>(url);
    }

    postLogin(username: string, password: string, param: string) {
        console.log("Login: " + username);
        console.log("Password: " + password);
        const url = window["BASE_URL"] + 'account/login';
        const params = 'customer%5Buser_name%5D=' + username + '&customer%5Bpassword%5D=' + password + '%21&__RequestVerificationToken=' + param;
        return this.http.post(url, params);
    }
}