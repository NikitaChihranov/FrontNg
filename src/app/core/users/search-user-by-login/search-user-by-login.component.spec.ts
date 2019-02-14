import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserByLoginComponent } from './search-user-by-login.component';

describe('SearchUserByLoginComponent', () => {
  let component: SearchUserByLoginComponent;
  let fixture: ComponentFixture<SearchUserByLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserByLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserByLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
