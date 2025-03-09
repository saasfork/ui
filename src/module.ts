import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@saasfork/ui',
    configKey: 'saasForkUiModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    global: true, // Rendre les composants disponibles globalement
  },
  setup(options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Ajouter automatiquement les composants (une seule fois)
    addComponentsDir({
      path: resolver.resolve('runtime/components'),
      pathPrefix: false, // Ne pas ajouter de préfixe de chemin
      prefix: '', // Pas de préfixe pour les noms de composants
      global: options.global,
    })

    // Ne plus utiliser le hook components:dirs car addComponentsDir fait déjà le travail
  },
})
