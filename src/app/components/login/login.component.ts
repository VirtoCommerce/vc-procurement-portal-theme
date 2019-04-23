import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActiveOrderService } from '../../services/active-order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private activeOrderService: ActiveOrderService
    ) { }

  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  test(){
   
  }

  login() {
    const XSRF_TOKEN = getCookie('XSRF-TOKEN');
    this.authenticationService.postLogin(this.model.username, this.model.password, XSRF_TOKEN)
      .subscribe(
        () => {
          console.log('Successfully postLogin');
          //this.router.navigate(['/catalog']);
        },
        (error: any) => {
          console.log('error postLogin' + error);

        }
      );
    // this.authenticationService.getLogin()
    //   .subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       // const XSRF_TOKEN = getCookie('XSRF-TOKEN');
    //       // this.authenticationService.postLogin(this.model.username, this.model.password, XSRF_TOKEN)
    //       //   .subscribe(
    //       //     (data: any) => {
    //       //       this.router.navigate(['/catalog']);
    //       //     },
    //       //     (error: any) => console.log('error postLogin' + error)
    //       //   );
    //     },
    //     (error: any) => {
    //       console.log('error getLogin:' + error);
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