export type ReferrerPolicyValue =
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url'

export type Scheme = 'http:' | 'https:' | 'data:' | 'mediastream:' | 'blob:' | 'filesystem:' | 'ws:'

export const CSP = {
  /** Won't allow loading of any resources. */
  NONE: "'none'",

  /** Only allow resources from the current origin. */
  SELF: "'self'",

  /** The trust granted to a script in the page due to an accompanying nonce or hash is extended to the scripts it loads. */
  STRICT_DYNAMIC: "'strict-dynamic'",

  /** Allow use of inline resources. */
  UNSAFE_INLINE: "'unsafe-inline'",

  /** Allow use of dynamic code evaluation such as eval, setTimeout(), and window.execScript Non-standard.
   */
  UNSAFE_EVAL: "'unsafe-eval'",

  /** Allows enabling specific inline event handlers. */
  UNSAFE_HASHES: "'unsafe-hashes'",

  /** nonce template used by nuxt-security module for CSP level 3 with strict-dynamic option */
  NONCE: "'nonce-{{nonce}}'",

  HOSTS: (hosts: Array<string>) => hosts.join(' '),

  SCHEMES: (schemes: Array<Scheme>) => schemes.join(' '),
}
