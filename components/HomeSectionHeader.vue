<template>
  <div class="heading">
    <h2 class="heading-title">{{ heading }}</h2>
    <p class="heading-text">{{ subtext }}</p>
  </div>
</template>

<script>
export default {
  props: { heading, subtext },
};
</script>

<style lang="scss">
.heading {
  max-width: 1200px;
  margin: 0 auto 2rem;

  &-title {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 600;
  }

  &-text {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    max-width: 600px;
  }
}
</style>
