/**
 * Depends on:
 *  - package @nuxtjs/google-fonts
 *  - package @nuxtjs/fontaine
 */

import { defineNuxtModule, installModule } from 'nuxt/kit'
import type { ModuleOptions as NuxtGoogleFontOptions } from '@nuxtjs/google-fonts'
import type { ModuleOptions as NuxtFountaineOptions } from '@nuxtjs/fontaine'

export interface WebFontOptions {
  families: Array<string> | Pick<NuxtGoogleFontOptions, 'families'>
}

export default defineNuxtModule<WebFontOptions>({
  meta: {
    name: 'feature:web-font',
    configKey: 'webfont',
  },
  defaults: {
    families: [],
  },
  setup(moduleOptions) {
    const fontFamilies = moduleOptions.families
    const fontNames: Array<string> = Array.isArray(fontFamilies)
      ? fontFamilies.map((family) => family.split(':')[0])
      : Object.keys(fontFamilies)

    // https://github.com/nuxt-community/google-fonts-module
    installModule('@nuxtjs/google-fonts', {
      families: {
        Manrope: [400, 500, 600, 700, 800],
      },
      // families: Array.isArray(fontFamilies)
      //   ? Object.fromEntries(fontFamilies.map((family) => [family, true]))
      //   : fontFamilies,
    } as NuxtGoogleFontOptions)

    // https://github.com/nuxt-modules/fontaine
    installModule('@nuxtjs/fontaine', {
      fonts: fontNames,
    } as NuxtFountaineOptions)
  },
})
