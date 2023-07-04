<template>
  <section class="hero flex flex-wrap justify-center items-center">
    <div class="hero-img-container">
      <img
        class="hero-img"
        src="https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/homeheroimage.webp?t=2023-06-18T20%3A21%3A25.822Z"
        width="488"
        height="488 "
        alt="A photo of Austin Engelbrecht outside"
      />
    </div>

    <div class="hero-about">
      <img
        class="hero-about-img"
        src="../assets/svg/title_graphic.svg"
        alt="Graphic displaying 'Hi, I'm Austin'"
        width="500"
        height="311"
        aria-hidden="true"
      />

      <p class="hero-about-content">
        While getting my Information Science degree, I found my passion for
        building websites and working in front-end code. I am a self-motivated
        developer striving to improve my skills, whether it's through online
        courses, attending conferences, or working on personal projects, I am
        constantly striving to learn and grow as a developer.
      </p>

      <HeroButton url="/aboutme" text="Learn More" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/partials/homepage/home-hero.scss";
</style>
