import type { LocaleObject } from '@nuxtjs/i18n'

export const fallbackLocale = 'id'

export const availableLocales: Array<LocaleObject> = [
  {
    code: 'id',
    language: 'id',
    file: 'id.json',
    name: 'Bahasa Indonesia',
  },
  {
    code: 'en',
    language: 'en',
    file: 'en.json',
    name: 'English',
  },
]
