import { JalaliDateTimeObject } from '../interface/object';

import * as JDate from '../script/date';
import * as JDT from '../script/jdt';

export const toObject = (date: Date, timezone?: string): JalaliDateTimeObject => {
    if (!JDate.checkDate(date)) throw new TypeError('Invalid Date');
    if (!JDate.checkTimezone(timezone || '')) timezone = JDT.timezone();

    const value = JDate.getMoment(date, timezone);
    return JDate.toJalali(JDate.toObject(value));
};
