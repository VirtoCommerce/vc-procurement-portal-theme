import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMobileComponent } from './categories-mobile.component';

describe('CategoriesMobileComponent', () => {
  let component: CategoriesMobileComponent;
  let fixture: ComponentFixture<CategoriesMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
