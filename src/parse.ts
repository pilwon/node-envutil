import { toBoolean, toDate, toNumber } from './util';

export interface ParseOptions {
  ensure?: boolean;
}

export interface ParseBooleanOptions extends ParseOptions {
}

export interface ParseDateOptions extends ParseOptions {
  format?: string;
  strict?: boolean;
}

export interface ParseNumberOptions extends ParseOptions {
}

export interface ParseStringOptions extends ParseOptions {
}

export function parseEnv(name: string, options: ParseOptions = {}) {
  const value = process.env[name];
  if (value === undefined && options.ensure) {
    throw new Error(`missing envvar - ${name}`);
  }
  return value;
}

export function parseBoolean(name: string, options: ParseBooleanOptions = {}): boolean {
  const value = parseEnv(name, options);
  return toBoolean(value);
}

export function parseDate(name: string, options: ParseDateOptions = {}): Date {
  const value = parseEnv(name, options);
  return toDate(value);
}

export function parseNumber(name: string, options: ParseNumberOptions = {}): number {
  const value = parseEnv(name, options);
  return toNumber(value);
}

export function parseString(name: string, options: ParseStringOptions = {}): string {
  const value = parseEnv(name, options);
  return value;
}
