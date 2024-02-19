// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/content", 'vuetify-nuxt-module', '@nuxtjs/i18n'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *; @use "~/assets/styles/_mixins.scss" as *;'
        }
      }
    }
  },
  app: {
    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    // },
    head: {
      style: [
        'background-color: #2f2f38;'
      ]
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  i18n: {
    locales: [{
      code: 'en-US',
      iso: 'en-US',
      file: 'en-US.json',
      name: 'English',
      dir: 'ltr',
    }, {
      code: 'ru-RU',
      iso: 'ru-RU',
      file: 'ru-RU.json',
      name: 'Русский',
      dir: 'ltr',
    }],
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    // put your json files in this folder or configure your own path
    langDir: 'locales/',
    defaultLocale: 'en-US',
    types: 'composition',
    pages: undefined,
    dynamicRouteParams: false,
    skipSettingLocaleOnNavigate: true,
    // debug: true,
    // Vue configuration file, you can move it to the root folder
    vueI18n: './config/i18n.config.ts'
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: './config/vuetify.config.ts' // <== you can omit it
  }
})