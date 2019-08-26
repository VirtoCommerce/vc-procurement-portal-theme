import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrderMobileComponent } from './active-order-mobile.component';

describe('ActiveOrderMobileComponent', () => {
  let component: ActiveOrderMobileComponent;
  let fixture: ComponentFixture<ActiveOrderMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrderMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
