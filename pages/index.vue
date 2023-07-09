<template>
  <HomeHeroNew />

  <HomeGallery />
</template>

<script setup>
useSeoMeta({
  title: "Austin Engelbrecht | Front-end Developer",
  description:
    "Austin Engelbrecht is a Front-end developer, who is leveling up one day at a time.",
});
</script>

<style lang="scss">
@import "@/assets/styles/partials/homepage/home-shared.scss";

.intro {
  background: linear-gradient(165deg, rgb(3, 0, 28) 0%, rgb(48, 30, 103) 100%);
}
</style>
