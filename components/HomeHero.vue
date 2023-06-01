<template>
  <section class="hero">
    <img
      class="hero-title-img"
      src="../assets/svg/title_graphic.svg"
      alt="Hi, I'm Austin"
      width="715"
      height="445"
    />
  </section>
</template>

<style lang="scss">
.hero {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4rem;
  padding: 4rem 0;

  &-left,
  &-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 600px;

    @media (max-width: 1440px) {
      display: none;
    }
  }

  &-shooting-stars {
    max-width: 312px;
    max-height: 216px;
  }

  &-space-ship {
    max-width: 236px;
    max-height: 165px;
  }

  &-title {
    max-width: 600px;
    height: auto;
    padding: 2rem;

    &-img {
      max-width: 100%;
      height: auto;
    }
  }

  &-big-planet {
    max-width: 267px;
    max-height: 192px;
  }

  &-little-planet {
    max-width: 56px;
    max-height: 53px;
    align-self: flex-end;
  }
}
</style>
