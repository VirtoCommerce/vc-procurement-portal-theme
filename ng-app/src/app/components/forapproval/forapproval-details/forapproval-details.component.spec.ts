import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForApprovalDetailsComponent } from './forapproval-details.component';

describe('ForApprovalDetailsComponent', () => {
  let component: ForApprovalDetailsComponent;
  let fixture: ComponentFixture<ForApprovalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForApprovalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForApprovalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
