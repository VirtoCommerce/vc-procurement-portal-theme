import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IAction } from './iaction';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss']
})
export class ActionPanelComponent implements OnInit {
  @Input() actions: IAction[];
  @Output() actionClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onActionClick(id: string) {
    this.actionClick.emit(id);
  }
}
