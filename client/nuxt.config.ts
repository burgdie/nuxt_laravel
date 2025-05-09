// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false},

  devServer:{
    host: "nuxt_backend.test"
  },

  modules: ["nuxt-auth-sanctum"],

  sanctum: {
    baseUrl: 'http://nuxt_backend.test:80', // Laravel API
    redirect: {
      onAuthOnly: 'auth/login',
      onGuestOnly: "dashboard",
      onLogout: "auth/login"
    }
  },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},

    },
  },
})