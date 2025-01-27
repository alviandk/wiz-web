/* eslint-disable no-param-reassign */
/**
 * Depends on:
 *  - module feature:value
 *
 * Provide env:
 *  - NUXT_DEBUG_CONTEXTS
 *  - NUXT_ENDPOINT_API
 *
 * Provide utilities for server
 */

import { defineNuxtModule, createResolver, addServerImportsDir } from 'nuxt/kit'
import type { EndpointRecord } from './runtime/utils/fetcher.types'

export default defineNuxtModule({
  meta: {
    name: 'feature:server',
  },
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url)

    // used in logger.ts
    nuxt.options.runtimeConfig.debug = {
      contexts: undefined,
    }

    // used in fetcher.ts
    nuxt.options.runtimeConfig.endpoint = {
      api: undefined,
    } as EndpointRecord

    addServerImportsDir(resolver.resolve('./runtime/utils'))
  },
})
