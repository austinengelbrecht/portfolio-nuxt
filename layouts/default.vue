<template>
  <body>
    <LayoutSiteHeader />

    <section class="main-content">
      <slot />
    </section>

    <LayoutSiteFooter />
  </body>
</template>

<style lang="scss">
html,
body {
  background-color: #03001c;
  padding: 0;
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  color: #efedff;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-content {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 4rem;
}
</style>
