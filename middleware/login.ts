import { IS_LOGIN } from '~/constants/cookies'

// eslint-disable-next-line sonarjs/function-return-type
export default defineNuxtRouteMiddleware(() => {
  const token = useCookie(IS_LOGIN)

  if (token.value) {
    return navigateTo('/dashboard')
  }
})
