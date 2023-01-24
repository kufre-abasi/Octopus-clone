<script>
// import feather from 'feather-icons';
// import VueHtml2pdf from 'vue-html2pdf'
// import Download from '../files/Resume.pdf'

export default {
  components: {
    // Download,
    // VueHtml2pdf
  },

  name: "Home",
  data: () => {
    return {
      // theme: '',
    };
  },
  created() {
    // this.theme = localStorage.getItem('theme') || 'light';
  },
  mounted() {
    // feather.replace();
    // this.theme = localStorage.getItem('theme') || 'light';
  },
  updated() {
    // feather.replace();
  },
  methods: {
    downloadPDF() {
      this.$refs.DownloadComp.generatePdf();
    },
  },
};
</script>

<template>
  <section class="sm:flex-row my-30 sm:my-30 md:h-96 sm:h-96 h-86 w-auto py-40">
    <!-- Banner left contents -->
    <div class="w-auto md:w-auto text-center">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center text-gray-200 uppercase"
      >
        Accelerate software delivery with
        <span class="text-color font-general-semibold">Nreliable </span>deployments
      </h1>
      <p
        class="font-general-regular mt-2 text-lg sm:text-xl xl:text-lg text-center leading-none text-gray-200"
      >
        Octopus automates complex deployments and seamlessly integrates with your DevOps
        tools.
      </p>
      <div class="justify-center w-auto items-center text-center sm:block mt-12">
        <!-- <div> 
    <button @click="downloadPDF">Print Download</button>
    <VueHtml2pdf :manual-pagination="true" :enable-download="true" ref="DownloadComp">
      <section slot="pdf-content">
            <Download />
        </section>
    </VueHtml2pdf>
    
  </div>
 -->

        <a
          class="justify-center items-center w-36 sm:w-48 m-2 mt-12 mb-6 sm:mb-0 text-lg btn py-2.5 px-5 sm:py-3 rounded-sm focus:ring-1 duration-500"
          aria-label=""
          te
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100">
            Start a trial</span
          ></a
        >
        <a
          download="Resume.pdf"
          class="justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg btn py-2.5 px-5 sm:py-3 rounded-sm focus:ring-1 duration-500"
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Schedule a Demo</span
          ></a
        >
      </div>
    </div>
    <div></div>
    <!-- Banner right illustration -->
    <!-- <div class="w-full flex-col md:w-1/4 text-right float-right">
      <img v-if="theme === 'light'" src="@/assets/images/developer.svg" alt="Developer" />
      <img v-else src="@/assets/images/developer-dark.svg" alt="Developer" />
    </div> -->
  </section>
</template>

<style scoped>
@media screen and (max-width: 320px) {
  section {
    padding-top: 25px;
    /* height: 50%; */
  }
}
.btn {
  background: #022c0c;
  color: #fdfdfd;
}
.btn:hover {
  background: #3cff76;
}
.cutom-border {
  border: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

.text-color {
  color: #02801df8;
  text-shadow: #fcfdfd 2px;
  /* -webkit-text-stroke: 0.25px #3cff76; */
}
</style>
