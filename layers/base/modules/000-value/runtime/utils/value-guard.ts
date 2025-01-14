import _toNumber from 'lodash-es/toNumber'
import { isString, isNumeric, isArray } from './value-check'

/**
 * Ensure the returned value type is string.
 *
 * @param value The value with uncertain type.
 * @param minimumLength Validate minimum length of string (default: 0)
 * @param defaultValue Default value ('')
 */
export const ensureString = (value: any, minimumLength: number = 0, defaultValue: string = ''): string => {
  if (isString(value, minimumLength)) return value

  return defaultValue
}

/**
 * Ensure the returned value type is number.
 *
 * @param value The value with uncertain type.
 * @param defaultValue Default value (NaN)
 */
export const ensureNumber = (value: any, defaultValue: number = NaN): number => {
  if (isNumeric(value)) return _toNumber(value)

  return defaultValue
}

/**
 * Ensure the returned value type is integer.
 *
 * @param value The value with uncertain type.
 * @param radix The number base system or radix value (default: 10).
 * @param defaultValue Default value (NaN)
 */
export const ensureInteger = (value: any, radix: number = 10, defaultValue: number = NaN): number => {
  if (isNumeric(value)) {
    if (typeof value === 'string' || value instanceof Number) return parseInt(value.toString(), radix)
    if (typeof value === 'number') return parseInt(value.toString(), radix)
  }

  return defaultValue
}

/**
 * Ensure the returned value type is floating point/double/decimal.
 *
 * @param value The value with uncertain type.
 * @param defaultValue Default value (NaN)
 */
export const ensureFloat = (value: any, defaultValue: number = NaN): number => {
  if (isNumeric(value)) {
    if (typeof value === 'string' || value instanceof Number) return parseFloat(value.toString())
    if (typeof value === 'number') return value * 1.0
  }

  return defaultValue
}

/**
 * Ensure the returned value type is array.
 *
 * @param value The value with uncertain type.
 * @param defaultValue Default value ([])
 */
export function ensureArray<T = any>(value: any, defaultValue: Array<T> = []): Array<T> {
  return isArray(value) ? value : defaultValue
}
