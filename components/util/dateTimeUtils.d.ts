import dayjs from 'dayjs';
import 'dayjs/plugin/timezone';
import 'dayjs/plugin/localeData';
import 'dayjs/plugin/utc';
import 'dayjs/plugin/customParseFormat';
import 'dayjs/plugin/isoWeek';
import 'dayjs/plugin/weekOfYear';
import 'dayjs/plugin/weekday';
import 'dayjs/plugin/arraySupport';
import 'dayjs/plugin/objectSupport';
import 'dayjs/plugin/isSameOrBefore';
import 'dayjs/plugin/isSameOrAfter';
import 'dayjs/plugin/isBetween';

import { IntlShape } from 'react-intl';

export { dayjs };

export function getMomentLocalizedFormat(intl: IntlShape): string;

/**
 * Returns a localized format.
 * Format will be a string similar to YYYY.MM.DD - something that can be
 * passed to moment for parsing/formatting purposes.
 */
export function getLocaleDateFormat(params: { intl: IntlShape }): string;

/**
 * Accepts a locale like 'ar' or 'de'
 * Gets an array of dayPeriods for 12 hour modes of time. The
 * array items can be used as values for the day period control,
 * and the array length used to determin 12 hour (2 items) or 24 hour mode (0 items).
 *
 * @example
 * getLocalizedTimeFormatInfo('en-SE')
 * // returns:
 *   {
 *     separator: ':',
 *     timeFormat: 'HH:mm',
 *     dayPeriods: [],  // no dayPeriods means 24 hour time format.
 *   }
 * @example
 * getLocalizedTimeFormatInfo('en-US')
 * // returns:
 *   {
 *     separator: ':',
 *     timeFormat: 'HH:mm A',
 *     dayPeriods: ['am', 'pm'], // day periods: 12 hour time format.
 *   }
 */
export function getLocalizedTimeFormatInfo(locale: string | string[]): {
  timeFormat: string;
  dayPeriods: string[];
};

export function removeDST(dateTime: string, timeFormat: string): string;
