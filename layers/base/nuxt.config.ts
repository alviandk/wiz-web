import { compression } from 'vite-plugin-compression2'

export default defineNuxtConfig({
  /* --- Private/public runtime configs (env. variables) --- */
  runtimeConfig: {
    public: {},
    crawlable: false,
    robotSitemap: undefined,
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
          content: 'Web Distributor',
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
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'mask-icon',
          color: '#5bbad5',
          href: '/safari-pinned-tab.svg',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
          sizes: 'any',
        },
      ],
    },
  },

  /* --- List of loaded modules --- */
  modules: [
    '@nuxtjs/eslint-module', // https://github.com/nuxt-modules/eslint
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
  ],

  /* --- Loaded module configs --- */
  // https://github.com/nuxt-modules/eslint#options
  eslint: {
    lintOnStart: false,
    useEslintrc: true,
    failOnError: true,
  },

  pinia: {
    disableVuex: true,
    storesDirs: ['./stores/**'],
  },

  /* --- Run/Build --- */
  ssr: true,
  telemetry: {
    enabled: false,
  },
  sourcemap: false,
  typescript: {
    shim: false,
    strict: true,
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
