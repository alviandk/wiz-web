export type Nullable<T> = T | null | undefined

export namespace BE {
  export type Response<D = null, M = unknown> = {
    status: number
    error: boolean
    message: string
    data: Nullable<D>
    meta?: Nullable<M>
  }
}
