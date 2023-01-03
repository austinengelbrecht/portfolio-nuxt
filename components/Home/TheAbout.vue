<template>
  <section class="aboutme">
    <SectionHeader
      :title="'Me Outside Of The Office'"
      :subtitle="'Learn a little more about me, my hobbies, and passions when I am not working in the office'"
    />

    <div class="aboutme-container">
      <img
        src="@/assets/images/aboutme.jpg"
        alt="Austin Engelbrecht and his girlfriend Stephanie"
        width="401"
        height="500"
        class="aboutme-img"
      />
      <div class="aboutme-content">
        <p>
          I have grown up in an era connected by the internet. I strive to
          develop a world where people are connected through great design that
          is user-focused and accessible to all.
        </p>
        <p>
          I love learning new techniques to continue building my knowledge and
          skills in front-end design and development, as well as exploring
          JavaScript frameworks, web applications, and web game development.
        </p>
        <p>
          I also love discovering new trails to hike, photography, and playing
          casual video games. I'm also in the process of learning pixel art and
          Vue.js, and hope to one day build my own app.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";

export default {
  components: { SectionHeader },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.aboutme {
  margin-top: 10rem;
  padding: 0 1rem;

  &-container {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
      flex-flow: column;
    }
  }

  &-content {
    margin-left: 3rem;
    max-width: 500px;

    @media (max-width: 1000px) {
      margin-left: 0;
    }
  }

  &-img {
    height: auto;
    max-width: 100%;
    border-radius: 10px;
  }
}
</style>
