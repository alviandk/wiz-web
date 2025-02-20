import { type IResponseMyProfile, getResponseMyProfile } from '~/server/types/auth'

const API_CONTEXT = '/auth/distributor/profile.get'

export default defineEventHandler(async (event) => {
  try {
    const response = await $get<IResponseMyProfile>('/distributor/profile', {
      headers: {
        Authorization: await getSessionAuth(event),
      },
      onRequestError(context) {
        throw createFetchErrorRequest(context, API_CONTEXT)
      },
      onResponseError(context) {
        throw createFetchErrorResponse(context, API_CONTEXT)
      },
    })

    return getResponseMyProfile(response)
  } catch (error) {
    return error
  }
})
