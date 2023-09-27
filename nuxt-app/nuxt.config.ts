// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  plugins: [
    { src: "~/plugins/pinia.js", ssr: false }, // Pinia plugin regisztrálása
  ],
});
