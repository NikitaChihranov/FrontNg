import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAllUsersComponent } from './super-all-users.component';

describe('SuperAllUsersComponent', () => {
  let component: SuperAllUsersComponent;
  let fixture: ComponentFixture<SuperAllUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAllUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
