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
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Austin Engelbrecht",
      meta: [
        {
          name: "keywords",
          content:
            "austinengelbrecht.com, austin engelbrecht, developer, front-end developer, ux, ui",
        },
      ],
    },
  },
});
