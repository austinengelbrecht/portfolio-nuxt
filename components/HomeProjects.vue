<template>
  <section class="section">
    <SectionHeader
      heading="Current Projects"
      subtext="I'm passionate about web development and enjoy experimenting and growing with new technologies and techniques. Working on passion projects allows me to explore my creative side; while also building skills to learn and grow as a professional developer"
    />

    <div class="projects">
      <div class="card">
        <div class="content">
          <h3 class="title">Portfolio</h3>
          <p class="copy">My personal website, where I can showcase who I am</p>
          <p>Currently Viewing</p>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <h3 class="title">Toxic Tournaments</h3>
          <p class="copy">
            The website of a growing Smash Brother tournament hosting service in
            the Midwest.
          </p>
          <SecondaryButton
            url="https://toxictournaments.gg/home"
            text="Visit Site"
          />
        </div>
      </div>

      <div class="card">
        <div class="content">
          <h3 class="title">Cat Facts</h3>
          <p class="copy">
            A simple Chrome extension using ELM for viewing cat facts in the
            browser.
          </p>
          <SecondaryButton
            url="https://chrome.google.com/webstore/detail/cat-facts/dedccdhjmidlhnmjmkajampkgcmlggpg?hl=en"
            text="Chrome Web Store"
          />
        </div>
      </div>

      <div class="card">
        <div class="content">
          <h3 class="title">Birds of Prey Guide</h3>
          <p class="copy">
            An online guide for learning about the raptors used in modern
            falconry.
          </p>
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
import SecondaryButton from "./SecondaryButton.vue";

export default {
  props: { SectionHeader, SecondaryButton },
};
</script>

<style lang="scss">
@import "@/assets/styles/partials/homepage/home-projects.scss";
</style>
