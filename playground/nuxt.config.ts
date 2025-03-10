import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/storybook',
    '@nuxt/icon',
    '@vee-validate/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/styles.scss'],
  compatibilityDate: '2025-03-08',
  myModule: {},
})
