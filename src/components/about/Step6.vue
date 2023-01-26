<script>
export default {
  setup() {
    return {
      image: "@/assets/images/kub1.jpg",
      bios: [
        {
          id: 1,
          bio:
            "Octopus projects use the same deployment process across all your environments. Go to Production confidently as your process has already worked in other environments.",
        },
        {
          id: 2,
          bio:
            "With built-in rollback support, Octopus makes it easy to revert to the previous version.",
        },
      ],
      headings: [
        {
          id: 1,
          heading: "How Octopus works",
        },
      ],
      authorname: [
        {
          id: 1,
          name: "Reliable and risk-free deployments with rollback capabilities",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="py-20 mt-40">
    <div class="eyebrow heading-center">
      <div class="gradient-border">
        <div class="eyebrow-heading" alt="">PRODUCT TOUR</div>
      </div>
    </div>

    <h1
      class="text-2xl text-gray-100 sm:text-4xl font-semibold mb-5 mt-4 text-center font-general-medium md:text-3xl leading-none"
      v-for="heading in headings"
      :key="heading.id"
    >
      {{ heading.heading }}
    </h1>
    <!-- <p class="font-general-regular  text-text-secondary mt-4 text-lg">
      Octopus understands the full deployment journey in ways few other tools do.             
       <br class="md:show"/>
Make any
      deployment simple, wherever you deliver software.
    </p> -->

    <div class="grid grid-cols-1 sm:grid-cols-2  mt-10 sm:gap-20 ">
      <!-- About details -->
      <div class="w-full text-justify  py-40">
        <h1
          v-for="name in authorname"
          :key="name.id"
          class="font-general-bold mb-2 text-left text-text-secondary text-2xl"
        >
          {{ name.name }}
        </h1>

        <p
          v-for="bio in bios"
          :key="bio.id"
          class="font-general-regular text-left mb-4 text-gray-400 text-lg"
        >
          {{ bio.bio }}
        </p>
        <a class="dir underlined-arrow">Learn more <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg></a>
      </div>
      <!-- About profile image -->
      <img
        src="@/assets/images/octupos/process-3.png"
        class=" mt-5 sm:mb-0 sm:mt-10"
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
.border-b {
  border-bottom: solid 2px #022c0c;
}
.eyebrow-heading {
  background: linear-gradient(268.25deg, #0c2436 0.46%, #0b1f2e 97%),
    linear-gradient(95.05deg, #3fa3ef 0, #1d3b53 54.06%);
  border-radius: 6px;
  color: #2f95e3;
  font-size: 13px;
  font-weight: 600;
  height: 35px;
  margin: 1px;
  padding: 10px 45px;
  width: 100%;
}
.eyebrow-heading {
  color: #2f95e3;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.gradient-border {
  align-items: center;
  background: linear-gradient(95.05deg, #3fa3ef 0, #1d3b53 54.06%);
  border-radius: 6px;
  display: flex;
  height: 37px;
}
.eyebrow {
  display: flex;
  margin-bottom: 30px;
}
.heading-center {
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.underlined-arrow {
    color: #1fc0ff;
    padding-bottom: 8px;
    position: relative;
  }
  svg {
    overflow: hidden;
    vertical-align: middle;
}
</style>
