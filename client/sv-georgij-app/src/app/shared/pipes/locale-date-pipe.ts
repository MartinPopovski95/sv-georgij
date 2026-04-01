import { Pipe, PipeTransform, inject, LOCALE_ID } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'localeDate'
})
export class LocaleDatePipe implements PipeTransform {

  private datePipe = new DatePipe(inject(LOCALE_ID));

  transform(value: string | Date | null | undefined): string | null {
    return this.datePipe.transform(value, "d MMMM yyyy");
  }
}
