import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export class PageSizeChangedArgs {
  constructor(public newPageSize: number) {}
}

@Component({
  selector: 'app-page-size-selector',
  templateUrl: './page-size-selector.component.html',
  styleUrls: ['./page-size-selector.component.scss']
})
export class PageSizeSelectorComponent implements OnInit {

  @Input()
  pageSizes: number[];
  @Input()
  defaultPageSize: number;
  pageSize: number;

  @Output()
  pageSizeChanged = new EventEmitter<PageSizeChangedArgs>();

  constructor() { }

  ngOnInit() {
    this.pageSize = this.defaultPageSize;

  }

  onPageSizeClicked(newPageSize: number) {
    if (this.pageSize !== newPageSize) {
      this.pageSize = newPageSize;
      this.pageSizeChanged.emit(new PageSizeChangedArgs(newPageSize));
    }
  }

}
