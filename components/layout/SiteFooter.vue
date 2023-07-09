<template>
  <footer class="footer flex justify-between items-center mt-[6rem] p-[2rem]">
    <div>
      <p class="font-bold capitalize">Connect with me</p>
      <ul class="flex flex-row gap-4 justify-start">
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              class="w-[2rem] h-auto"
              src="https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/svg/github-logo.svg"
              alt="GitHub Logo"
            />
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              class="w-[2rem] h-auto"
              src="https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/svg/linkedin-logo.svg"
              alt="Linkedin Logo"
            />
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              class="w-[2rem] h-auto"
              src="https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/svg/codepen-logo.svg"
              alt="Codepen Logo"
            />
          </a>
        </li>
      </ul>
    </div>

    <div class="flex flex-col">
      <a class="mx-auto my-0" href="/">
        <img
          class="h-[48px] w-auto"
          src="https://npjmxgrfqyrxnbnmltws.supabase.co/storage/v1/object/public/images/svg/sitelogo.svg"
          alt="Austin Engelbrecht Site Logo"
        />
      </a>
      <p class="uppercase">Leving up one day at a time</p>
    </div>

    <div class="">
      <p><small>Designed and built by Austin Engelbrecht</small></p>
      <p class="text-center"><small>© 2023</small></p>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: linear-gradient(rgb(3, 0, 28) 0%, rgb(48, 30, 103) 100%);
  border-top: 1px solid #ebedff;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
