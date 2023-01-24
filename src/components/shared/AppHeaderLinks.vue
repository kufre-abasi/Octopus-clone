<script>
export default {
  props: ["showModal", "isOpen"],
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
      class="font-general-medium block text-left text-lg font-medium text-dark sm:mx-3 mb-2 sm:py-2"
      aria-label="Home"
      >Product</router-link
    >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Projects"
      >Pricing</router-link
    >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="About Us"
      >Docs</router-link
    >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 text-dark dark:border-secondary-dark"
      aria-label="Contact"
      >Resources</router-link
    >

    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >Blog</router-link
    >
    <router-link
      to="/"
      class="font-general-medium block text-left text-lg font-medium sm:mx-3 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >Enterprice</router-link
    >
    <!-- <div
      class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
    >
      <button
        class="font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
        @click="showModal()"
        aria-label="Hire Me Button"
      >
        Hire Me
      </button>
    </div> -->
    <div
      class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
    >
      <button
        class="font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
        aria-label="Hire Me Button"
      >
        Sign in
      </button>
      <button
        class="font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
        aria-label="Hire Me Button"
      >
        Start a trial
      </button>
    </div>
  </div>
</template>

<style scoped></style>
