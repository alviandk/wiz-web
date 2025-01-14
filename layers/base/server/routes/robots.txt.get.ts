import { ROBOTS_FILE_ENTRY } from '../constants/robots'

interface Rules {
  userAgents?: Array<string>
  disallows?: Array<string>
  allows?: Array<string>
  sitemap?: string
}

const buildRobotFileEntries = (rules: Rules): Array<string> => {
  const robotsFileEntries: Array<string> = []
  const isValidArray = (value: any) => Array.isArray(value) && value.length >= 1

  if (rules.userAgents && isValidArray(rules.userAgents)) {
    robotsFileEntries.push(`${ROBOTS_FILE_ENTRY.USER_AGENT}: ${rules.userAgents.join(', ').trim()}`)
  }

  if (rules.disallows && isValidArray(rules.disallows)) {
    rules.disallows.forEach((disallow) => {
      const value = disallow.trim()

      if (value.length >= 1) {
        robotsFileEntries.push(`${ROBOTS_FILE_ENTRY.DISALLOW}: ${value}`)
      }
    })
  }

  if (rules.allows && isValidArray(rules.allows)) {
    rules.allows.forEach((allow) => {
      const value = allow.trim()

      if (value.length >= 1) {
        robotsFileEntries.push(`${ROBOTS_FILE_ENTRY.ALLOW}: ${value}`)
      }
    })
  }

  if (typeof rules.sitemap === 'string' && rules.sitemap.length >= 1) {
    robotsFileEntries.push(`${ROBOTS_FILE_ENTRY.USER_AGENT}: ${rules.sitemap.trim()}`)
  }

  return robotsFileEntries
}

export default defineEventHandler((event) => {
  const isCrawlable = isSiteCrawlable(event)
  const { robotSitemap } = useRuntimeConfig(event)

  const rules: Rules = {
    userAgents: ['*'],
    disallows: isCrawlable ? [] : ['/'],
    allows: isCrawlable ? ['/'] : [],
    sitemap: robotSitemap ?? '',
  }

  setHeader(event, 'Content-Type', 'text/plain')

  return buildRobotFileEntries(rules).join('\n')
})
