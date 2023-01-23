<script>
import feather from "feather-icons";
import ProjectsFilter from "./ProjectsFilter.vue";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";

export default {
  components: { ProjectSingle },
  data: () => {
    return {
      projects,
      projectsHeading: "Services We Offer ",
      selectedProject: "",
      searchProject: "",
      ProjectsFilter,
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.selectedProject) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.map((item) => {
        let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        console.log(category);
        return category.includes(this.selectedProject);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="sm:px-20 px-10 py-5 md:py-12 mt-20 md:mt-30">
    <!-- Projects grid title -->
    <div class="pb-2 text-left">
      <h1 class="font-general-semibold sm:text-3xl text-lg text-gray-500">
        {{ projectsHeading }}
      </h1>
    </div>

    <!-- Filter and search projects -->
    <!-- <div class="mt-10 sm:mt-10">
      <h3
        class="font-general-regular text-center text-ternary-light text-md sm:text-xl font-normal mb-4"
      >
        Search projects by title or filter by category
      </h3>
      <div class="flex justify-between border-b border-primary-light pb-3 gap-2">
        <div class="flex justify-between gap-2">
          <span
            class="hidden sm:block bg-primary-light p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <i
              data-feather="search"
              class="text-ternary-dark dark:text-ternary-light"
            ></i>
          </span>
          <input
            v-model="searchProject"
            class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter @change="selectedProject = $event" />
      </div>
    </div> -->

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<style scoped></style>
