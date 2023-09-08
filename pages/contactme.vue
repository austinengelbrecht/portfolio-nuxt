<template>
  <section class="flex justify-center p-4">
    <div class="contactme w-[100%]">
      <h1>Contact Me</h1>
      <p class="mb-20">I would love to hear from you.</p>

      <form @submit.prevent="testSBData">
        <div class="form-field">
          <input
            id="name"
            type="text"
            v-model="name"
            class="contact-input"
            :class="{ 'not-empty': nameHasInput }"
          />
          <label for="name" class="label"> Your Name</label>
        </div>

        <div class="form-field">
          <input
            id="email"
            type="email"
            v-model="email"
            class="contact-input"
            :class="{ 'not-empty': emailHasInput }"
          />
          <label for="email" class="label">Your Email</label>
        </div>

        <div class="form-field">
          <textarea
            id="message"
            type="text"
            v-model="message"
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
// const supabase = useSupabaseClient();

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
    // async testSBData() {
    //   const { data, error } = await supabase
    //     .from("Contact")
    //     .insert([{ name: this.name, email: this.email, message: this.message }])
    //     .select;

    //   if (data) {
    //     console.log(data);
    //   }
    // },
  },
  computed: {
    nameHasInput() {
      return this.name.length > 0 ? true : false;
    },
    emailHasInput() {
      return this.email.length > 0 ? true : false;
    },
    messageHasInput() {
      return this.message.length > 0 ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/partials/contactme/contact.scss";
</style>
