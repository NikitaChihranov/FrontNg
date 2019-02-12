import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsOrdersComponent } from './stats-orders.component';

describe('StatsOrdersComponent', () => {
  let component: StatsOrdersComponent;
  let fixture: ComponentFixture<StatsOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
