import { type IResponseLogin, handleResponseLogin } from '~/server/types/auth'

const API_CONTEXT = '/auth/distributor/signin.post'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const response = await $post<IResponseLogin>('/distributor/login', {
      body,
      onRequestError(context) {
        throw createFetchErrorRequest(context, API_CONTEXT)
      },
      onResponseError(context) {
        throw createFetchErrorResponse(context, API_CONTEXT)
      },
    })

    return handleResponseLogin(response)
  } catch (error) {
    __stderr(error)

    return error
  }
})
