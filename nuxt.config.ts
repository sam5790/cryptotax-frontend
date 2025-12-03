// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

   runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  modules: [
   '@nuxtjs/tailwindcss',
   '@pinia/nuxt',
   'nuxt-toast',
   'nuxt-google-auth',
   'pinia-plugin-persistedstate/nuxt',
   '@nuxt/fonts',
   'nuxt-vue3-google-signin',
   '@nuxtjs/google-fonts',
   '@nuxtjs/google-fonts'
  ],
 googleSignIn: {
    clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
    googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Raleway: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
    preload: true,
  },
   tailwindcss: {
    exposeConfig: true,
    viewer: true,
    
  },

    googleAuth: {
        clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
        autoLoadScript: true,         // load Google script automatically
        promptOneTap: true,           // show One Tap prompt
        enableServerVerify: true      // enable server-side token verification endpoint
    }
})