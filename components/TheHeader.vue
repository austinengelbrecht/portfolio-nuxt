<template>
  <section class="header">
    <router-link to="/home" class="header-name"> Austin </router-link>
  </section>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  height: 100px;

  &-name {
    margin-left: 4rem;

    font-size: 1.75rem;
    font-family: "Rock Salt", cursive;
  }
}
</style>
