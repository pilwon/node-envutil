import * as moment from 'moment';
const _toBoolean = require('underscore.string/toBoolean');
const _toNumber = require('underscore.string/toNumber');

export function toBoolean(value: string): boolean {
  return _toBoolean(value);
}

export function toDate(value: string, format?: string, strict?: boolean): Date {
  const m = moment(value, format, strict);
  return m.isValid() ? m.toDate() : null;
}

export function toNumber(value: string): number {
  return _toNumber(value);
}
