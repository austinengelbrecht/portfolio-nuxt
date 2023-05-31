---
import HeroButton from "./HeroButton.astro";
---

<template>
  <section class="about">
    <img
      class="about-img"
      src="https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/austinengelbrecht.jpg"
      width="400"
      height="400"
      loading="lazy"
    />

    <div class="about-container">
      <h2 class="about-heading">About Austin</h2>
      <p class="about-content">
        While getting my Information Science degree, I found my passion for
        building websites and working in front-end code. I am a self-motivated
        developer striving to improve my skills, whether it's through online
        courses, attending conferences, or working on personal projects, I am
        constantly striving to learn and grow as a developer.
      </p>

      <HeroButton url="/" text="Learn More" />
    </div>
  </section>
</template>

<script>
export default {
  components: [HeroButton],
};
</script>

<style lang="scss">
.about {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 2rem;

  &-heading {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 600;
  }

  &-img {
    border-radius: 4px;

    height: 300px;
    width: 300px;
  }

  &-container {
    max-width: 600px;
  }

  &-content {
    margin-bottom: 2rem;
  }
}
</style>
