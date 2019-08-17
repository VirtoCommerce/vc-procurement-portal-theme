import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderCsvComponent } from './bulk-order-csv.component';

describe('BulkOrderCsvComponent', () => {
  let component: BulkOrderCsvComponent;
  let fixture: ComponentFixture<BulkOrderCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrderCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrderCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
