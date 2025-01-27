/**
 * Depends on:
 *  - package pinia
 *  - package/module @pinia/nuxt
 *  - module feature:value
 *
 * Provide env:
 *  - NUXT_PUBLIC_TOKEN
 *
 * Provide composables:
 *  - useTokenExtractor
 *  - useTokenData
 */

import { defineNuxtModule, createResolver, addImports, addPlugin } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'feature:token-exchange',
  },
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url)

    // eslint-disable-next-line no-param-reassign
    nuxt.options.runtimeConfig.public.token = undefined

    const composables = resolver.resolve('./runtime/composables')
    addImports([
      { from: composables, name: 'useTokenExtractor' },
      { from: composables, name: 'useTokenData' },
    ])

    addPlugin({
      name: 'token-exchange-init',
      src: resolver.resolve('./runtime/plugin'),
      mode: 'all',
    })
  },
})
