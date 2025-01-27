import type { H3Error, H3Event } from 'h3'

export interface Response<T> {
  error: boolean
  code: string
  data: T | null | undefined
}

export type ErrorFn = (
  context: string,
  status: number,
  options?: Partial<H3Error> & {
    status?: number
    statusText?: string
  },
) => H3Error

export type ResponseFn = <T = any>(
  event: H3Event,
  context: string,
  status: number,
  payload: T,
) => Response<T | typeof payload>
