import type { H3Event } from 'h3'
import type { InspectAuthorizationValue } from './authorization-common'

export type InspectAuthorizationHeader = (event: H3Event) => InspectAuthorizationValue.Methods

export const inspectAuthorizationHeader = (event: H3Event) => {
  const authorization = getRequestHeader(event, 'Authorization')

  return inspectAuthorizationValue(authorization)
}
