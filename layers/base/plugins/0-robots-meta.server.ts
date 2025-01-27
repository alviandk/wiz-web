import { ROBOTS_RESOURCE } from '../server/constants/robots'

export default defineNuxtPlugin(() => {
  const { crawlable } = useRuntimeConfig()
  const isCrawlable = [true, 1, '1'].includes(crawlable)

  useHead({
    meta: [
      {
        name: 'robots',
        content: isCrawlable ? ROBOTS_RESOURCE.ENABLED : ROBOTS_RESOURCE.DISABLED,
      },
    ],
  })
})
