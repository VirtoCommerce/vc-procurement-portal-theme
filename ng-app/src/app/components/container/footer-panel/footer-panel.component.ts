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
  constructor() {
    this.version = environment.version;
  }

  ngOnInit() {
  }

}
