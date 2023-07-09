<template>
  <ul class="menu">
    <li>
      <NuxtLink class="menu-link" to="/aboutme">About Me</NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.menu {
  &-link {
    text-decoration: none;
    color: #efedff;

    &:hover,
    &:focus {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
