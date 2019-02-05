import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedAdminComponent } from './created-admin.component';

describe('CreatedAdminComponent', () => {
  let component: CreatedAdminComponent;
  let fixture: ComponentFixture<CreatedAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
