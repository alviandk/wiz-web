/**
 * Depends on:
 *  - package pinia
 *  - package/module @pinia/nuxt
 *
 * Provide composables:
 *  - useFlashData
 */

import { defineNuxtModule, createResolver, addImports } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'feature:flash-data',
  },
  setup() {
    const resolver = createResolver(import.meta.url)

    const composables = resolver.resolve('./runtime/composables')
    addImports([{ from: composables, name: 'useFlashData' }])
  },
})
