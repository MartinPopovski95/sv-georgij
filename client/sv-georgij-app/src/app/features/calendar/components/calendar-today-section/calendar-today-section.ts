import { Component, computed, inject } from '@angular/core';
import { CalendarStateService } from '../../services/calendar-state.service';

@Component({
  selector: 'app-calendar-today-section',
  imports: [],
  templateUrl: './calendar-today-section.html',
  styleUrl: './calendar-today-section.scss',
})
export class CalendarTodaySection {
  private calendarState = inject(CalendarStateService);

  private readonly todayMonthData = computed(() => this.calendarState.todayMonthData());

  private readonly todayEntry = computed(() => {
    const today = new Date().toISOString().slice(0, 10);
    return this.todayMonthData()?.entries.find(e => e.date === today) ?? null;
  });

  readonly todayDayName   = computed(() => this.todayEntry()?.dayOfWeek ?? '');
  readonly todayDay       = computed(() => this.todayEntry()?.day ?? null);
  readonly todayMonthYear = computed(() => {
    const m = this.todayMonthData();
    if (!m) return '';
    return `${m.month} ${this.calendarState.selectedYear()}`;
  });
  readonly todayJulianDate = computed(() => {
    const entry = this.todayEntry();
    const m = this.todayMonthData();
    if (!entry || !m) return '';
    return `${entry.oldCalendarDay} ${m.oldMonthName} (стар календар)`;
  });
  readonly todaySaints       = computed(() => this.todayEntry()?.saints ?? '');
  readonly todayTypikon      = computed(() => this.todayEntry()?.typikon ?? '');
  readonly todayTypikonClass = computed(() => this.typikonClass(this.todayTypikon()));

  private typikonClass(typikon: string): string {
    switch (typikon) {
      case 'Строг пост':  return 'strict';
      case 'Масло':       return 'oil';
      case 'Риба':        return 'fish';
      case 'Без месо':    return 'no-meat';
      case 'Не се пости': return 'no-fast';
      default:            return '';
    }
  }
}
