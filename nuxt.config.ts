// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxt/ui', '@vueuse/motion/nuxt'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  css: [
    "assets/style/main.css"
  ],

  routeRules: {
    '/': { prerender: true }, // أو static
  },
  vite: {
    build: { chunkSizeWarningLimit: 600 }
  }
})