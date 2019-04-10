import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    @Input() path: string;
    constructor(private router: Router) {
        // console.log('url: ' + window.location.href + '/' + this.router.url);
        // base_url=this.path;
        // console.log('url: ' + globals.url);
    }

}