<template>
  <section class="contact">
    <section-header
      id="contact"
      :title="'Contact Me'"
      :subtitle="'I Want To Hear From You'"
    />

    <form
      v-if="!submitted"
      name="contact-me"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="submitForm"
    >
      <input type="hidden" name="form-name" value="contact-me" />
      <label class="hidden" for="name">Name:</label>
      <input
        id="name"
        class="name"
        type="text"
        name="name"
        placeholder="Name"
        v-model="form.name"
      />
      <label class="hidden" for="email">Email:</label>
      <input
        id="email"
        class="email"
        type="email"
        name="email"
        placeholder="Email"
        v-model="form.email"
      />
      <label class="hidden" for="message">Your Message:</label>
      <textarea
        id="message"
        class="message"
        type="text"
        name="message"
        placeholder="Your Message..."
        v-model="form.message"
      />
      <button class="send" type="submit">Send</button>
    </form>

    <div v-if="submitted" class="thanks">
      <p>Thanks for sending me a message!</p>
    </div>
  </section>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";

import axios from "@nuxtjs/axios";

export default {
  components: {
    "section-header": SectionHeader,
  },
  data() {
    return {
      submitted: false,
      form: { name: "", email: "", message: "" },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    submitForm() {
      this.submitted = !this.submitted;

      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "contact-me",
          ...this.form,
        }),
        axiosConfig
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 10rem;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);

  max-width: 1000px;
  margin: 0 auto 20rem auto;

  @media (max-width: 800px) {
    margin: 0 auto 10rem auto;
  }
}

.name {
  grid-column: span 2;
}
.message {
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column-end: span 2;
}

.email {
  grid-column-end: span 2;
}
.send {
  grid-row: 5;
  grid-column-start: 2;
}

input,
textarea {
  margin: 1rem;
  padding: 1.25rem 1rem;

  border: 2px solid $black;
  border-radius: 10px;

  background-color: $white;
}

button {
  margin: 1rem;
  padding: 1.25rem 1rem;

  background-color: $royalyellow-3;
  border: 2px solid $black;
  border-radius: 5px;

  text-align: center;

  &:hover {
    background-color: $royalyellow-1;
  }

  &:active {
    background-color: $blueyonder-1;
  }

  &:focus {
    border: #0000d1 2px solid;
  }
}

.thanks {
  margin-bottom: 20rem;
  text-align: center;
}
</style>
