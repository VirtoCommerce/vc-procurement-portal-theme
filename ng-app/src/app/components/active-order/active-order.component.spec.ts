import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrderComponent } from './active-order.component';

describe('ActiveOrderComponent', () => {
  let component: ActiveOrderComponent;
  let fixture: ComponentFixture<ActiveOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
