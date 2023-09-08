<template>
  <section class="flex justify-center p-4">
    <div class="contactme">
      <h1>Contact Me</h1>
      <p>I would love to hear from you.</p>

      <form @prevent.default="validateForm" class="contact-form">
        <div class="form-field">
          <input id="name" type="text" v-model="name" class="contact-input" />
          <label for="name" class="label"> Your name</label>
        </div>

        <div class="form-field">
          <input id="email" type="text" v-model="email" class="contact-input" />
          <label for="email" class="label">Your email</label>
        </div>

        <div class="form-field">
          <input
            id="message"
            type="text"
            v-model="message"
            class="contact-input"
          />
          <label for="message" class="label">Your Message</label>
        </div>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {},
    validateForm() {},
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/partials/contactme/contact.scss";
</style>
