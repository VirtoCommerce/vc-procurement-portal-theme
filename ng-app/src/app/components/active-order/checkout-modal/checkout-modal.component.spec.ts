import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutModalComponent } from './checkout-modal.component';

describe('CheckoutModalComponent', () => {
  let component: CheckoutModalComponent;
  let fixture: ComponentFixture<CheckoutModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
