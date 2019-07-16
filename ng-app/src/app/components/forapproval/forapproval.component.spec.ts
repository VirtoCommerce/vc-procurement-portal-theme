import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForApprovalComponent } from './forapproval.component';

describe('ForApprovalComponent', () => {
  let component: ForApprovalComponent;
  let fixture: ComponentFixture<ForApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
