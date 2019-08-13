import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProductQuantityActiveOrderComponent } from './change-product-quantity-active-order.component';

describe('ChangeProductQuantityActiveOrderComponent', () => {
  let component: ChangeProductQuantityActiveOrderComponent;
  let fixture: ComponentFixture<ChangeProductQuantityActiveOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProductQuantityActiveOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProductQuantityActiveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
