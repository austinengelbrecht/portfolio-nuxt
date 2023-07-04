<template>
  <nuxt-link class="hero-link font-ssp" :to="url">More About Me</nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
      default() {
        return "/";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/partials/homepage/hero-button.scss";
</style>
