import { Component, computed, inject } from '@angular/core';
import { CalendarStateService } from '../../services/calendar-state.service';

interface CalendarDay {
  weekday: string;
  day: number;
  oldStyleDay: number;
  saints: string;
  typikon: string;
  notes?: string[];
  isSunday: boolean;
  isToday: boolean;
}

@Component({
  selector: 'app-day-details-section',
  imports: [],
  templateUrl: './day-details-section.html',
  styleUrl: './day-details-section.scss',
})
export class DayDetailsSection {
  private calendarState = inject(CalendarStateService);

  readonly monthTitle = computed(() =>
    this.calendarState.selectedMonthData().month
  );

  readonly oldMonthName = computed(() =>
    this.calendarState.selectedMonthData().oldMonthName
  );

  readonly daysInMonth = computed(() =>
    this.calendarState.selectedMonthData().daysInMonth
  );

  readonly calendarDays = computed<CalendarDay[]>(() => {
    const today = new Date().toISOString().slice(0, 10);
    return this.calendarState.selectedMonthData().entries.map(entry => ({
      weekday: entry.dayOfWeekShort,
      day: entry.day,
      oldStyleDay: entry.oldCalendarDay,
      saints: entry.saints,
      typikon: entry.typikon,
      notes: entry.notes,
      isSunday: entry.dayOfWeekShort === 'Н',
      isToday: entry.date === today,
    }));
  });

  typikonClass(typikon: string): string {
    switch (typikon) {
      case 'Строг пост': return 'strict';
      case 'Масло':      return 'oil';
      case 'Риба':       return 'fish';
      case 'Без месо':   return 'no-meat';
      default:           return '';
    }
  }
}
