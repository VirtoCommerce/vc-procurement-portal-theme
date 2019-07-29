import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProductQuantityComponent } from './change-product-quantity.component';

describe('ChangeProductQuantityComponent', () => {
  let component: ChangeProductQuantityComponent;
  let fixture: ComponentFixture<ChangeProductQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProductQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
