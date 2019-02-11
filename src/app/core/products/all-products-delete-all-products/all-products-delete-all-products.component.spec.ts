import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsDeleteAllProductsComponent } from './all-products-delete-all-products.component';

describe('AllProductsDeleteAllProductsComponent', () => {
  let component: AllProductsDeleteAllProductsComponent;
  let fixture: ComponentFixture<AllProductsDeleteAllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductsDeleteAllProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsDeleteAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
