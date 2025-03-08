export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/storybook',
  ],
  devtools: { enabled: true },
  css: ['~/assets/styles.scss'],
  myModule: {},
})
