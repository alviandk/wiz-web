import _get from 'lodash-es/get'
import _has from 'lodash-es/has'
import { ensureString, ensureNumber, ensureInteger, ensureFloat, ensureArray } from './value-guard'

export const objectHas = _has
export const objectGet = _get

export const objectData = <T = any>(obj: T) => ({
  has(path: string) {
    return _has(obj, path)
  },
  get(path: string, defaultValue = undefined) {
    return _get(obj, path, defaultValue) ?? defaultValue
  },
  getString(path: string, minimumLength: number = 0, defaultValue = '') {
    return ensureString(_get(obj, path), minimumLength, defaultValue)
  },
  getNumber(path: string, defaultValue = NaN) {
    return ensureNumber(_get(obj, path), defaultValue)
  },
  getInteger(path: string, radix: number = 10, defaultValue = NaN) {
    return ensureInteger(_get(obj, path), radix, defaultValue)
  },
  getFloat(path: string, defaultValue = NaN) {
    return ensureFloat(_get(obj, path), defaultValue)
  },
  getArray<A>(path: string, defaultValue: Array<A> = []): Array<A> {
    return ensureArray(_get(obj, path), defaultValue)
  },
})
