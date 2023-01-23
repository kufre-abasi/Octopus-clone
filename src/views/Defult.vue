<script>
import AppBanner from "@/components/shared/AppBannerM";
import AboutUs from "../components/about/About.vue";
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
// import Button from '../components/reusable/Button.vue';
import ContactUs from "./ContactUs.vue";
export default {
  name: "Defult",
  components: {
    AppBanner,
    AboutUs,
    ProjectsGrid,
    // Button,
    ContactUs,
  },
  data() {
    return {
      containerClasses: ["bg-image"],
    };
  },
};
</script>

<template>
  <div class="">
    <div :class="containerClasses" class="p-10 m:p-16">
      <AppBanner class="mb-5 sm:mb-5 container" />
    </div>
    <AboutUs />
    <ProjectsGrid />
    <ContactUs />
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url(../assets/images/blackhub.jpg);
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.418);
  background-blend-mode: overlay;
}
</style>
