import type { RequestSizeLimiter } from 'nuxt-security'

export default {
  maxRequestSizeInBytes: 2000000, // 2 MB
  maxUploadFileRequestInBytes: 8000000, // 8 MB
} as RequestSizeLimiter
