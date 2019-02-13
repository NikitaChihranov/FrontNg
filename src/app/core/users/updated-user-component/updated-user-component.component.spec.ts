import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedUserComponentComponent } from './updated-user-component.component';

describe('UpdatedUserComponentComponent', () => {
  let component: UpdatedUserComponentComponent;
  let fixture: ComponentFixture<UpdatedUserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedUserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
