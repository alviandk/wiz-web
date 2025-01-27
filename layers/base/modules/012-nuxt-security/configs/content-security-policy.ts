/* eslint-disable sonarjs/new-cap */
import type { ContentSecurityPolicyValue } from 'nuxt-security'
import { CSP } from '../constants'

export default {
  // Instructs user agents to treat all of a site's insecure URLs (those served over HTTP)
  // as though they have been replaced with secure URLs (those served over HTTPS).
  'upgrade-insecure-requests': true,

  /*
    CSP Document Directives
    Govern the properties of a document or worker environment to which a policy applies.
  */

  // Restricts the URLs which can be used in a document's <base> element.
  'base-uri': [CSP.SELF],

  // Enables a sandbox for the requested resource similar to the <iframe> sandbox attribute.
  sandbox: undefined,

  /*
    CSP Fetch Directives
    Control the locations from which certain resource types may be loaded.
  */

  // Serves as a fallback for the other fetch directives.
  'default-src': [CSP.SELF, CSP.UNSAFE_INLINE, CSP.SCHEMES(['https:'])],

  // Restricts the URLs which can be loaded using script interfaces.
  'connect-src': [CSP.SELF, CSP.SCHEMES(['https:', 'http:', 'ws:'])],

  // Specifies valid sources for fonts loaded using @font-face.
  'font-src': [CSP.SELF, CSP.SCHEMES(['https:', 'data:'])],

  // Specifies valid sources for nested browsing contexts loading using elements such as <frame> and <iframe>.
  'frame-src': [CSP.SELF, CSP.SCHEMES(['https:'])],

  // Specifies valid sources of images and favicons.
  'img-src': [CSP.SELF, CSP.SCHEMES(['https:', 'data:', 'blob:'])],

  // Specifies valid sources of application manifest files.
  'manifest-src': [CSP.SELF],

  // Specifies valid sources for loading media using the <audio> , <video> and <track> elements.
  'media-src': [CSP.NONE],

  // Specifies valid sources for the <object> and <embed> elements.
  'object-src': [CSP.NONE],

  // Specifies valid sources for JavaScript and WebAssembly resources.
  'script-src': [CSP.NONCE, CSP.STRICT_DYNAMIC, CSP.SELF, CSP.SCHEMES(['https:'])],

  // Specifies valid sources for JavaScript <script> elements.
  'script-src-elem': [CSP.SELF, CSP.UNSAFE_INLINE, CSP.SCHEMES(['https:'])],

  // Specifies valid sources for JavaScript inline event handlers.
  'script-src-attr': [CSP.SELF, CSP.UNSAFE_INLINE],

  // Specifies valid sources for stylesheets.
  'style-src': [CSP.NONCE, CSP.SELF, CSP.UNSAFE_INLINE, CSP.SCHEMES(['https:'])],

  // Specifies valid sources for stylesheets <style> elements and <link> elements with rel="stylesheet".
  'style-src-elem': [CSP.SELF, CSP.UNSAFE_INLINE, CSP.SCHEMES(['https:'])],

  // Specifies valid sources for inline styles applied to individual DOM elements.
  'style-src-attr': [CSP.SELF, CSP.UNSAFE_INLINE],

  // Specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts.
  'worker-src': [CSP.SELF, CSP.SCHEMES(['https:', 'blob:'])],

  /*
    Navigation Directives
    Govern to which locations a user can navigate or submit a form, for example.
  */

  // Restricts the URLs which can be used as the target of a form submissions from a given context.
  'form-action': [CSP.SELF],

  // Specifies valid parents that may embed a page using <frame>, <iframe>, <object>, or <embed>.
  'frame-ancestors': [CSP.SELF],
} as ContentSecurityPolicyValue
