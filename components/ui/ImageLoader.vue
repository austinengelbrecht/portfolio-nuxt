<template>
  <div>
    <img
      :src="source"
      :alt="altText"
      :aria-hidden="hidden"
      :width="width"
      :height="height"
    />
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
    width: {
      type: Integer,
      default: 100,
      required: false,
    },
    height: {
      type: Integer,
      default: 100,
      required: false,
    },
  },
};
</script>

<style></style>
