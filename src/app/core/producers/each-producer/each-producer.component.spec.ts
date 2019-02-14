import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachProducerComponent } from './each-producer.component';

describe('EachProducerComponent', () => {
  let component: EachProducerComponent;
  let fixture: ComponentFixture<EachProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
