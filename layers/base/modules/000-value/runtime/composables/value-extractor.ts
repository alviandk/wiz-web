/**
 * Get value from URL query string (`?key=value`).
 * Support both SSR and SPA.
 *
 * @param parameterName Required
 * @param defaultValue Optional, default `undefined`
 */
export function fromQueryString(parameterName: string, defaultValue: string | undefined = undefined) {
  const value = useRequestURL().searchParams.get(parameterName)

  return value ?? defaultValue
}

/**
 * Get value from URL fragment (`#`).
 * Support both SSR and SPA.
 *
 * @param parameterName Required
 * @param defaultValue Optional, default `undefined`
 */
export function fromUrlFragment(parameterName: string, defaultValue: string | undefined = undefined) {
  const { hash } = useRequestURL()
  const delimiter = '='
  const delimiterLength = delimiter.length
  const parameterLength = parameterName.length

  if (typeof hash === 'string' && hash.length > parameterLength + delimiterLength) {
    const delimiterPosition = hash.indexOf(delimiter)
    const isParameterValid = hash.substring(1, delimiterPosition) === parameterName
    const value = hash.substring(delimiterPosition + delimiterLength)

    return isParameterValid ? value : defaultValue
  }

  return defaultValue
}

/**
 * Get value from Cookies.
 * Support SSR only.
 *
 * @param parameterName Required
 * @param defaultValue Optional, default `undefined`
 */
export function fromCookies(parameterName: string, defaultValue: string | undefined = undefined) {
  const value = import.meta.env.SSR ? useCookie(parameterName).value : defaultValue

  return value ?? defaultValue
}

/**
 * Get value from HTTP request header.
 * Support SSR only.
 *
 * @param parameterName Required
 * @param defaultValue Optional, default `undefined`
 */
export function fromHeader(parameterName: string, defaultValue: string | undefined = undefined) {
  if (import.meta.env.SSR) {
    const lowerCaseParameterName = parameterName.toLowerCase() as Lowercase<string>
    const value = useRequestHeaders([lowerCaseParameterName])[`${lowerCaseParameterName}`]

    return value ?? defaultValue
  }

  return defaultValue
}
