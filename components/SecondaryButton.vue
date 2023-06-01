<template>
  <a class="secondary-button" :href="url">{{ text }}</a>
</template>

<script>
export default {
  props: ["url", "text"],
};
</script>

<style lang="scss">
.secondary-button {
  padding: 0.5rem 1.25rem;
  background-color: #5b8fb9;
  border-radius: 4px;
  color: #000;
  text-decoration: none;
}
</style>
