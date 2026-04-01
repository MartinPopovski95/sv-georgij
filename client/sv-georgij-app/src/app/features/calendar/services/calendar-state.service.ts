import { Injectable, computed, signal } from '@angular/core';
import calendarJson from '../calendar.json';
import { CalendarData, CalendarEntry, CalendarMonth } from '../models/calendar.models';

@Injectable({ providedIn: 'root' })
export class CalendarStateService {
  private readonly data: CalendarData = calendarJson as CalendarData;

  readonly selectedMonthIndex = signal(new Date().getMonth());
  readonly selectedYear = signal(this.data.year);

  readonly selectedMonthData = computed(() =>
    this.data.months[this.selectedMonthIndex()]
  );

  readonly todayMonthData = computed(() => {
    const today = new Date().toISOString().slice(0, 10);
    return this.data.months.find(m =>
      m.entries.some(e => e.date === today)
    ) ?? null;
  });

  selectMonth(index: number): void {
    this.selectedMonthIndex.set(index);
  }

  getEntryForDate(date: string): CalendarEntry | null {
    for (const month of this.data.months) {
      const entry = month.entries.find(e => e.date === date);
      if (entry) return entry;
    }
    return null;
  }

  getMonthForDate(date: string): CalendarMonth | null {
    return this.data.months.find(m => m.entries.some(e => e.date === date)) ?? null;
  }

  getPrevMonthName(date: string): string | null {
    const idx = this.data.months.findIndex(m => m.entries.some(e => e.date === date));
    if (idx <= 0) return null;
    return this.data.months[idx - 1].month;
  }
}
