import type { LocaleObject } from '@nuxtjs/i18n'

export const fallbackLocale = 'id'

export const availableLocales: Array<LocaleObject> = [
  {
    code: 'id',
    iso: 'id-ID',
    file: 'id.json',
    name: 'Bahasa Indonesia',
  },
  {
    code: 'en',
    iso: 'en-US',
    file: 'en.json',
    name: 'English',
  },
]
