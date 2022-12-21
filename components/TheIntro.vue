<template>
  <section class="intro bg-mint">
    <div class="intro-info">
      <h1 class="intro-info-header">Designer and Frontend Developer</h1>
      <p class="intro-info-desc">
        My name is Austin, and I'm currently a UX Developer, with a passion for
        front-end code. I've been working int he industry for 2 years and I am
        continously developing my skills and knowledge.
      </p>
    </div>
    <div class="">
      <img
        class="intro-img"
        src="@/assets/images/austin_engelbrecht.jpg"
        alt="Austin Engelbrecht posing on a hiking trail"
        width="500"
        height="500"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.intro {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 4rem 1rem 10rem;

  &-info {
    max-width: 700px;

    @media (min-width: 1231px) {
      margin-right: 4rem;
    }

    &-header {
      font-size: 4rem;

      @media (max-width: 800px) {
        font-size: 3rem;
      }
    }
    &-desc {
      font-size: 1.5rem;

      @media (max-width: 800px) {
        font-size: 1.25rem;
      }
    }
  }

  &-img {
    max-width: 500px;
    width: 100%;
    height: auto;
    border-radius: 100%;
  }
}
</style>
