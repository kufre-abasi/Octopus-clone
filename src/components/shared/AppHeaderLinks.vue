<script>
// import Button from "../reusable/Button.vue";

export default {
  props: ["showModal", "isOpen"],
  // components: { Button },
};
</script>

<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="m-0 sm:ml-4 sm:flex p-5 sm:p-0 justify-center items-center shadow-b-lg sm:shadow-b-lg"
  >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium text-dark sm:mx-3 md:mb-0 mb-2 sm:py-2"
      aria-label="Home"
      >Product</router-link
    >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 md:mb-0 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Projects"
      >Pricing</router-link
    >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 md:mb-0 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="About Us"
      >Docs</router-link
    >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 md:mb-0 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 text-dark dark:border-secondary-dark"
      aria-label="Contact"
      >Resources</router-link
    >

    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 md:mb-0 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >Blog</router-link
    >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 md:mb-0 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >Enterprice</router-link
    >

    <div class="md:flex block ml-xl-3  my-xl-auto">
      <span class="text-md font-general-medium px-8 py-3 "> Sign in </span>
      <span class="font-general-medium text-sm text-gray-100 bTn ">
        Start a trial
      </span>
    </div>
    <!-- <div class="border-t-2 pt-3 sm:pt-0 sm:border-t-0">
      h
      <button
        class="font-general-medium sm:hidden block text-left text-md font-medium bg-green-500 hover:bg-indigreen-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
        aria-label="Sign in"
      >
        Sign in
      </button>
      <span
        class="text-md bg-accent-primary rounded-sm px-4 py-2 mt-2"
        aria-label="Start a trial"
      >
        Start a trial
      </span>
    </div> -->
  </div>
</template>

<style scoped>
.bTn {
    border-radius: 36px;
    font-weight: 700;
    line-height: 22px;
    padding: 14px 40px;
    transition: background .25s,color .25s,filter .25s;
    background:#00b065;
}
</style>
