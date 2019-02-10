import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedProductComponent } from './created-product.component';

describe('CreatedProductComponent', () => {
  let component: CreatedProductComponent;
  let fixture: ComponentFixture<CreatedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
