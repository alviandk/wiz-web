import type { H3Event } from 'h3'

export namespace Route {
  type CheckType = 'start' | 'contain' | 'end'

  export type checkUri = (uri: string, check: CheckType, str: string) => boolean
  export type inside = (event: H3Event, routes: string[], check: CheckType) => boolean
  export type has = (event: H3Event, check: CheckType, str: string) => boolean
  export type isClient = (event: H3Event) => boolean
  export type isServer = (event: H3Event) => boolean
}

export const checkRouteUri: Route.checkUri = (uri, check, str) => {
  switch (check) {
    case 'start':
      return uri.startsWith(str)
    case 'contain':
      return uri.indexOf(str) > 0
    case 'end':
      return uri.endsWith(str)
    default:
      return false
  }
}

export const inRoute: Route.inside = (event, routes, check) => {
  const uri = getRequestURL(event).pathname || ''

  for (let i = 0; i < routes.length; i += 1) {
    if (checkRouteUri(uri, check, routes.at(i) as string)) return true
  }

  return false
}

export const hasRoute: Route.has = (event, check, str) => {
  const uri = getRequestURL(event).pathname || ''

  return checkRouteUri(uri, check, str)
}

export const isServerRoute: Route.isServer = (event) => hasRoute(event, 'start', '/api')

export const isClientRoute: Route.isClient = (event) => !isServerRoute(event)
