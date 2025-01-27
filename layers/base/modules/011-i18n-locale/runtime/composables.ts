import useLocaleStore from './store'

/**
 * Locale value extraction.
 */
export const useLocaleExtractor = () => {
  const { fromCookies, fromHeader, fromQueryString } = useValueExtractor()

  /**
   * Get user defined locale if available, otherwise get using composable `useI18n().fallbackLocale`.
   * Package `@nuxtjs/i18n` must be installed and configured before using this composable.
   * Support both SSR and SPA.
   *
   * @param value Required
   * @param preConditionalResult Optional, default `true`
   */
  function userOrFallbackLocale(value: any, preConditionalResult = true) {
    const { isString } = useValueCheck()
    const { locales, fallbackLocale } = useI18n()
    const localeCodes = locales.value.map(({ code }) => code)
    const defaultValue = fallbackLocale.value as string
    const isValid = isString(value) && localeCodes.includes(value as string)

    return preConditionalResult && isValid ? value : defaultValue
  }

  function localeFromQueryString(parameterName = 'lang', defaultValue: string | undefined = undefined) {
    return fromQueryString(parameterName, defaultValue)
  }

  /**
   * Get locale from Cookies.
   * Support SSR only.
   *
   * @param parameterName Optional, default `lang`
   * @param defaultValue Optional, default `undefined`
   */
  function localeFromCookies(parameterName = 'lang', defaultValue: string | undefined = undefined) {
    return fromCookies(parameterName, defaultValue)
  }

  /**
   * Get locale from HTTP request header.
   * Support SSR only.
   *
   * @param parameterName Optional, default `lang`
   * @param defaultValue Optional, default `undefined`
   */
  function localeFromHeader(parameterName = 'lang', defaultValue: string | undefined = undefined) {
    return fromHeader(parameterName, defaultValue)
  }

  /**
   * Get locale value (by order) from HTTP request header, Cookies, or URL query string (`?key=value`).
   * Support SSR and SPA.
   *
   * @param parameterName Optional, default `lang`
   */
  function detectLocale(parameterName = 'lang') {
    const localeValue =
      localeFromHeader(parameterName) ?? // very secure
      localeFromCookies(parameterName) ?? // secure
      localeFromQueryString(parameterName) // least secure

    return userOrFallbackLocale(localeValue)
  }

  return {
    localeFromQueryString,
    localeFromCookies,
    localeFromHeader,
    detectLocale,
  }
}

/**
 * Locale value extraction and state management.
 */
export const useLocaleData = () => {
  /**
   * Get locale value using composable `useLocaleExtractor().detectLocale()` and save it to Pinia store.
   *
   * @param parameterName Optional, default `lang`
   */
  function initLocale(parameterName = 'lang'): boolean {
    const locale = useLocaleExtractor().detectLocale(parameterName)

    return useLocaleStore().changeLocale(locale)
  }

  /**
   * Get token value from Pinia store.
   */
  function currentLocale() {
    return useLocaleStore().locale
  }

  return {
    initLocale,
    currentLocale,
  }
}
