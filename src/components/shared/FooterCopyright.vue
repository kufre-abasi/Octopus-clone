<script>
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: "Octopus Deploy-clone",
      author: "Kufre-abasi",
    };
  },
};
</script>

<template>
  <div class=" py-5  bg-text-primary">
    
    <!-- Privacy policy GDPR Terms System Status -->
    <div class="flex font-general-regular text-gray-800 grid grid-cols-1 sm:grid-cols-5  gap-1 ">
      <p class="font-general-regular text-md text-left  text-gray-500">Privacy policy</p>
      <p class="font-general-regular text-md  text-gray-500">Terms</p>
      <p class="font-general-regular text-md">System Status</p>
      <p class="text-md">
        &copy;  Copyright {{ copyrightDate }}
        <a
          href="https://github.com/kufre-abasi/octpus-clone"
          target="__blank"
          class="font-general-regular hover:underline  text-gray-500 duration-500"
        >
          {{ projectName }}
        </a>
      </p>

      <p>
        Developed by
        <a
          href="https://github.com/kufre-abasi"
          target="__blank"
          class="font-general-medium uppercase hover:underline text-gray-500 duration-500"
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
