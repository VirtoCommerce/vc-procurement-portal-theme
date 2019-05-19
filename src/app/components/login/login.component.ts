import { Component, OnInit, ViewChild } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActiveOrderService } from '../../services/active-order.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  // loading = false;
  // error = '';
  http: any;
  token: string;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';


  constructor(
    // private router: Router,
    // private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    // this.authenticationService.logout();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
  fakeLogin(username: string, password: string) {
    // return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    //     .map((response: Response) => {
    //         // login successful if there's a jwt token in the response
    //         let token = response.json() && response.json().token;
    //         if (token) {
    //             // set token property
    //             this.token = token;

    //             // store username and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

    //             // return true to indicate successful login
    //             return true;
    //         } else {
    //             // return false to indicate failed login
    //             return false;
    //         }
    //     });
  }

  fakeLogout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
  login() {
    // const XSRF_TOKEN = getCookie('XSRF-TOKEN');
    // this.authenticationService.postLogin(this.model.username, this.model.password, XSRF_TOKEN)
    //   .subscribe(
    //     () => {
    //       //console.log('Successfully postLogin');

    //     },
    //     (error: any) => {
    //       console.log('error postLogin' + error);

    //     }
    //   );
  }
}

function getCookie(cname: string) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}