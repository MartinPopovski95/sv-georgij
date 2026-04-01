import { Component } from '@angular/core';
import { CalendarHeader } from '../components/calendar-header/calendar-header';
import { CalendarTodaySection } from '../components/calendar-today-section/calendar-today-section';
import { CalendarMonthsAside } from "../components/calendar-months-aside/calendar-months-aside";
import { DayDetailsSection } from '../components/day-details-section/day-details-section';
import { FastingLegendAside } from '../components/fasting-legend-aside/fasting-legend-aside';

@Component({
  selector: 'app-calendar-page',
  imports: [CalendarHeader, CalendarTodaySection, CalendarMonthsAside, DayDetailsSection, FastingLegendAside],
  templateUrl: './calendar-page.html',
  styleUrl: './calendar-page.scss',
})
export class CalendarPage {

}
