<template>
  <section>
    <h1>Contact Me</h1>
    <p>I would love to hear from you.</p>

    <form @prevent.default="validateForm">
      <div class="contact">
        <label class="contact-input">
          Your name
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            v-model="name"
          />
        </label>

        <label class="contact-input">
          Your email
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            v-model="email"
          />
        </label>

        <label class="contact-input">
          Your message
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            v-model="message"
          />
        </label>
      </div>

      <button type="submit">Submit Form</button>
    </form>
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

<style lang="scss" scoped></style>
