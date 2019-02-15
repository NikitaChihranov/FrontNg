import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachProductInViewComponent } from './each-product-in-view.component';

describe('EachProductInViewComponent', () => {
  let component: EachProductInViewComponent;
  let fixture: ComponentFixture<EachProductInViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachProductInViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachProductInViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
