import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/styles/global.scss"],
  modules: ["@nuxtjs/supabase", "nuxt-vitest"],
  app: {
    head: {
      title: "Austin Engelbrecht",
    },
  },
});
