import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCartSummaryComponent } from './mobile-cart-summary.component';

describe('MobileCartSummaryComponent', () => {
  let component: MobileCartSummaryComponent;
  let fixture: ComponentFixture<MobileCartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCartSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
