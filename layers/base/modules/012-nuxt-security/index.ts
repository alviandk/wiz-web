/**
 * Depends on:
 *  - package nuxt-security
 */

import { defineNuxtModule, installModule } from 'nuxt/kit'
import type { SecurityHeaders } from 'nuxt-security'
import moduleSecurityConfig from './configs'

export default defineNuxtModule({
  meta: {
    name: 'feature:nuxt-security',
  },
  setup(_, nuxt) {
    nuxt.options.app.head.meta?.push({
      name: 'referrer',
      content: (moduleSecurityConfig.headers as SecurityHeaders).referrerPolicy,
    })

    // https://github.com/baroshem/nuxt-security
    installModule('nuxt-security', moduleSecurityConfig)
  },
})
