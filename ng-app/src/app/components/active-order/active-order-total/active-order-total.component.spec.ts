import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrderTotalComponent } from './active-order-total.component';

describe('ActiveOrderTotalComponent', () => {
  let component: ActiveOrderTotalComponent;
  let fixture: ComponentFixture<ActiveOrderTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrderTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrderTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
