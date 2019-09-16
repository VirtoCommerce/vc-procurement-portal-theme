import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-panel',
  templateUrl: './footer-panel.component.html',
  styleUrls: ['./footer-panel.component.scss']
})
export class FooterPanelComponent implements OnInit {
  @Input() footerBgBlack = false;

  constructor() { }

  ngOnInit() {
  }

}
