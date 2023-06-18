<template>
  <section class="hero flex">
    <div>
      <img
        class="hero-img"
        src="https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/austinengelbrecht.jpg"
        width="400"
        height="400"
        alt="A photo of Austin Engelbrecht outside"
      />
    </div>

    <div class="hero-about">
      <img
        class=""
        src="../assets/svg/title_graphic.svg"
        alt="Graphic displaying 'Hi, I'm Austin'"
        width="400"
        height="249"
        aria-hidden="true"
      />

      <p class="hero-about-content">
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

<style lang="scss" scoped>
@import "@/assets/styles/partials/homepage/home-hero.scss";
</style>
