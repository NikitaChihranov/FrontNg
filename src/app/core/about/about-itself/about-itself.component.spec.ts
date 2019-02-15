import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutItselfComponent } from './about-itself.component';

describe('AboutItselfComponent', () => {
  let component: AboutItselfComponent;
  let fixture: ComponentFixture<AboutItselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutItselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutItselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
