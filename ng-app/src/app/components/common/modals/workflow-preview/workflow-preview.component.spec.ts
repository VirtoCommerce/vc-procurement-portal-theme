import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowPreviewComponent } from './workflow-preview.component';

describe('WorkflowPreviewComponent', () => {
  let component: WorkflowPreviewComponent;
  let fixture: ComponentFixture<WorkflowPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
