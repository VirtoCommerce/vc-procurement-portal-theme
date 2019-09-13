import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Category } from '@models/dto/category';
import { Observable } from 'rxjs';
import { MobileViewService } from '@services/mobile-view.service';
import { IToggleable } from '@models/itoggleable';

@Component({
  selector: 'app-categories-mobile',
  templateUrl: './categories-mobile.component.html',
  styleUrls: ['./categories-mobile.component.scss']
})
export class CategoriesMobileComponent implements OnInit, IToggleable {
  @Input() categories: Observable<Category[]>;
  selectedCategory: Category = null;
  isOpen = false;
  @Output() categoryChanged = new EventEmitter<Category>();

  constructor(private mobileSidebarService: MobileViewService) { }

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
