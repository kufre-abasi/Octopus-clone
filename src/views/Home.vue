<script>
import AppBanner from "@/components/shared/AppBanner";
// import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
// import Button from '../components/reusable/Button.vue';

export default {
  name: "Home",
  components: {
    AppBanner,
    // ProjectsGrid,
    // Button,
  },
  data() {
    return {
      containerClasses: ["bg-image"],
    };
  },
};
</script>

<template>
  <div class="pt-10" :class="containerClasses">
    <!-- Banner -->
    <AppBanner class="mb-10 sm:mb-20 container" />

    <!-- Projects -->
    <!-- <ProjectsGrid /> -->

    <!-- Load more projects button -->
    <!-- <div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
				<Button title="More Projects" />
			</router-link>
		</div> -->
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url(../assets/images/bg-lekki.png);
  background-size: cover;
  background-color: rgba(6, 24, 1, 0.863) 18;
  background-blend-mode: overlay;
}
</style>
