<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: "Octopus Deploy-clone",
      author: "Kufre-abasi",
      socials: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/kufreabasiBass1",
        },
        {
          id: 2,
          name: "GitHub",
          icon: "github",
          url: "https://github.com/kufre-abasi",
        },
        {
          id: 3,
          name: "Linkedin",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/kufre-abasi-bassey-692b38212/",
        },

        {
          id: 4,
          name: "Youtube",
          icon: "youtube",
          url: "https://web.facebook.com/kufreabasi",
        },
        // {
        //   id: 4,
        //   name: "Instagram",
        //   icon: "instagram",
        //   url: "https://www.instagram.com/basseykufreabasi/",
        // },
        // {
        //   id: 5,
        //   name: "WhatsApp",
        //   icon: "phone",
        //   url: "https://wa.link/x477i5",
        // },
      ],

    };
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
  <div class=" py-5  bg-text-primary">
    
    <!-- Privacy policy GDPR Terms System Status -->
    <div class=" font-general-regular text-gray-800 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="text-left flex gap-4">
        <p class="font-general-regular text-md  text-gray-700">Privacy policy</p>
        <p class="font-general-regular text-md  text-gray-700">Terms</p>
        <p class="font-general-regular text-md text-gray-700">System Status</p>
      </div>
      <div class="text-left">
        <p class="text-md font-general-medium ">
        &copy;  Copyright {{ copyrightDate }} 
        <a
          href="https://github.com/kufre-abasi/octpus-clone"
          target="__blank"
          class="hover:underline  text-gray-700 duration-500"
        > 
           {{ projectName }}
        </a>
      </p>
      </div>
      <div class="text-right">
        <ul class="flex gap-4 sm:gap-3 text-right float-right">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="cursor-pointer   duration-500"
          >
            <i :data-feather="social.icon" class="w-4 sm:w-5 "></i>
          </a>
        </ul>

      </div>

    </div>
    <div class="text-center mt-20">
      <p class=" text-sm text-gray-400">
        Developed by
        <a
          href="https://github.com/kufre-abasi"
          target="__blank"
          class="font-general-regular uppercase hover:underline  duration-500"
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
/* p {
  font-size: 12px;
} */
</style>
