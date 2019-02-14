import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProducerByNameComponent } from './search-producer-by-name.component';

describe('SearchProducerByNameComponent', () => {
  let component: SearchProducerByNameComponent;
  let fixture: ComponentFixture<SearchProducerByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProducerByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProducerByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
