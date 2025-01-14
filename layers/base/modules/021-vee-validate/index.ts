/**
 * Depends on:
 *  - package vee-validate
 *  - package/module @vee-validate/nuxt
 */

import { defineNuxtModule, installModule } from 'nuxt/kit'
import type { VeeValidateNuxtOptions } from '@vee-validate/nuxt'

export default defineNuxtModule({
  meta: {
    name: 'feature:vee-validate',
  },
  setup() {
    // https://vee-validate.logaretm.com/v4/integrations/nuxt
    installModule('@vee-validate/nuxt', {
      autoImports: true,
    } as VeeValidateNuxtOptions)
  },
})
