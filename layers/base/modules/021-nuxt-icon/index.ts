/**
 * Depends on:
 *  - package/module nuxt-icon
 *
 * Provide utilities:
 *  - createNuxtIcon
 */

import { defineNuxtModule, createResolver, installModule, addImportsDir } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'feature:nuxt-icon',
  },
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url)

    // https://github.com/nuxt-modules/icon
    installModule('nuxt-icon')

    // eslint-disable-next-line no-param-reassign
    nuxt.options.appConfig.nuxtIcon = {
      size: '1em',
      class: 'icon',
    }

    addImportsDir(resolver.resolve('./runtime/utils'))
  },
})
