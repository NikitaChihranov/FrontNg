import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllProducersComponent } from './delete-all-producers.component';

describe('DeleteAllProducersComponent', () => {
  let component: DeleteAllProducersComponent;
  let fixture: ComponentFixture<DeleteAllProducersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAllProducersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
