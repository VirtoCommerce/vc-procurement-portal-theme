import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrderDetailComponent } from './active-order-detail.component';

describe('ActiveOrderDetailComponent', () => {
  let component: ActiveOrderDetailComponent;
  let fixture: ComponentFixture<ActiveOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
