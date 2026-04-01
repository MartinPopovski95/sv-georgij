import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTodaySection } from './calendar-today-section';

describe('CalendarTodaySection', () => {
  let component: CalendarTodaySection;
  let fixture: ComponentFixture<CalendarTodaySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarTodaySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarTodaySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
