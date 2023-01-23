<script>
import feather from "feather-icons";
import ContactForm from "@/components/contact/ContactForm.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";
// import ContactForm from '@/components/FormSubmission/ContactForm.vue';
export default {
  components: {
    ContactForm,
    ContactDetails,
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Entry & Tour",
        },
        {
          id: 2,
          name: "Picnic Lunch",
        },
        {
          id: 3,
          name: "Photo",
        },
        {
          id: 4,
          name: "Souvenir Gift",
          icon: "map-pin",
        },
        {
          id: 5,
          name: "$40 per person",
        },
        {
          id: 6,
          name: "$60 per person with transportation",
        },
      ],
      headers: [
        {
          id: 1,
          name: "LEKKI CONSERVATION CENTER VIP PACKAGE Includes",
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
      <ContactDetails :contacts="contacts" :headers="headers" />

      <!-- Contact form -->
      <ContactForm />
    </div>
  </div>
</template>
