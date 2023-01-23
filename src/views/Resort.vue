<script>
// import AppBanner from "@/components/shared/AppBanner";
// import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
// import Button from '../components/reusable/Button.vue';
import Home from "./Home.vue";
import Contact from "./Contact.vue";
export default {
  name: "Resort",
  components: {
    // AppBanner,
    Home,
    Contact,
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
  <div>
    <Home />
    <Contact />
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url(../assets/images/bg-lekki.png);
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.418);
  background-blend-mode: overlay;
}
</style>
