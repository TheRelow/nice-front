// https://github.com/nuxt-modules/prismic/blob/master/src/module.ts
import { createResolver, defineNuxtModule, extendPages } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options) {
    const resolver = createResolver(import.meta.url)
    // console.log('options', options)
    // console.log('resolver', resolver)

    extendPages((pages) => {
      // console.log('pages', pages)
    })
  }
})
