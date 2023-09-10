<template>
  <section class="flex justify-center p-4">
    <div class="contactme w-[100%]">
      <h1>Contact Me</h1>
      <p class="mb-20">I would love to hear from you.</p>

      <form @submit.prevent="submitForm()">
        <div class="form-field">
          <input
            id="name"
            type="text"
            v-model="formData.name"
            class="contact-input"
            :class="{ 'not-empty': nameHasInput }"
          />
          <label for="name" class="label"> Your Name</label>
        </div>

        <div class="form-field">
          <input
            id="email"
            type="email"
            v-model="formData.email"
            class="contact-input"
            :class="{ 'not-empty': emailHasInput }"
          />
          <label for="email" class="label">Your Email</label>
        </div>

        <div class="form-field">
          <textarea
            id="message"
            type="text"
            v-model="formData.message"
            class="contact-input-message"
            :class="{ 'not-empty': messageHasInput }"
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
      formData: {
        name: "",
        email: "",
        message: "",
      },
      loading: "Submit", // Submit, Submitting, Submitted
      formErrors: {},
    };
  },
  methods: {
    validateForm() {
      this.formErrors = {};

      if (!this.formData.name) {
        this.formErrors.name = "Please enter your name";
      }

      if (!this.formData.email) {
        this.formErrors.email = "Please enter a email";
      } else if (!this.isValidEmail(this.formData.email)) {
        this.formErrors.email = "Invalid email";
      }

      if (!this.formData.message) {
        this.formErrors.message = "Please enter a message";
      }
    },
    isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    submitForm() {},
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
      this.formErrors = {};
    },
  },
  computed: {
    nameHasInput() {
      return this.formData.name.length > 0 ? true : false;
    },
    emailHasInput() {
      return this.formData.email.length > 0 ? true : false;
    },
    messageHasInput() {
      return this.formData.message.length > 0 ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/partials/contactme/contact.scss";
</style>
