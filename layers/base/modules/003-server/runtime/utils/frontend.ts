import type { ErrorFn, ResponseFn } from './frontend.types'

export const createFrontendError: ErrorFn = (context, status, options = {}) =>
  createError({
    ...options,
    statusCode: status ?? 500,
    message: options?.message ?? `e.${context}.${status ?? 500}`,
  })

export const createFrontendResponse: ResponseFn = (event, context, status, payload) => {
  setResponseStatus(event, status)

  return {
    error: [4, 5].includes(Math.round(status / 100)), // 4xx - 5xx
    code: `${context}.${status}`,
    data: payload,
  }
}
