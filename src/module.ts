import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@saasfork/ui',
    configKey: 'saasForkUiModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Ajouter automatiquement les composants
    addComponentsDir({
      path: resolver.resolve('runtime/components'),
      pathPrefix: false,
    })
  },
})
