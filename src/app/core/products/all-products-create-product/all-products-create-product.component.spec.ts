import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsCreateProductComponent } from './all-products-create-product.component';

describe('AllProductsCreateProductComponent', () => {
  let component: AllProductsCreateProductComponent;
  let fixture: ComponentFixture<AllProductsCreateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductsCreateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
