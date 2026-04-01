import { Component, computed, inject, signal } from '@angular/core';
import { CalendarStateService } from '../../../calendar/services/calendar-state.service';

@Component({
  selector: 'app-featured-calendar-section',
  imports: [],
  templateUrl: './featured-calendar-section.html',
  styleUrl: './featured-calendar-section.scss',
})
export class FeaturedCalendarSection {
  private readonly calendarService = inject(CalendarStateService);

  private readonly todayStr = new Date().toISOString().slice(0, 10);

  readonly selectedDate = signal(this.todayStr);

  readonly currentEntry = computed(() =>
    this.calendarService.getEntryForDate(this.selectedDate())
  );

  readonly currentMonth = computed(() =>
    this.calendarService.getMonthForDate(this.selectedDate())
  );

  readonly formattedDate = computed(() => {
    const entry = this.currentEntry();
    const month = this.currentMonth();
    if (!entry || !month) return '';
    const [year] = entry.date.split('-');
    return `${entry.dayOfWeek.toLowerCase()}, ${entry.day} ${month.month.toLowerCase()} ${year}`;
  });

  readonly oldCalendarStr = computed(() => {
    const entry = this.currentEntry();
    const month = this.currentMonth();
    if (!entry || !month) return '';
    const oldDay = entry.oldCalendarDay;
    let oldMonthName: string;
    if (oldDay < entry.day) {
      oldMonthName = month.month.toLowerCase();
    } else {
      const prevMonth = this.calendarService.getPrevMonthName(this.selectedDate());
      oldMonthName = prevMonth?.toLowerCase() ?? '';
    }
    return `${oldDay} ${oldMonthName}`;
  });

  readonly saints = computed(() =>
    this.currentEntry()?.saints.split('; ').filter(Boolean) ?? []
  );

  readonly typikon = computed(() => this.currentEntry()?.typikon ?? '');

  readonly isToday = computed(() => this.selectedDate() === this.todayStr);

  goToToday(): void { this.selectedDate.set(this.todayStr); }

  prevDay(): void { this.selectedDate.set(this.offsetDate(this.selectedDate(), -1)); }

  nextDay(): void { this.selectedDate.set(this.offsetDate(this.selectedDate(), 1)); }

  private offsetDate(dateStr: string, days: number): string {
    const d = new Date(dateStr);
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
  }
}
