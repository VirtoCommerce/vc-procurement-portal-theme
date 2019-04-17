import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {
  //categories: string[] = [ 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'];
  @Input() categories: Category[];
  @Output() filterByCategory = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }

  setFilterByCategory(filterByCategory:string) {
    console.log('Clicked by ' + filterByCategory);
    this.filterByCategory.emit(filterByCategory);
  }
}
