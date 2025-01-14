import type { H3Event } from 'h3'

export const isSiteCrawlable = (event: H3Event) => {
  const { crawlable } = useRuntimeConfig(event)

  return [true, 1, '1'].includes(crawlable)
}

export const isRouteNeedRobotHeader = (event: H3Event) => {
  const uri: string = getRequestURL(event).pathname || ''

  return !(uri.startsWith('/api') || uri === '/robots.txt')
}
