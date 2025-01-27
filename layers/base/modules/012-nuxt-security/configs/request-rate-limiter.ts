import type { RateLimiter } from 'nuxt-security'

export default {
  interval: 60000, // 1 minute
  tokensPerInterval: 60, // max request in interval per IP address
  headers: true,
} as RateLimiter
