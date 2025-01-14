/* eslint-disable sonarjs/new-cap */
import { compression } from 'vite-plugin-compression2'
import { availableLocales, fallbackLocale } from './i18n'
import { CSP } from './constants/security'

const isDevelopment = process.env.NODE_ENV === 'development'
const fontFamily = 'Manrope'

export default defineNuxtConfig({
  /* --- Private/public runtime configs (env. variables) --- */
  runtimeConfig: {
    debugContexts: undefined,
    crawlable: false,
    robotSitemap: undefined,
    endpoint: {
      api: undefined,
      captcha: undefined,
    },
    captcha: {
      id: undefined,
    },
    public: {
      fallbackLocale,
      token: undefined,
    },
  },

  /* --- Nuxt app configs --- */
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5',
      title: 'App',
      meta: [
        {
          name: 'description',
          content: '',
        },
        {
          name: 'robots',
          content: 'noindex, nofollow, noarchive, nosnippet, notranslate',
        },
        {
          name: 'format-detection',
          content: 'telephone=no,date=no,address=no,email=no,url=no',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: 'favicon-16x16.png',
        },
        // {
        //   rel: 'icon',
        //   type: 'mask-icon',
        //   color: '#5bbad5',
        //   href: '/safari-pinned-tab.svg',
        // },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'favicon.ico',
          sizes: 'any',
        },
      ],
    },
  },

  /* --- List of loaded modules --- */
  modules: [
    '@nuxtjs/eslint-module', // https://github.com/nuxt-modules/eslint
    '@nuxtjs/google-fonts', // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/fontaine', // https://github.com/nuxt-modules/fontaine
    '@nuxtjs/i18n', // https://github.com/nuxt-modules/i18n
    '@vee-validate/nuxt', // https://vee-validate.logaretm.com/v4/integrations/nuxt
    'nuxt-icon', // https://github.com/nuxt-modules/icon
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    'nuxt-security', // https://github.com/baroshem/nuxt-security
    'nuxt-primevue', // https://github.com/primefaces/primevue-nuxt-module
  ],

  /* --- Additional app configs --- */
  appConfig: {
    isDev: isDevelopment,
    // https://github.com/nuxt-modules/icon#configuration-%EF%B8%8F
    nuxtIcon: {
      size: '1em', // default <Icon> size applied
      class: 'icon', // default <Icon> class applied
    },
  },

  /* --- Loaded module configs --- */
  // https://github.com/nuxt-modules/eslint#options
  eslint: {
    lintOnStart: false,
    useEslintrc: true,
    failOnError: true,
  },
  // https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      [fontFamily]: true,
    },
  },
  // https://github.com/nuxt-modules/fontaine#usage
  fontMetrics: {
    fonts: [fontFamily],
  },
  // https://i18n.nuxtjs.org/basic-usage
  i18n: {
    locales: availableLocales,
    lazy: true,
    langDir: 'i18n/locales',
    defaultLocale: fallbackLocale,
    // detectBrowserLanguage: false,
    // strategy: 'no_prefix',
    // vueI18n: './i18n.config.ts',
  },
  // https://vee-validate.logaretm.com/v4/integrations/nuxt/#configuration
  veeValidate: {
    autoImports: true,
  },
  // https://pinia.vuejs.org/ssr/nuxt.html#auto-imports
  pinia: {},
  // https://nuxt-security.vercel.app/getting-started/configuration
  security: {
    enabled: true,
    hidePoweredBy: true,
    csrf: false,
    allowedMethodsRestricter: {
      methods: ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      throwError: true,
    },

    // CORS
    corsHandler: {
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      preflight: {
        statusCode: 204,
      },
    },

    headers: {
      // CORP: Protect against certain requests from other origins.
      crossOriginResourcePolicy: 'same-origin',

      // COOP: Ensure a top-level document does not share a browsing context group with cross-origin documents.
      crossOriginOpenerPolicy: 'same-origin',

      // COEP: Prevent a document from loading certain cross-origin resources.
      crossOriginEmbedderPolicy: false,

      // CSP: Prevent unwanted content from being injected in your app.
      contentSecurityPolicy: {
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
      },

      // Browser API Features: Decide what API's the site can access.
      permissionsPolicy: {
        accelerometer: [],
        autoplay: [],
        camera: [],
        'display-capture': [],
        'encrypted-media': [],
        fullscreen: [],
        gamepad: [],
        geolocation: [],
        gyroscope: [],
        microphone: [],
        magnetometer: [],
        midi: [],
        payment: [],
        'picture-in-picture': ['*'],
        'publickey-credentials-get': [],
        'screen-wake-lock': [],
        usb: [],
        'web-share': ['*'],
        'xr-spatial-tracking': [],
      },

      // STS
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
      },

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
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000, // 2 MB
      maxUploadFileRequestInBytes: 8000000, // 8 MB
    },
    rateLimiter: {
      interval: 60000, // 1 minute
      tokensPerInterval: 60, // max request in interval per IP address
      headers: true,
    },
  },

  /* --- Hooks --- */
  hooks: {},

  /* --- Run/Build --- */
  ssr: true,
  telemetry: false,
  sourcemap: false,
  typescript: {
    shim: false, // enable takeover mode for better DX
    strict: true, // disable sourcemap so the terminal warnings go away
  },
  build: {
    transpile: ['lodash-es', 'primevue'],
  },
  vite: {
    plugins: [
      compression({
        algorithm: 'gzip',
        exclude: [/\.(br|gz|woff|woff2)$/],
        include: [/\.(json)$/],
        skipIfLargerOrEqual: true,
      }),
      compression({
        algorithm: 'brotliCompress',
        exclude: [/\.(br|gz|woff|woff2)$/],
        include: [/\.(json)$/],
        skipIfLargerOrEqual: true,
      }),
    ],
  },
  nitro: {
    compressPublicAssets: true,
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  css: ['primevue/resources/themes/lara-light-indigo/theme.css', '~/assets/css/main.css', 'primeicons/primeicons.css'],

  primevue: {
    usePrimeVue: false,
    components: {
      include: [
        'Button',
        'Menu',
        'Checkbox',
        'InputText',
        'Password',
        'Tree',
        'Calendar',
        'Dialog',
        'Dropdown',
        'RadioButton',
        'DataTable',
        'Textarea',
        'Toast',
        'Column',
        'Calendar',
        'Accordion',
        'AccordionTab',
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
