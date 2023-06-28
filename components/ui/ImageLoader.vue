<template>
  <div>
    <img :src="source" :alt="altText" :aria-hidden="hidden" />
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: "",
      required: true,
    },
    altText: {
      type: String,
      default: "",
      required: true,
    },
    hidden: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
};
</script>

<style></style>
