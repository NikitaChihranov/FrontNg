import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachCommentComponent } from './each-comment.component';

describe('EachCommentComponent', () => {
  let component: EachCommentComponent;
  let fixture: ComponentFixture<EachCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
