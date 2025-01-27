import type { CorsOptions } from 'nuxt-security'

export default {
  origin: '*',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflight: {
    statusCode: 204,
  },
} as CorsOptions
