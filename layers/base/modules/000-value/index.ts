/**
 * Depends on:
 *  - package lodash-es
 *  - package @types/lodash-es
 *
 * Provide composables:
 *  - useValueExtractor
 *  - useValueCheck
 *  - useValueGuard
 *  - useValueObject
 *  - useAuthUtil
 *
 * Provide utilities for client and server
 */

import { defineNuxtModule, createResolver, addImports, addServerImportsDir } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'feature:value',
  },
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url)

    const composables = resolver.resolve('./runtime/composables/index')
    addImports([
      { from: composables, name: 'useValueExtractor' },
      { from: composables, name: 'useValueCheck' },
      { from: composables, name: 'useValueGuard' },
      { from: composables, name: 'useValueObject' },
      { from: composables, name: 'useAuthUtil' },
    ])

    // eslint-disable-next-line no-param-reassign
    nuxt.options.runtimeConfig.debugContexts = undefined

    addServerImportsDir(resolver.resolve('./runtime/utils'))

    nuxt.options.build.transpile.push('lodash-es')
  },
})
