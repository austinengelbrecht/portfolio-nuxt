<template>
  <section class="experience">
    <div v-for="item in experience" class="card">
      <ExperienceCard
        :key="item"
        :card-title="item.cardTitle"
        :card-desc="item.cardDesc"
        :about-title="item.aboutTitle"
        :about-desc="item.aboutDesc"
        :tools-title="item.toolsTitle"
        :tools-desc="item.toolsDesc"
        :alt="item.alt"
      >
        <component :is="item.icon"></component>
      </ExperienceCard>
    </div>
  </section>
</template>

<script>
import ExperienceCard from "./ExperienceCard.vue";
import Grid from "../../assets/icons/GridIcon.vue";
import Mug from "../../assets/icons/MugIcon.vue";
import Palette from "../../assets/icons/PaletteIcon.vue";

export default {
  components: {
    ExperienceCard: ExperienceCard,
    grid: Grid,
    mug: Mug,
    palette: Palette,
  },
  data() {
    return {
      experience: [
        {
          cardTitle: "Design",
          cardDesc:
            "I love designing clean layouts, with thought out patterns, and inspiring interactions while allowing personality to shine through.",
          aboutTitle: "What I Enjoy Designing",
          aboutDesc: "UX, UI, Web, Apps",
          toolsTitle: "Design Tools",
          toolsDesc: [
            "Adobe XD",
            "Figma",
            "Font Awesome",
            "Penpot",
            "Pen & Paper",
          ],
          icon: "palette",
          alt: "Icon of a color pallette",
        },
        {
          cardTitle: "Frontend Development",
          cardDesc:
            "I like to build easy-to-understand code and enjoy bringing accessible experiences and ideas to life in a browser.",
          aboutTitle: "Languages I'm Familiar With",
          aboutDesc: "HTML, CSS, SASS, JavaScript, Git",
          toolsTitle: "Dev Tools",
          toolsDesc: [
            "FullStory",
            "Github",
            "Gitlab",
            "Google Analytics",
            "Netlify",
            "Visual Studio Code",
          ],
          icon: "grid",
          alt: "Icon of a layout grid",
        },
        {
          cardTitle: "Eternal Student",
          cardDesc:
            "I am always working to advance my skills and want to broaden my knowledge of web development and web design.",
          aboutTitle: "What Peaks My Interest",
          aboutDesc:
            "JS Frameworks, CSS Animations, Pixel Art, Design Systems, Microinteractions",
          toolsTitle: "What I Want To Learn",
          toolsDesc: [
            "Affinity Designer",
            "Elm",
            "Node.js",
            "Nuxt",
            "Pixi.js",
            "Pug",
            "SupaBase",
            "Vue",
          ],
          icon: "mug",
          alt: "Icon of a coffee mug",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.experience {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: -6rem;

  .card {
    max-width: 325px;
    padding: 2rem;
    margin-bottom: 1rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25);

    @media (min-width: 532px) {
      margin: 0.5rem;
    }

    @media (min-width: 1263px) {
      margin: 0 1rem;
    }
  }
}
</style>
