import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedPageComponent } from './updated-page.component';

describe('UpdatedPageComponent', () => {
  let component: UpdatedPageComponent;
  let fixture: ComponentFixture<UpdatedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
