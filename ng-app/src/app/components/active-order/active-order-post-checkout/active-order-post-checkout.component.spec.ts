import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrderPostCheckoutComponent } from './active-order-post-checkout.component';

describe('ActiveOrderPostCheckoutComponent', () => {
  let component: ActiveOrderPostCheckoutComponent;
  let fixture: ComponentFixture<ActiveOrderPostCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrderPostCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrderPostCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
