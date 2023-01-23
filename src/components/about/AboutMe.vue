<script>
export default {
  setup() {
    return {
      image: "@/assets/images/kub1.jpg",
      bios: [
        {
          id: 1,
          bio:
            "I'm Kufre-abasi Bassey, a Front-End developer. I work with web technologies, making interactive user interfaces, exploring the JavaScript ecosystem, and that's how I make my living.",
        },
        {
          id: 2,
          bio:
            "I spend most of my time writing code, reading books, and doing all that gives me a special joy.",
        },
        {
          id: 3,
          bio:
            "I love programming, design, user interfaces, open source, and that's what I'm passionate about.",
        },
      ],
      headings: [
        {
          id: 1,
          heading: "About Me",
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
  <div class="mt-20 py-20">
    <h1
      class="text-3xl text-secondary-dark border-b sm:text-4xl font-semibold mb-10 lg:mt-24 text-center font-general-medium xl:text-2xl leading-none"
      v-for="heading in headings"
      :key="heading.id"
    >
      {{ heading.heading }}
    </h1>

    <div class="block sm:flex sm:gap-10 mt-5 sm:mt-10">
      <!-- About details -->
      <div class="w-full sm:w-3/3 text-justify py-10 sm:py-40">
        <!-- <h1
          v-for="name in authorname"
          :key="name.id"
          class="font-general-regular mb-0 text-secondary-dark font-bold text-xl"
        >
          {{ name.name }}
        </h1> -->

        <p
          v-for="bio in bios"
          :key="bio.id"
          class="font-general-regular mb-4 text-gray-400 text-lg"
        >
          {{ bio.bio }}
        </p>
      </div>
      <!-- About profile image -->
      <img
        src="@/assets/images/profileimg.jpg"
        class="img sm:w-2/5 mt-5 sm:mb-0 sm:mt-10"
        alt=""
      />
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
