import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrderSummaryComponent } from './active-order-summary.component';

describe('ActiveOrderSummaryComponent', () => {
  let component: ActiveOrderSummaryComponent;
  let fixture: ComponentFixture<ActiveOrderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
