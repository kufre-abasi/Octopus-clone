<script>
import feather from "feather-icons";
import FooterCopyright from "./FooterCopyright.vue";
// import Button from "../reusable/Button.vue";

export default {
  components: { FooterCopyright,
    //  Button
   },
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
  <div class="bg-text-primary px-10 sm:px-36 ">
    <div
      class="pt-20 sm:pt-30 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-6   sm:gap-6"
    >
      <!-- Footer social links -->
      <div class="justify-left items-left text-left mb-12 sm:mb-20 ">
        <img src="@/assets/images/octupos/octopus_deploy_logo.png " alt="" class="logo" />

        <!-- <p class="font-general-regular text-md capitalize sm:text-md text-gray-300"></p> -->
        <!-- <p class="font-general-regular text-md capitalize sm:text-md text-gray-300 mb-2">
          Lekki,Lagos,Nigeria
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-300">
          Phone: +234 81323232
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-300 mb-6">
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
            <i :data-feather="social.icon" class="w-4 sm:w-5 h-4 sm:h-6"></i>
          </a>
        </ul> -->
      </div>
<!-- 
Product
Features
What's New
Roadmap
Octopus vs. Azure DevOps
Octopus vs. Jenkins -->
      <div class="justify-left items-left text-left mb-12 sm:mb-20">
        <h4
        class="font-general-medium text-md capitalize sm:text-md text-gray-700 mb-2"
        >
        Product
        </h4>

        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Features
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          What's New
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Roadmap
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Octopus vs. Azure DevOps
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Octopus vs. Jenkins
        </p>
      </div>
<!-- Learn
Getting Started
Guides
DevOps Handbook
Deployments
Runbooks
Training Videos -->
      <div class="justify-left items-left text-left mb-12 sm:mb-20">
        <h4
        class="font-general-medium text-md capitalize sm:text-md text-gray-700 mb-2"
        >
        Learn
        </h4>

        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Getting Started
                  </p>
                  <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Guides
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          DevOps Handbook
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Deployments
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Runbooks
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Training Videos
        </p>

      </div>
      <div class="justify-left items-left text-left mb-12 sm:mb-20">
        <h4
        class="font-general-medium text-md capitalize sm:text-md text-gray-700 mb-2"
        >
        Help & Support        
        </h4>

        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Contact
                  </p>
                  <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Help & Support
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Community
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Discussion Forum
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Upgrade & Renew
        </p>

      </div>

      <div class="justify-left items-left text-left mb-12 sm:mb-20">
        <h4
          class="font-general-medium text-md capitalize sm:text-md text-gray-700 mb-2"
        >
        About Us
        </h4>

        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Company
                  </p>
                  <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Careers
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Webinars & Events
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Blog
        </p>
        <p class="font-general-regular text-md capitalize sm:text-md text-gray-500 mb-2">
          Stickers & Swag 
        </p>

      </div>

      <!-- 

About Us
Company
Careers
Webinars & Events
Blog
Stickers & Swag 
-->
      <!-- <div class="justify-left items-left text-left mb-12 sm:mb-20">
        <h4
          class="font-general-semibold text-md capitalize sm:text-md text-gray-300 mb-2"
        >
        Help & Support
        </h4>

        <p class="font-general-regular text-md capitalize sm:text-md text-gray-300 mb-2">
          Subscribe to our newsletter to get updates on new services and latest post
        </p>
        <div
          class="font-general-regular text-md capitalize sm:text-md text-gray-300 flex flex-row"
        >
          <input
            class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-bl-md rounded-tl-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="email"
            name="email"
            type="text"
            required=""
            placeholder="Email"
            aria-label="Email"
          />
          <Button
            title="Subscribe"
            class="px-4 sm:px-6 py-2 text-white bg-primary hover:bg-indigo-600 rounded-br-md rounded-tr-md focus:ring-1 focus:ring-indigo-900 duration-500"
            type="submit"
            aria-label="Submit Request"
          />
        </div>
      </div> -->
    </div>
    <!-- Footer copyright -->
    <hr/>

    <FooterCopyright />
  </div>
</template>

<style scoped>
.icons:hover {
  background: #3cff76;
  color: #000;
}
.icons {
  background: #022c0c;
  color: #000;
}
/* .logo {
  width: 100px;
} */
.logo {
  width: 20%;
  height: 15%;
}
@media only screen and (max-width: 425px) {
  .logo {
    width: 20%;
    height: 20%;
  }
}

</style>
