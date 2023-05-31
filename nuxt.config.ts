// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/styles/tailwind.scss"],
};
