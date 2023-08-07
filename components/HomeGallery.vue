<template>
  <section class="section">
    <SectionHeader
      heading="Work"
      subtext="A collection of work showcasing my professional work in website design, development, and optimization. Each project meets business requirements and enhances the user experience"
    />

    <ul class="gallery">
      <li class="gallery-card" v-for="image in galleryImgs" :key="image.image">
        <button
          type="button"
          @click="
            expandImage(
              image.image,
              image.imageAlt,
              image.project,
              image.paragraphs
            )
          "
        >
          <img
            class="gallery-card-img"
            :src="image.image"
            :alt="image.imageAlt"
            loading="lazy"
          />
          <span class="sr-only">Expand image to learn more details</span>
        </button>
      </li>
    </ul>

    <HomeGalleryLightbox
      v-if="isOpen"
      :img="currentlySelected"
      :alt="currentlySelectedAlt"
      :title="currentlySelectedProject"
      :paragraphs="currentlySelectedParagraphs"
      @reset-img="reset()"
    />
  </section>
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
import HomeGalleryLightbox from "./HomeGalleryLightbox.vue";

export default {
  components: { SectionHeader, HomeGalleryLightbox },
  data() {
    return {
      isOpen: false,
      currentlySelected: "",
      currentlySelectedAlt: "",
      currentlySelectedProject: "",
      currentlySelectedParagraphs: "",

      galleryImgs: [
        {
          image:
            "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/work/Account_Messages.webp?t=2023-08-06T05%3A54%3A08.666Z",
          imageAlt:
            "Screenshot of developer work for a communication settings page for managing communication settings",
          project: "Account Messages Page",
          paragraphs: [
            "I was the primary developer of the redesign for the Account Messages page, aimed at enhancing the mobile experience and page interaction. I implemented new functionality, created page interactions, and refined the page styles to align with the site's overall design. ",
          ],
        },
        {
          image:
            "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/work/Communications_Page.webp?t=2023-06-06T01%3A49%3A30.293Z",
          imageAlt:
            "Screenshot of front-end work for a communication settings page for managing communication settings",
          project: "Communications Page",
          paragraphs: [
            "With the addition of a new text promotion, the team decided to update our existing communication settings page. ",
            "The page uses styled check-boxes to give users easy access to change their communication preferences. This page also can handle double opt-in emails and age verification for text sign-ups.",
          ],
        },
        {
          image:
            "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/work/Promo_Page.webp?t=2023-06-06T01%3A49%3A41.585Z",
          imageAlt:
            "Screenshot of front-end work for a promotional page for signing up to text notifications",
          project: "Text Promo Page",
          paragraphs: [
            "Apart of a new offering for text notifications about order updates, account messages, and other promotions this page was built to encourage users to sign up. After signing up users would also receive a promotional code that could be used in checkout.",
            "After the new promotional page went live, we saw an increase of 8% in page engagement and an increase of 6% in successful sign-ups.",
          ],
        },
        {
          image:
            "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/work/Account_Dashboard.webp?t=2023-05-04T01%3A43%3A54.874Z",
          imageAlt: "Screenshot of front-end work of an account dashboard",
          project: "Account Dashboard",
          paragraphs: [
            "What originally began as a Feature Innovation Challenge project to show customers their recent orders; the project quickly grew into an entire account dashboard and new account navigation.",
            "Soon the project featured user's product arrival notifications, recently viewed products, and general account information. Users can quickly find important information about their orders and account.",
          ],
        },
        {
          image:
            "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/work/Restricted%20_Items_Modal.webp?t=2023-05-04T01%3A59%3A28.134Z",
          imageAlt:
            "Screenshot of front-end work of a restricted items modal in checkout",
          project: "Restricted Items Modal",
          paragraphs: [
            " Navigating the firearms and shooting sector involves careful consideration of numerous laws and regulations. Our system incorporates an age restriction notification, which pops up when a user tries to add a restricted item to their cart. This alert informs them that the purchase isn't possible due to either legal restrictions or the need for age verification.",
          ],
        },
        {
          image:
            "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/work/Unsupported_Browsers.webp?t=2023-05-04T02%3A03%3A35.366Z",
          imageAlt: "Screenshot of an unsupported browser page",
          project: "Unsupported Broswers",
          paragraphs: [
            "Occasionally, users forget to keep their browsers updated. To give the user the best experience with new technology and security, we have to block them from continuing to our site.",
            "This unsupported browser page was built to show a little easter egg graphic and options to help guide users to how to update their browsers before shopping.",
          ],
        },
        {
          image:
            "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/work/Weekly_Specials.webp?t=2023-05-04T02%3A03%3A46.501Z",
          imageAlt: "Screenshot of front-end work of a weekly specials page",
          project: "Weekly Specials Page",
          paragraphs: [
            "The Weekly Specials Page was built as a condensed version of our product finding and search pages to feature items currently at special discounts.",
            "This page was also the testing grounds for a new product block which forms the basis of product blocks site-wide.",
          ],
        },
        {
          image:
            "https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/work/Wish_List.webp?t=2023-05-04T02%3A04%3A17.933Z",
          imageAlt:
            "Screenshot of front-end work for a user wish list creation",
          project: "Wish Lists Sign In",
          paragraphs: [
            "Returning users often forget to sign back in before being able to view some account features. With the help of a designer, we built a small sign in component to guide users to sign in to view their wish lists.",
            "By providing this clear visual cue and easy-to-follow instructions, we saw improvements to wish list engagement from users.",
          ],
        },
      ],
    };
  },
  methods: {
    expandImage(img, alt, title, paragraphs) {
      this.isOpen = !this.isOpen;
      this.currentlySelected = img;
      this.currentlySelectedAlt = alt;
      this.currentlySelectedProject = title;
      this.currentlySelectedParagraphs = paragraphs;
    },
    reset() {
      this.isOpen = false;
      this.currentlySelected = "";
      this.currentlySelectedAlt = "";
      this.currentlySelectedProject = "";
      this.currentlySelectedParagraphs = "";
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/partials/homepage/home-gallery.scss";
</style>
