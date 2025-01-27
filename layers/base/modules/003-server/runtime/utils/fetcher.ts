/**
 * NOTE
 * Code "import { $fetch } from 'ofetch'" was to prevent Error "$fetch is not defined".
 * This issue https://github.com/nuxt/nuxt/issues/23848 was resolved, but we added to failsafe only.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
import { $fetch } from 'ofetch' // this installed by Nuxt not directly defined in package.json
import type {
  FetchEndpoint,
  createFetcherFn,
  FetcherMode,
  FetcherError,
  FetcherOptions,
  Fetcher,
} from './fetcher.types'
import { createFrontendError } from './frontend'
import { __stderr } from './logger'

const createFetchError =
  (type: FetcherMode): FetcherError =>
  (fetchContext, apiContext, data) => {
    const statusCode = data?.status ?? 500
    const payloadData = type === 'response' ? fetchContext.response?._data : data?.payload

    __stderr({
      context: `${type}:${apiContext}`,
      error: fetchContext.error,
      payload: {
        // eslint-disable-next-line sonarjs/no-base-to-string
        api: fetchContext.request.toString(),
        method: fetchContext.options.method,
        headers: fetchContext.options.headers,
        queries: fetchContext.options.query,
        payload: payloadData,
      },
    })

    return createFrontendError(apiContext, statusCode)
  }

export const createFetchErrorRequest = createFetchError('request')

export const createFetchErrorResponse = createFetchError('response')

const defaultFetcher = $fetch.create({
  baseURL: (useRuntimeConfig()?.endpoint as FetchEndpoint)?.api ?? undefined,
})

export const createFetcher: createFetcherFn = (options) => $fetch.create(options)

export const $get = <T = any>(uri: string, options?: FetcherOptions, fetcher?: Fetcher) =>
  (fetcher ?? defaultFetcher)(uri, {
    ...options,
    method: 'GET',
  }) as Promise<T>

export const $post = <T = any>(uri: string, options?: FetcherOptions, fetcher?: Fetcher) =>
  (fetcher ?? defaultFetcher)(uri, {
    ...options,
    method: 'POST',
  }) as Promise<T>

export const $put = <T = any>(uri: string, options?: FetcherOptions, fetcher?: Fetcher) =>
  (fetcher ?? defaultFetcher)(uri, {
    ...options,
    method: 'PUT',
  }) as Promise<T>

export const $patch = <T = any>(uri: string, options?: FetcherOptions, fetcher?: Fetcher) =>
  (fetcher ?? defaultFetcher)(uri, {
    ...options,
    method: 'PATCH',
  }) as Promise<T>

export const $delete = <T = any>(uri: string, options?: FetcherOptions, fetcher?: Fetcher) =>
  (fetcher ?? defaultFetcher)(uri, {
    ...options,
    method: 'DELETE',
  }) as Promise<T>
