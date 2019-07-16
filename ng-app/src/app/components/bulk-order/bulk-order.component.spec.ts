import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderComponent } from './bulk-order.component';

describe('BulkOrderComponent', () => {
  let component: BulkOrderComponent;
  let fixture: ComponentFixture<BulkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
