import { ROBOTS_HEADER, ROBOTS_RESOURCE } from '../constants/robots'

export default defineEventHandler((event) => {
  if (isRouteNeedRobotHeader(event)) {
    const isCrawlable = isSiteCrawlable(event)
    const rules = isCrawlable ? ROBOTS_RESOURCE.ENABLED : ROBOTS_RESOURCE.DISABLED

    setHeader(event, ROBOTS_HEADER, rules)
  }
})
