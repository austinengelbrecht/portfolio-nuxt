<template>
  <section class="flex justify-center p-4">
    <div>
      <h1>Contact Me</h1>
      <p>I would love to hear from you.</p>

      <form @prevent.default="validateForm" class="">
        <div>
          <label for="name" class="contact-input"> Your name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            v-model="name"
          />
        </div>

        <div>
          <label for="email" class="contact-input">Your email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Your Email"
            v-model="email"
          />
        </div>

        <div>
          <label for="message" class="contact-input">Your Message</label>
          <input
            id="message"
            type="text"
            name="message"
            placeholder="Your Message"
            v-model="message"
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

<style lang="scss" scoped></style>
