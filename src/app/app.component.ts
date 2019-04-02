import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h2>Theme works!!!</h2>`
})
export class AppComponent {
    str: string;
    constructor() {
        this.str = '123';
    }

}