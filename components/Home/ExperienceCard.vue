<template>
  <div class="background bg-coral">
    <div class="background-icon">
      <slot>{{ alt }}</slot>
    </div>
  </div>

  <div>
    <h2>{{ cardTitle }}</h2>
    <p>{{ cardDesc }}</p>
  </div>
  <div>
    <h3>{{ aboutTitle }}</h3>
    <p>{{ aboutDesc }}</p>
  </div>
  <div>
    <h3>{{ toolsTitle }}</h3>
    <ul>
      <li v-for="tool in toolsDesc" :key="tool">{{ tool }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cardTitle: String,
    cardDesc: String,
    aboutTitle: String,
    aboutDesc: String,
    toolsTitle: String,
    toolsDesc: Array,
    icon: String,
    alt: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
h2,
h3 {
  margin-top: 2rem;
}

h2 {
  font-size: 1.75rem;
}

h3 {
  font-size: 1.25rem;
}

.background {
  width: 125px;
  height: 125px;
  position: relative;
  border-radius: 100%;

  @media (max-width: 810px) {
    width: 100px;
    height: 100px;
  }

  &-icon {
    width: 100px;
    height: 100px;

    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);

    @media (max-width: 810px) {
      width: 75px;
      height: 75px;
      top: calc(25% - 12px);
      left: calc(25% - 12px);
    }
  }
}
</style>
