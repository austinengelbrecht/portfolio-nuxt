<template>
  <div
    class="modal-background"
    @click="$emit('resetImg')"
    @keydown.esc="$emit('resetImg')"
  ></div>
  <dialog class="modal">
    <button class="modal-close" type="button" @click="$emit('resetImg')">
      <img
        src="@/assets/svg/x-circle.svg"
        alt="Close Button"
        width="32"
        height="32"
      />
      <span class="sr-only">Close Modal</span>
    </button>
    <div class="modal-img">
      <img
        class="w-[100%] h-auto"
        :src="img"
        :alt="alt"
        width="800"
        height="800"
      />
    </div>
    <div class="modal-content">
      <h3>{{ title }}</h3>
      <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
    </div>
  </dialog>
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
