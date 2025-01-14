import type { ModuleOptions } from 'nuxt-security'
import corsHandler from './cross-origin-resource-sharing'
import contentSecurityPolicy from './content-security-policy'
import permissionsPolicy from './permissions-policy'
import strictTransportSecurity from './strict-transport-security'
import allowedMethodsRestricter from './request-method-limiter'
import requestSizeLimiter from './request-size-limiter'
import rateLimiter from './request-rate-limiter'

export default {
  enabled: true,
  hidePoweredBy: true,

  // Request limiter
  allowedMethodsRestricter,
  requestSizeLimiter,
  rateLimiter,

  // CSRF: Cross-Site Request Forgery, an attack that forces an end user to execute unwanted
  // actions on a web application in which they're currently authenticated
  csrf: false,

  // CORS: Allows a server to indicate any origins other than its own from which a browser
  // should permit loading resources
  corsHandler,

  // Enable SRI (Subresource Integrity); A security feature that enables browsers to verify
  // that resources they fetch (for example, from a CDN) are delivered without unexpected
  // manipulation.
  sri: true,

  // Enable CSP nonce
  nonce: true,

  // Security related headers
  headers: {
    // CORP: Protect against certain requests from other origins.
    crossOriginResourcePolicy: 'same-origin',

    // COOP: Ensure a top-level document does not share a browsing context group with cross-origin documents.
    crossOriginOpenerPolicy: 'same-origin',

    // COEP: Prevent a document from loading certain cross-origin resources.
    crossOriginEmbedderPolicy: false,

    // CSP: Prevent unwanted content from being injected in your app.
    contentSecurityPolicy,

    // Browser API Features: Decide what API's the site can access.
    permissionsPolicy,

    // HSTS: Informs browsers that the site should only be accessed using HTTPS
    strictTransportSecurity,

    // Others
    referrerPolicy: 'strict-origin-when-cross-origin',
    originAgentCluster: '?1',
    xContentTypeOptions: 'nosniff',
    xDNSPrefetchControl: 'off',
    xDownloadOptions: 'noopen',
    xFrameOptions: 'SAMEORIGIN',
    xPermittedCrossDomainPolicies: 'none',
    xXSSProtection: '1; mode=block',
  },
} as Partial<ModuleOptions>
