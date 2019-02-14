import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdmiComponent } from './create-admi.component';

describe('CreateAdmiComponent', () => {
  let component: CreateAdmiComponent;
  let fixture: ComponentFixture<CreateAdmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
