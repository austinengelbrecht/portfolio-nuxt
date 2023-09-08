<template>
  <section class="flex justify-center p-4">
    <div class="contactme">
      <h1>Contact Me</h1>
      <p>I would love to hear from you.</p>

      <form @prevent.default="validateForm" class="contact-form">
        <div>
          <label for="name" class="label"> Your name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            v-model="name"
            class="contact-input"
          />
        </div>

        <div>
          <label for="email" class="label">Your email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Your Email"
            v-model="email"
            class="contact-input"
          />
        </div>

        <div>
          <label for="message" class="label">Your Message</label>
          <input
            id="message"
            type="text"
            name="message"
            placeholder="Your Message"
            v-model="message"
            class="contact-input"
          />
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
