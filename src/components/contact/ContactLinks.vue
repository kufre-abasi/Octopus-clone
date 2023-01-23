<script>
import feather from "feather-icons";

export default {
  // props: ["socials", "headers"],
  data() {
    return {
      socials: [
        {
          id: 1,
          name: "GitHub",
          icon: "github",
          url: "https://github.com/kufre-abasi",
        },
        {
          id: 2,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/kufreabasiBass1",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://web.facebook.com/kufreabasi",
        },
        {
          id: 4,
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/basseykufreabasi/",
        },
        {
          id: 5,
          name: "Linkedin",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/kufre-abasi-bassey-692b38212/",
        },
        // {
        //   id: 5,
        //   name: "WhatsApp",
        //   icon: "phone",
        //   url: "https://wa.link/x477i5",
        // },
      ],
      headers: [
        {
          id: 1,
          name: "Contact Us",
        },
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
  <div class="w-full md:w-1/2">
    <div class="text-left max-w-xl">
      <h1
        v-for="header in headers"
        :key="header.id"
        class="font-general-semibold sm:text-3xl text-lg text-gray-500 mb-8"
      >
        {{ header.name }}
      </h1>
      <!-- <ul class="font-general-regular">
        <li class="flex" v-for="social in socials" :key="social.id">
          <p :href="contact.href" target="_blank" class="text-lg mb-4 text-gray-400">
            -{{ contact.name }}
          </p>
        </li>
      </ul> -->
      <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
        Lekki,Lagos,Nigeria
      </p>
      <p class="font-general-regular text-md capitalize sm:text-md text-gray-500">
        Phone: +234 81323232
      </p>
      <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-6">
        Email: info@tribalgetway.com
      </p>

      <ul class="flex gap-4 sm:gap-2">
        <a
          v-for="social in socials"
          :key="social.id"
          :href="social.url"
          target="__blank"
          class="cursor-pointer rounded-lg bg-gray-400 shadow-sm p-2 duration-500"
        >
          <i class="w-4 sm:w-5 h-4 sm:h-6">&#9949; </i>
        </a>
      </ul>

      <p class="font-general-regular text-gray-500 text-md mt-4 mb-8">
        Reach out to us by sending us an mail.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
