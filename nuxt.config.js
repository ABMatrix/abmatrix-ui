export default {
  target: 'static',
  ssr: false,
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
  head: {
    title: 'ABMatrxi UI',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1,maximum-scale=1',
      },
      { hid: 'description', name: 'description', content: 'ABMatrix UI' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },

  css: ['~/assets/styles/main.scss'],

  styleResources: {
    scss: ['~/assets/styles/_mixin.scss', '~/assets/styles/_variables.scss'],
    hoistUseStatements: true,
  },

  plugins: [
    '~/plugins/directive/index.js',
    '~/plugins/element-ui.js',
    '~/plugins/confirm-dialog.ts',
    '~/plugins/floating-vue.ts',
    '~/plugins/vue-final-modal.ts',
    '~/plugins/overlay-scrollbars.ts',
    '~/plugins/helpers.ts',
    '~/plugins/message.ts',
    '~/plugins/highlight.js',
  ],

  components: {
    dirs: [
      '~/components',
      '~/components/icons',
      '~/components/buttons',
      '~/components/tabs',
      '~/components/inputs',
      '~/components/navs',
      '~/components/dialogs',
      '~/components/tables',
      '~/blocks',
    ],
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
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
      cookieKey: 'i18n_abmatrix_ui',
      redirectOn: 'root',
    },
  },

  build: {
    extend(config) {
      config.node = {
        fs: 'empty',
      }
    },
  },
}
