<template>
  <header class="header flex flex-row">
    <nuxt-link to="/">
      <img
        src="https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/svg/sitelogo.svg"
        alt="Austin Engelbrecht Site Logo"
        width="81"
        height="34"
      />
    </nuxt-link>
  </header>
</template>

<style lang="scss">
.header {
  padding: 1.5rem 4rem;
  border-bottom: 3px solid #301e67;
}

.site-logo {
  font-family: "Audiowide";
  color: #efedff;
  font-size: 4rem;
}
</style>
