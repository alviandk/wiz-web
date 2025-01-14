import { availableLocales, fallbackLocale } from './i18n'

export default defineNuxtConfig({
  extends: ['layers/base'],

  /* --- Private/public runtime configs (env. variables) --- */
  runtimeConfig: {},

  /* --- List of loaded modules --- */
  modules: [],

  /* --- Loaded module configs --- */
  i18n: {
    locales: availableLocales,
    defaultLocale: fallbackLocale,
    lazy: true,
    langDir: 'i18n/locales',
  },
  webfont: {
    families: ['Poppins'],
  },
})
