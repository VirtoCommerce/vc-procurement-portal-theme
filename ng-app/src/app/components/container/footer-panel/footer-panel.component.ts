import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-footer-panel',
  templateUrl: './footer-panel.component.html',
  styleUrls: ['./footer-panel.component.scss']
})
export class FooterPanelComponent implements OnInit {
  @Input() footerBgBlack = false;
  version: string;
  buildTime: Date;
  constructor() {
    this.version = environment.version;
    if (environment.buildTime) {
      this.buildTime = new Date(environment.buildTime);
    }
  }

  ngOnInit() {
  }

}
