import type { AllowedHTTPMethods } from 'nuxt-security'

export default {
  methods: ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  throwError: true,
} as AllowedHTTPMethods
