import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrderHeaderComponent } from './active-order-header.component';

describe('ActiveOrderHeaderComponent', () => {
  let component: ActiveOrderHeaderComponent;
  let fixture: ComponentFixture<ActiveOrderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrderHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
