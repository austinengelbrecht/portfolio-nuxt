<template>
  <ul class="flex flex-wrap gap-4">
    <li v-for="card in cards" class="card bg-space-3">
      <h3>{{ card.title }}</h3>
      <div class="card-fig">
        <img
          :src="card.img"
          :alt="card.caption"
          width="150"
          class="card-fig-img"
        />
      </div>
      <span>{{ card.caption }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Currently Playing",
          img: "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/about/satisfactory_cover.webp",
          caption: "Satisfactory",
        },
        {
          title: "Currently Learning",
          img: "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/about/full-logo-green-light.png?t=2023-07-06T02%3A09%3A22.086Z",
          caption: "Nuxt",
        },
        {
          title: "Currently Watching",
          img: "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/about/better_call_saul_cover.webp",
          caption: "Better Call Saul",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 8px;
  padding: 1rem;

  &-fig {
    margin: auto;

    &-img {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
