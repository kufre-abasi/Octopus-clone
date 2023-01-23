<script>
// import ThemeSwitcher from '../ThemeSwitcher';
// import HireMeModal from "../HireMeModal.vue";
import feather from "feather-icons";
import AppHeaderLinks from "./AppHeaderLinks.vue";
// import Button from "../reusable/Button.vue";

export default {
  components: {
    // ThemeSwitcher,
    // HireMeModal,
    AppHeaderLinks,
    // Button,
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      modal: false,
      categories: [
        {
          id: 1,
          value: "web",
          name: "Web Application",
        },
        {
          id: 2,
          value: "mobile",
          name: "Mobile Application",
        },
        {
          id: 3,
          value: "ui-ux",
          name: "UI/UX Design",
        },
        {
          id: 4,
          value: "branding",
          name: "Branding & Anim",
        },
      ],
    };
  },

  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <nav
    id="nav"
    class="shadow-xl fixed top-0 z-10 bg-primary-dark bg-opacity-30 md:px-20 px-10 w-full"
  >
    <!-- Header start -->
    <div
      class="z-10 py-2 sm:py-0 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between md:my-2 sm:items-center items-center"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center">
        <!-- Header logos -->
        <div>
          <router-link to="/">
            <img src="@/assets/images/logoss.png " alt="" class="logo" />

            <!--	<img
							v-if="theme === 'light'"
							src="@/assets/images/K1.png"
							class="w-36"
							alt="Dark Logo"
						/>
						<img
							v-else
							src="@/assets/images/K1.png"
							class="w-36"
							alt="Light Logo"
						/> -->
          </router-link>
        </div>

        <!-- Theme switcher small screen -->
        <!-- <theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"
				/> -->

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-7 w-7 fill-current text-primary"
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Header links -->
      <AppHeaderLinks :showModal="showModal" :isOpen="isOpen" class="text-center" />

      <!-- Header right section buttons -->
      <!-- <div class="hidden sm:flex justify-between items-center flex-col md:flex-row"> -->
      <!-- Hire me button -->
      <!-- <div class="hidden md:block">
          <Button
            title="Get Package"
            class="text-md font-general-medium bg-primary hover:bg-primary text-white shadow-sm rounded-md px-4 sm:px-6 py-2 sm:py-2.5 duration-300"
            @click="showModal()"
            aria-label="Get Package"
          />
        </div> -->

      <!-- Theme switcher large screen -->
      <!-- <theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
				/> -->
      <!-- </div> -->
    </div>

    <!-- Hire me modal -->
    <!-- <HireMeModal
      :showModal="showModal"
      :modal="modal"
      :categories="categories"
      aria-modal="Hire Me Modal"
    /> -->
  </nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-indigo-700;
  @apply dark:text-indigo-400;
  @apply font-medium;
}
.logo {
  width: 25%;
}
@media only screen and (max-width: 425px) {
  .logo {
    width: 50%;
  }
}
</style>
