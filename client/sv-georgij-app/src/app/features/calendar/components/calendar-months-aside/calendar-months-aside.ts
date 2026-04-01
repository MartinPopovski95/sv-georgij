import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { CalendarStateService } from '../../services/calendar-state.service';

@Component({
  selector: 'app-calendar-months-aside',
  imports: [NgClass],
  templateUrl: './calendar-months-aside.html',
  styleUrl: './calendar-months-aside.scss',
})
export class CalendarMonthsAside {
  private calendarState = inject(CalendarStateService);

  readonly months = [
    'Јануари', 'Февруари', 'Март', 'Април',
    'Мај', 'Јуни', 'Јули', 'Август',
    'Септември', 'Октомври', 'Ноември', 'Декември'
  ];

  readonly currentMonthIndex = this.calendarState.selectedMonthIndex;

  selectMonth(index: number): void {
    this.calendarState.selectMonth(index);
  }
}
