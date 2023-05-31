<template>
  <body>
    <SiteHeader />
    <slot />
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
</style>
