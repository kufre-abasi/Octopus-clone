<script>
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: "Tribalgateway",
      author: "Kufre-abasi",
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center bg-primary-dark p-4">
    <div class="font-general-regular text-lg text-gray-100">
      <p class="">
        &copy; {{ copyrightDate }} Copyright
        <a
          href="https://github.com/kufre-abasi/hire-me"
          target="__blank"
          class="font-general-regular hover:underline text-primary duration-500"
        >
          {{ projectName }}
        </a>
      </p>

      <p>
        Developed by
        <a
          href="https://github.com/kufre-abasi"
          target="__blank"
          class="font-general-medium uppercase hover:underline text-primary duration-500"
          >{{ author }}</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.text-color:hover {
  color: #3cff76;
}
.text-color {
  color: #022c0c;
}
p {
  font-size: 12px;
}
</style>
