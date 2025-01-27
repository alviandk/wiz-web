import type { FetchOptions, FetchContext, $Fetch } from 'ofetch'
import type { H3Error } from 'h3'

export interface EndpointRecord extends Record<string, any> {
  api: any
}

export type FetchEndpoint = EndpointRecord | undefined

export type FetcherMode = 'request' | 'response'

export type FetcherError = (
  fetchContext: FetchContext,
  apiContext: string,
  data?: { status?: number; payload?: any },
) => H3Error

export type createFetcherFn = (options: FetchOptions) => $Fetch

// export type FetcherFn = <T = any>(uri: string, options?: FetchOptions, fetcher?: $Fetch) => Promise<T>

export type FetcherOptions = FetchOptions
export type Fetcher = $Fetch
