import { isString } from './value-check'

export const basicAuth = (username: string, password: string) => {
  const value = btoa(`${username}:${password}`)

  return `Basic ${value}`
}

export const bearerToken = (token: string, type: string = 'Bearer') => {
  const tokenType = type.length > 0 ? type : 'Bearer'

  return `${tokenType} ${token}`
}

export namespace InspectAuthorizationValue {
  export interface Methods {
    typeExist: () => boolean
    hasType: (expected: string) => boolean
    getType: () => string | undefined
    hasValue: () => boolean
    getValue: () => string | undefined
    getHeaderValue: () => string | undefined
  }

  export type Fn = (authorization: string | undefined) => Methods
}

export const inspectAuthorizationValue: InspectAuthorizationValue.Fn = (authorization) => {
  const [type, value] = isString(authorization) ? (authorization as string).split(' ') : []

  return {
    typeExist: () => isString(type, 1),
    hasType: (expected: string) => {
      const expectedTypeLength = expected.length
      const strLen = expectedTypeLength > 0 ? expectedTypeLength : 1

      return isString(type, strLen) ? type.toLocaleLowerCase() === expected.toLocaleLowerCase() : false
    },
    getType: () => type,
    hasValue: () => isString(value, 1),
    getValue: () => value,
    getHeaderValue: () => authorization,
  } as InspectAuthorizationValue.Methods
}
