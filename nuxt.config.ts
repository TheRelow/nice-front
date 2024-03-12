// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/content", '@nuxtjs/i18n'],
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
    langDir: 'locales/',
    defaultLocale: 'en-US',
    types: 'composition',
    pages: undefined,
    dynamicRouteParams: false,
    skipSettingLocaleOnNavigate: true,
    vueI18n: './config/i18n.config.ts'
  },
})
