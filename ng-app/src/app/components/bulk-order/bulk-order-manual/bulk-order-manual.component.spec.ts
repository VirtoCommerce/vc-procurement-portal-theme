import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderManualComponent } from './bulk-order-manual.component';

describe('BulkOrderManualComponent', () => {
  let component: BulkOrderManualComponent;
  let fixture: ComponentFixture<BulkOrderManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrderManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrderManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
