export interface CalendarEntry {
  date: string;
  day: number;
  dayOfWeekShort: string;
  dayOfWeek: string;
  oldCalendarDay: number;
  saints: string;
  typikon: string;
  notes?: string[];
}

export interface CalendarMonth {
  month: string;
  oldMonthName: string;
  daysInMonth: number;
  entries: CalendarEntry[];
}

export interface CalendarData {
  year: number;
  months: CalendarMonth[];
}
