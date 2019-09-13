import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '@models/dto/category';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  // categories: string[] = [ 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'];
  @Input() categories: Observable<Category[]>;

  selectedCategory: Category = null;

  @Output() categoryChanged = new EventEmitter<Category>();
  constructor() {
  }

  ngOnInit() {
  }

  isActive(category: Category): boolean {
    return this.selectedCategory === category;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categoryChanged.emit(category);
  }

  selectAllProducts() {
    this.selectedCategory = null;
    this.categoryChanged.emit(null);
  }
}
