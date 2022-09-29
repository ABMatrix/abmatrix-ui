export default {
  target: 'static',
  ssr: false,
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
  head: {
    title: 'Website template',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1,maximum-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/styles/main.scss'],

  styleResources: {
    scss: ['~/assets/styles/_mixin.scss', '~/assets/styles/_variables.scss'],
    hoistUseStatements: true,
  },

  plugins: ['~/plugins/directive/index.js'],

  components: {
    dirs: ['~/components', '~/components/icons', '~/blocks'],
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  modules: ['nuxt-breakpoints', '@nuxtjs/i18n'],

  breakpoints: {
    sm: 600,
    md: 800,
    lg: 992,
    xl: 1200,
    options: {
      polyfill: true,
      throttle: 10,
    },
  },

  i18n: {
    locales: [
      { code: 'en-US', name: 'English', file: 'en-US.ts' },
      { code: 'zh-TW', name: '繁體中文 ', file: 'zh-TW.ts' },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en-US',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_website-template',
      redirectOn: 'root',
    },
  },

  build: {},
}
