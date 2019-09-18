import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowActivationAlertComponent } from './workflow-activation-alert.component';

describe('WorkflowActivationAlertComponent', () => {
  let component: WorkflowActivationAlertComponent;
  let fixture: ComponentFixture<WorkflowActivationAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowActivationAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowActivationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
