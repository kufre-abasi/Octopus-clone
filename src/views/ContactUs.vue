<script>
import feather from "feather-icons";
import ContactForm from "@/components/contact/ContactUs.vue";
import ContactDetails from "@/components/contact/ContactLinks.vue";
// import ContactForm from '@/components/FormSubmission/ContactForm.vue';
export default {
  components: {
    ContactForm,
    ContactDetails,
  },
  data: () => {
    return {
      //   contacts: [
      //     {
      //       id: 1,
      //       name: "Entry & Tour",
      //     },
      //     {
      //       id: 2,
      //       name: "Picnic Lunch",
      //     },
      //     {
      //       id: 3,
      //       name: "Photo",
      //     },
      //     {
      //       id: 4,
      //       name: "Souvenir Gift",
      //       icon: "map-pin",
      //     },
      //     {
      //       id: 5,
      //       name: "$40 per person",
      //     },
      //     {
      //       id: 6,
      //       name: "$60 per person with transportation",
      //     },
      //   ],

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
  methods: {},
};
</script>

<template>
  <div class="sm:px-20 px-10 py-5 md:py-12 mt-10 md:mt-30">
    <!-- <div class="text-center pb-4">
      <h1
        v-for="heading in headings"
        :key="heading.id"
        class="heading text-secondary-dark border-color text-3xl sm:text-4xl font-general-medium mb-1 mt-20 text-center font-general-medium xl:text-2xl leading-none"
      >
        {{ heading.heading }}
      </h1>
    </div> -->

    <div class="flex flex-col md:flex-row">
      <!-- Contact details -->
      <ContactDetails />

      <!-- Contact form -->
      <ContactForm />
    </div>
  </div>
</template>
