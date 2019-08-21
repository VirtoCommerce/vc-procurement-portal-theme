import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyUserModalFormComponent } from './edit-company-user-modal-form.component';

describe('EditCompanyUserModalFormComponent', () => {
  let component: EditCompanyUserModalFormComponent;
  let fixture: ComponentFixture<EditCompanyUserModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompanyUserModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompanyUserModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
