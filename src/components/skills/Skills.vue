<script>
import htmllogo from "@/assets/images/skillsLogo/html.png";
import csslogo from "@/assets/images/skillsLogo/css.png";
import gitlogo from "@/assets/images/skillsLogo/git.png";
import vuelogo from "@/assets/images/skillsLogo/vuejs.png";
import tailwindlogo from "@/assets/images/skillsLogo/tailwindcss.png";
import bootstraplogo from "@/assets/images/skillsLogo/bootstrap.png";
import nuxtlogo from "@/assets/images/skillsLogo/nuxtjs.png";
import jslogo from "@/assets/images/skillsLogo/js.png";
export default {
  components: {},
  data: () => {
    return {
      image: "@/assets/images/kub1.jpg",
      skills: [
        {
          id: 1,
          txt: " HTML",
          img: htmllogo,
        },
        {
          id: 2,
          txt: " CSS",
          img: csslogo,
        },
        {
          id: 3,
          txt: " JavaScript",
          img: jslogo,
        },
        {
          id: 4,
          txt: "Vue.js ",
          img: vuelogo,
        },
        {
          id: 5,
          txt: " Nuxt.js",
          img: nuxtlogo,
        },
        {
          id: 6,
          txt: "Bootstrap",
          img: bootstraplogo,
        },
        {
          id: 7,
          txt: "TailwindCSS",
          img: tailwindlogo,
        },
        {
          id: 8,
          txt: "Git",
          img: gitlogo,
        },
      ],
      headings: [
        {
          id: 1,
          heading: "My Skills",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="sm:flex-row mt-8 sm:mt-10 h-auto w-auto py-10 container mx-auto">
    <div class="skill sm:py-5 py-2">
      <h1
        class="text-3xl text-secondary-dark border-b sm:text-4xl font-semibold mb-10 lg:mt-24 text-center font-general-medium xl:text-2xl leading-none"
        v-for="heading in headings"
        :key="heading.id"
      >
        {{ heading.heading }}
      </h1>

      <div
        class="font-general-regular text-gray-400 text-lg text-center skills rounded-lg py-5"
      >
        <img
          v-for="txt in skills"
          :key="txt.id"
          :src="txt.img"
          class="w-1/6 sm:mb-0 sm:mt-0 inline"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-color {
  color: #022c0c;
  text-shadow: #fcfdfd 2px;
  /* -webkit-text-stroke: 0.25px #3cff76; */
}
/* .skills {
  border: solid 2px #022c0c;
} */

.border-b {
  border-bottom: solid 2px #022c0c;
}
</style>
