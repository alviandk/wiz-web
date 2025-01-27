/**
 * Depends on:
 *  - package/module @nuxtjs/i18n
 *  - module feature:value
 *
 * Provide composables:
 *  - useLocaleExtractor
 *  - useLocaleData
 */

import { defineNuxtModule, createResolver, installModule, addImports, addPlugin } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'feature:i18n-locale',
  },
  setup() {
    const resolver = createResolver(import.meta.url)

    // https://github.com/nuxt-modules/i18n
    installModule('@nuxtjs/i18n', {
      detectBrowserLanguage: false,
      strategy: 'no_prefix',
      vueI18n: './i18n.config.ts',
    })

    const composable = resolver.resolve('./runtime/composables')
    addImports([
      { from: composable, name: 'useLocaleExtractor' },
      { from: composable, name: 'useLocaleData' },
    ])

    addPlugin({
      name: 'i18n-locale-init',
      src: resolver.resolve('./runtime/plugin'),
      mode: 'all',
    })
  },
})
