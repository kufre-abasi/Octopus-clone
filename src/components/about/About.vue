<script>
export default {
  setup() {
    return {
      image: "@/assets/images/kub1.jpg",
      bios: [
        {
          id: 1,
          bio:
            "Tribal Gateway is a company that specializes in providing assistance to tourists and individuals relocating to another country. They offer a wide range of services to make the transition as smooth as possible, from helping with visa applications and finding accommodation, to providing cultural orientation and language support. One of the key values of the company is their focus on supporting and connecting visitors and expats with the local community. They believe that by fostering a deep understanding and appreciation of the host culture, people are able to have a more authentic and fulfilling experience when traveling or living in a new country.",
        },
        {
          id: 2,
          bio:
            "Tribal Gateway also prides itself on being very personalized, meaning they understand and cater to each customer's individual needs, whether you're a student, a retiree, a family or a business traveler. Overall, Tribal Gateway is a company that aims to be a one-stop shop for those in need of assistance while travelling or relocating to a new country, and with their wide range of services, they believe to help make the transition as seamless and enjoyable as possible.",
        },
      ],
      headings: [
        {
          id: 1,
          heading: "About Us",
        },
      ],
      authorname: [
        {
          id: 1,
          name: "I'm Kufre-abasi Bassey, ",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="sm:px-20 px-10 py-5 md:py-12 mt-10 md:mt-30">
    <!-- <h1
      class="text-3xl text-secondary-dark border-b sm:text-4xl font-semibold mb-10 lg:mt-24 text-center font-general-medium xl:text-2xl leading-none"
      v-for="heading in headings"
      :key="heading.id"
    >
      {{ heading.heading }}
    </h1> -->

    <div class="block sm:flex sm:gap-10 mt-5 sm:mt-10">
      <!-- About details -->
      <div class="w-full sm:w-3/3 text-justify">
        <h2
          class="font-general-semibold sm:text-3xl text-lg text-gray-500 mb-8"
          v-for="heading in headings"
          :key="heading.id"
        >
          {{ heading.heading }}
        </h2>

        <p
          v-for="bio in bios"
          :key="bio.id"
          class="font-general-regular mb-4 text-gray-400 text-lg"
        >
          {{ bio.bio }}
        </p>
      </div>
      <!-- About profile image -->
      <img src="@/assets/images/hubu.jpg" height="50%" class="sm:w-2/5" alt="" />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 320px) {
  .heading {
    height: 50%;
  }
}
.img {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 1px 4px 8px #022c0c;
}
.border-b {
  border-bottom: solid 2px #022c0c;
}
</style>
