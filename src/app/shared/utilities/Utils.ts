import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export default class Utils {

  static transformDateStructToDate(dateStruct: NgbDateStruct): Date | null {
    if (!dateStruct) {
      return null;
    }

    return new Date(
      dateStruct.year,
      dateStruct.month - 1,
      dateStruct.day
    );
  }

  static daysBetween(startDate: Date, endDate: Date): number {
    if (!startDate || !endDate) {
      return null;
    }

    // The number of milliseconds in all UTC days (no DST)
    const oneDay = 1000 * 60 * 60 * 24;

    // A day in UTC always lasts 24 hours (unlike in other time formats)
    const start = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    const end = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

    // so it's safe to divide by 24 hours
    return (start - end) / oneDay;
  }

}
