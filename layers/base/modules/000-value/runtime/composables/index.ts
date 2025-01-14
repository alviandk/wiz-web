import { fromQueryString, fromUrlFragment, fromCookies, fromHeader } from './value-extractor'
import {
  isNil,
  isNull,
  isUndef,
  isEmpty,
  isNumber,
  isNumeric,
  isString,
  isArray,
  isNonEmptyString,
  isNonEmptyArray,
} from '../utils/value-check'
import { ensureString, ensureNumber, ensureInteger, ensureFloat, ensureArray } from '../utils/value-guard'
import { objectHas, objectGet, objectData } from '../utils/value-object'
import { basicAuth, bearerToken, inspectAuthorizationValue } from '../utils/authorization-common'

export const useValueExtractor = () => ({
  fromQueryString,
  fromUrlFragment,
  fromCookies,
  fromHeader,
})

export const useValueCheck = () => ({
  isNil,
  isNull,
  isUndef,
  isEmpty,
  isNumber,
  isNumeric,
  isString,
  isArray,
  isNonEmptyString,
  isNonEmptyArray,
})

export const useValueGuard = () => ({
  ensureString,
  ensureNumber,
  ensureInteger,
  ensureFloat,
  ensureArray,
})

export const useValueObject = () => ({
  objectHas,
  objectGet,
  objectData,
})

export const useAuthUtil = () => ({
  basicAuth,
  bearerToken,
  inspectAuthorizationValue,
})
