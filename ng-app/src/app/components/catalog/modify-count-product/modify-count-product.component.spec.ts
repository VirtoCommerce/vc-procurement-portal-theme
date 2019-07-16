import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCountProductComponent } from './modify-count-product.component';

describe('ModifyCountProductComponent', () => {
  let component: ModifyCountProductComponent;
  let fixture: ComponentFixture<ModifyCountProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCountProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCountProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
