import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultMessageComponent } from './no-result-message.component';

describe('NoResultMessageComponent', () => {
  let component: NoResultMessageComponent;
  let fixture: ComponentFixture<NoResultMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoResultMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResultMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
