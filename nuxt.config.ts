// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
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
  components: {
    global: true,
    dirs: ['~/components']
  }
})
