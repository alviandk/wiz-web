import { fromQueryString, fromUrlFragment, fromHeader, fromCookies } from './metadata/extractor'

export const useMetadataExtractor = () => ({
  fromQueryString,
  fromUrlFragment,
  fromCookies,
  fromHeader,
})

export { default as useFlashData } from './metadata/flash'
// eslint-disable-next-line import/no-cycle
export { useTokenExtractor, useTokenData } from './metadata/token'
export { useLocaleExtractor, useLocaleData } from './metadata/locale'
