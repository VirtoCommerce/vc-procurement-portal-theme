import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disabled-block',
  template: `
  <div class="block-ui-template">
   <div>loading</div>
  </div>`,
  styles: [
    `:host {
      cursor: progress;
    }`
  ]
})
export class DisabledBlockComponent  {
}
