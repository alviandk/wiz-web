import * as universalValue from '~/universals/value'
// eslint-disable-next-line import/no-cycle
import { useLocaleData } from './metadata'

/**
 * Just shortcut from imported universal utilites from `universals/value`
 */
export const useValueData = () => universalValue

/**
 * Just shortcut for `$dayjs` and `$dayjsTz` from composable `useNuxtApp()`
 */
export const useDayjs = () => {
  const { $dayjs, $dayjsTz } = useNuxtApp()

  return {
    dayjs: $dayjs,
    dayjsTz: $dayjsTz,
  }
}

export const useSeo = (param?: { title?: string }) => {
  const { currentLocale } = useLocaleData()

  const locale = currentLocale()
  const { t } = useI18n()

  useHead({
    htmlAttrs: {
      lang: locale,
    },
  })

  useSeoMeta({
    title: param?.title ?? `${t('site.title')}`,
    description: `${t('site.description')}`,
    ogDescription: t('site.description'),
    keywords: t('site.keywords'),
    ogTitle: t('site.title'),
    ogImage: 'images/logo.png',
    ogImageType: 'image/png',
    ogImageAlt: 'logo',
    ogImageWidth: '300',
    ogImageHeight: '300',
  })
}
