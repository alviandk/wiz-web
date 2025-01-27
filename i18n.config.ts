import { fallbackLocale } from './i18n'

// https://vue-i18n.intlify.dev/api/general.html#createi18n
export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale,
}))
