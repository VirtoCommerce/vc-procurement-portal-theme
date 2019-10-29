import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledBlockComponent } from './disabled-block.component';

describe('DisabledBlockComponent', () => {
  let component: DisabledBlockComponent;
  let fixture: ComponentFixture<DisabledBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
