export { JalaliDateTimeOptions } from './interface/options';
export { JalaliDateTimeConfig } from './interface/config';
export { JalaliDateTimeObject } from './interface/object';
export { JalaliDateTimeCalendar, JalaliDateTimeCalendarDay } from './interface/calendar';
export { JalaliDateTimeGregorian } from './interface/gregorian';
export { JalaliDateTimePeriod } from './interface/period';
import { JalaliDateTimeOptions } from './interface/options';
export declare const JalaliDateTime: (options?: JalaliDateTimeOptions) => {
    now: (config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toDate: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toTime: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toString: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toTitle: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toFullText: (date: Date, config?: import("./interface/config").JalaliDateTimeConfig | undefined) => string;
    toObject: (date: Date, timezone?: string | undefined) => import("./interface/object").JalaliDateTimeObject;
    daysInMonth: (month?: string | undefined) => number;
    calendar: (month?: string | undefined) => import("./interface/calendar").JalaliDateTimeCalendar;
    gregorian: (jalali: string) => import("./interface/gregorian").JalaliDateTimeGregorian;
    timezones: () => string[];
    nextDay: (day: number, date?: Date | undefined, timezone?: string | undefined) => Date;
    nextMonth: (day: number | "FIRST" | "LAST", date?: Date | undefined, timezone?: string | undefined) => Date;
    nextYear: (date?: Date | undefined, timezone?: string | undefined) => Date;
    periodHour: (hours: number, date?: Date | undefined, timezone?: string | undefined) => import("./interface/period").JalaliDateTimePeriod;
    periodDay: (days: number, date?: Date | undefined, timezone?: string | undefined) => import("./interface/period").JalaliDateTimePeriod;
    periodWeek: (weeks: number, date?: Date | undefined, timezone?: string | undefined) => import("./interface/period").JalaliDateTimePeriod;
    periodMonth: (months: number, date?: Date | undefined, timezone?: string | undefined) => import("./interface/period").JalaliDateTimePeriod;
};
//# sourceMappingURL=index.d.ts.map