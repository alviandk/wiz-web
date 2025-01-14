/**
 * Depends on:
 *  - package dayjs
 *  - package pinia
 *  - package/module @pinia/nuxt
 *
 * Provide composables:
 *  - useDayjs
 *  - useDayjsFn
 *  - useDayjsTz
 *  - useDayjsTzFn
 */

import { defineNuxtModule, createResolver, addPlugin, addImportsDir, addServerImportsDir } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'feature:dayjs',
  },
  setup() {
    const resolver = createResolver(import.meta.url)

    addPlugin({
      name: 'dayjs-esm',
      src: resolver.resolve('./runtime/plugin'),
      mode: 'all',
    })

    addImportsDir(resolver.resolve('./runtime/composables'))
    addServerImportsDir(resolver.resolve('./runtime/composables'))
  },
})
