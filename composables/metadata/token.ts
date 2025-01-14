// eslint-disable-next-line import/no-cycle
import useTokenStore from '~/stores/metadata/token'
import { isString } from '~/universals/value'
import { TOKEN } from '~/constants/cookies'
import { fromCookies, fromHeader, fromUrlFragment } from './extractor'

/**
 * Token value extraction.
 */
export const useTokenExtractor = () => {
  /**
   * Get user defined token if available, otherwise get using composable `useRuntimeConfig()`,
   * and token property had been defined in `runtimeConfig` at nuxt.config.ts, by these conditions:
   *
   * 1. if SSR mode, it will get value from property `token` first if defined, then `public.token`
   * 2. if SPA mode, it will get value from property `public.token`
   *
   * @param value Required
   * @param preConditionalResult Optional, default `true`
   */
  function userOrRuntimeToken(value: any, preConditionalResult = true) {
    const config = useRuntimeConfig()
    const runtimeValue = import.meta.env.SSR
      ? config.token || config.public.token || undefined // SSR
      : config.public.token || undefined // SPA

    return preConditionalResult && isString(value) ? value : runtimeValue
  }

  /**
   * Get token from URL fragment (`#`).
   * Support both SSR and SPA.
   *
   * @param parameterName Optional, default `token`
   * @param defaultValue Optional, default `undefined`
   */
  function tokenFromUrlFragment(parameterName = TOKEN, defaultValue: string | undefined = undefined) {
    return fromUrlFragment(parameterName, defaultValue)
  }

  /**
   * Get token from Cookies.
   * Support SSR only.
   *
   * @param parameterName Optional, default `token`
   * @param defaultValue Optional, default `undefined`
   */
  function tokenFromCookies(parameterName = TOKEN, defaultValue: string | undefined = undefined) {
    return fromCookies(parameterName, defaultValue)
  }

  /**
   * Get token from HTTP request header.
   * Support SSR only.
   *
   * @param parameterName Optional, default `token`
   * @param defaultValue Optional, default `undefined`
   */
  function tokenFromHeader(parameterName = TOKEN, defaultValue: string | undefined = undefined) {
    return fromHeader(parameterName, defaultValue)
  }

  /**
   * Get token value (by order) from HTTP request header, Cookies, or URL fragment (`#`).
   * Support SSR and SPA.
   *
   * @param parameterName Optional, default `token`
   */
  function detectToken(parameterName = TOKEN) {
    const tokenValue =
      tokenFromHeader(parameterName) ?? // very secure
      tokenFromCookies(parameterName) ?? // secure
      tokenFromUrlFragment(parameterName) // least secure

    return userOrRuntimeToken(tokenValue)
  }

  return {
    userOrRuntimeToken,
    tokenFromHeader,
    tokenFromCookies,
    tokenFromUrlFragment,
    detectToken,
  }
}

/**
 * Token value extraction and state management.
 */
export const useTokenData = () => {
  const store = useTokenStore()

  /**
   * Get token value using composable `useTokenExtractor().detectToken()` and save it to Pinia store.
   *
   * @param parameterName Optional, default `token`
   */
  function initToken(parameterName = TOKEN) {
    const { detectToken } = useTokenExtractor()
    const token = detectToken(parameterName)

    return store.setToken(token)
  }

  /**
   * Get token value from Pinia store.
   */
  function currentToken() {
    return store.token
  }

  return {
    initToken,
    currentToken,
  }
}
