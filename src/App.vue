<script>
import feather from "feather-icons";
import AppHeader from "./components/shared/AppHeader";
import AppFooter from "./components/shared/AppFooter";
// import AboutMe from "./views/About.vue";
// import Home from "./views/Home.vue";
// import Contact from "./views/Contact.vue";
// import ProjectsGrid from "./views/Projects.vue";
// import Skills from "./components/skills/Skills.vue";
// import PageLoader from './components/PageLoader/PageLoader.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    // PageLoader,
    // AboutMe,
    // Home,
    // Contact,
    // ProjectsGrid,
    // Skills,
  },
  // data: () => {
  //   return {
  //     appTheme: localStorage.getItem("theme"),
  //   };
  // },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div id="app" class="pt-0.5">
    <!-- <PageLoader /> -->
    <AppHeader />
    <!-- <Home /> -->
    <!-- <AboutMe /> -->
    <!-- <Skills /> -->
    <!-- <ProjectsGrid /> -->
    <!-- <Contact /> -->
    <!-- <AppFooter /> -->

    <!-- Render active component contents with vue transition -->
    <!-- <transition name="fade" mode="out-in"> -->
    <router-view />
    <!-- </transition> -->

    <AppFooter />

    <!-- Scroll to top -->
    <back-to-top visibleoffset="500" right="30px" bottom="20px" class="shadow-lg">
      <i data-feather="chevron-up"></i>
    </back-to-top>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: #663419; */
  /* background-color: #0d2438; */

  /* background-color: #141414; */
  /* background-color: #1e3851; */
}

.vue-back-to-top {
  @apply p-2   text-white transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-110;
  border-radius: 5%;
  font-size: 22px;
  line-height: 22px;
  background: #c3910a;
}
.vue-back-to-top:hover {
  background: #f9c656;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}
.border-color {
  border-bottom: solid 2px #022c0c;
}
.text-color {
  color: #022c0c;
  text-shadow: #fcfdfd 2px;
  /* -webkit-text-stroke: 0.25px #3cff76; */
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
/* width */
::-webkit-scrollbar {
  display: none;
}
</style>
