import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../models/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carusel',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  // categories: string[] = [ 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'];
  @Input() categories: Observable<Category[]>;
  @Output() filterByCategory = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }

  setFilterByCategory(filterByCategory: string) {
    this.filterByCategory.emit(filterByCategory);
  }
}
