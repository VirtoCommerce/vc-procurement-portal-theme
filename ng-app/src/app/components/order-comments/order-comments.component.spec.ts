import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCommentsComponent } from './order-comments.component';

describe('OrderCommentsComponent', () => {
  let component: OrderCommentsComponent;
  let fixture: ComponentFixture<OrderCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
