import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUsersComponent } from './company-users.component';

describe('CompanyUsersComponent', () => {
  let component: CompanyUsersComponent;
  let fixture: ComponentFixture<CompanyUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
