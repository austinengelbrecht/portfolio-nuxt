<template>
  <div class="footer bg-mint">
    <h2 class="sr-only">The Footer</h2>
    <img
      class="footer-graphic"
      src="../assets/images/me_graphic.png"
      alt="A vector graphic that looks like me"
      width="100"
      height="100"
    />

    <span class="footer-tagline">LEVLING UP ONE DAY AT A TIME</span>

    <ul class="footer-socials">
      <li v-for="item in links" class="footer-socials-links">
        <a :key="item.url" :href="item.url" target="_blank">
          <Icon :name="item.icon" class="icon" />
          <span class="sr-only"> {{ item.linkText }}</span>
        </a>
      </li>
    </ul>

    <div class="footer-copyright">
      <span>Designed and Built by Austin Engelbrecht</span>
      <br />
      <span>&copy; 2022</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          url: "https://github.com/austinengelbrecht",
          linkText: "Goto my GitHub page",
          icon: "fa:github",
        },
        {
          url: "www.linkedin.com/in/austinengelbrecht",
          linkText: "Goto my Linkedin profile",
          icon: "fa:linkedin",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  margin-top: 10rem;

  &-graphic {
    border: 2px solid #000;
    border-radius: 100%;
  }

  &-tagline {
    padding: 2rem;
    font-family: "Exo 2", sans-serif;
    font-size: 1.5rem;
    text-align: center;
  }

  &-socials {
    display: flex;
    flex-flow: row;

    &-links {
      padding: 0 1rem;
    }
  }

  &-copyright {
    padding-top: 2rem;
    text-align: center;
  }
}

.icon {
  width: 30px;
  height: auto;
}
</style>
