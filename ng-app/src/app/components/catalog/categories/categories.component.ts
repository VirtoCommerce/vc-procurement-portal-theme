import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '@models/dto/category';
import { Observable } from 'rxjs';
import { MobileViewService } from '@services/mobile-view.service';
import { IToggleable } from '@models/itoggleable';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, IToggleable {
  // categories: string[] = [ 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'];
  @Input() categories: Observable<Category[]>;

  selectedCategory: Category = null;
  isOpen = false;

  @Output() categoryChanged = new EventEmitter<Category>();
  constructor(private mobileSidebarService: MobileViewService) {
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  closeSidebar() {
    this.mobileSidebarService.closeSidebar(this);
  }

  isActive(category: Category): boolean {
    return this.selectedCategory === category;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categoryChanged.emit(category);
    if (this.isOpen) {
      this.closeSidebar();
    }
  }

  selectAllProducts() {
    this.selectedCategory = null;
    this.categoryChanged.emit(null);
    if (this.isOpen) {
      this.closeSidebar();
    }
  }
}
