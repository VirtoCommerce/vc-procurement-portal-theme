import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderItemComponent } from './bulk-order-item.component';

describe('BulkOrderItemComponent', () => {
  let component: BulkOrderItemComponent;
  let fixture: ComponentFixture<BulkOrderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
