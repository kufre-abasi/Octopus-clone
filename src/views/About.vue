<script>
import Step1 from "@/components/about/Step1";
import Step2 from '@/components/about/Step2';
import Step3 from '@/components/about/Step3';
import Step4 from '@/components/about/Step4';
import Step5 from '@/components/about/Step5';
import Step6 from '@/components/about/Step6';
import Step7 from '@/components/about/Step7';
import Step8 from '@/components/about/Step8';
import Step9 from '@/components/about/Step9';
import Step10 from '@/components/about/Step10';
import feather from "feather-icons";

export default {
  name: "About",
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    Step10,
    // AboutClients,
  },
  data: () => {
    return {};
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
  <div class="bg-background-primary">
    <!-- About me -->
    <div class="">
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Step7 />
      <Step8 />
      <Step9 />
      <Step10 />
    </div>

    <!-- About counter -->
    <!-- <AboutCounter /> -->

    <!-- About counter -->
    <div class="container mx-auto">
      <!-- <AboutClients /> -->
    </div>
  </div>
</template>

<style scoped></style>
