<script>
import feather from "feather-icons";

export default {
  props: ["project"],
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="rounded-sm hover:shadow-sm mb-20 mt-10 border border-gray-400"
    aria-label="Single Project"
  >
    <div class="text-left items-left px-4 py-3">
      <ul class="items-left text-left">
        <a
          class="cursor-pointer text-left items-left rounded-lg bg-primary shadow-sm duration-500 mb-10 p-6"
        >
          <i class="w-0 h-0 m-0">&#9949;</i>
        </a>
      </ul>
    </div>
    <div class="text-center px-4 py-3">
      <p class="font-general-semibold text-xl text-left font-semibold mb-2 text-gray-400">
        {{ project.title }}
      </p>
      <p class="font-general-regular text-sm text-gray-300 text-justify mb-10">
        {{ project.msg }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: solid 2px #022c0c;
}
.card:hover {
  border: none;
  box-shadow: none;
  box-shadow: 1px 2px 25px 8px #022c0c;
}
</style>
