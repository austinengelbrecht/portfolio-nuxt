<template>
  <div class="modal-background" @click="$emit('resetImg')">
    <figure class="modal">
      <img
        class="modal-close"
        src="@/assets/svg/x-circle.svg"
        alt="Close Button"
        width="32"
        height="32"
      />
      <div class="modal-img">
        <img
          class="w-[100%] h-auto"
          :src="img"
          :alt="alt"
          width="800"
          height="800"
        />
      </div>
      <figcaption class="modal-content">
        <h3>{{ title }}</h3>
        <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: ["img", "alt", "title", "paragraphs"],
  emits: ["resetImg"],
  data() {
    return {};
  },
};
</script>
