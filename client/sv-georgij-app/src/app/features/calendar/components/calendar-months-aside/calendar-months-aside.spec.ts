import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthsAside } from './calendar-months-aside';

describe('CalendarMonthsSection', () => {
  let component: CalendarMonthsAside;
  let fixture: ComponentFixture<CalendarMonthsAside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarMonthsAside]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarMonthsAside);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
