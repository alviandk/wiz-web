import _isEmpty from 'lodash-es/isEmpty'
import _isString from 'lodash-es/isString'
import _isNumber from 'lodash-es/isNumber'

export const isNil = (value: any) => [undefined, null].includes(value)
export const isNull = (value: any) => value === null
export const isUndef = (value: any) => value === undefined
export const isEmpty = (value: any) => isNil(value) || _isEmpty(value)
export const isNumber = (value: any) => _isNumber(value)
export const isNumeric = (value: any) => Number.isNaN(value) || _isNumber(value)
export const isString = (value: any, lmin: number = 0) => _isString(value) && value.length >= lmin
export const isArray = (value: any) => Array.isArray(value)
export const isNonEmptyString = (value: any) => isString(value, 1)
export const isNonEmptyArray = (value: any) => Array.isArray(value) && value.length >= 1
