<template>
  <div class="header">
    <h2 class="header-title">{{ title }}</h2>
    <p class="header-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0 1rem 4rem;

  &-title,
  &-subtitle {
    text-align: center;
  }

  &-title {
    font-size: 2rem;
  }

  &-subtitle {
    font-family: "Exo 2", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
  }
}
</style>
