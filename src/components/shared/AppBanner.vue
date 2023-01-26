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
  <section
    class="sm:flex-row  w-auto   py-60 md:py-50 "
  >
  <div class="page-highlight left"></div>
  <div class="page-highlight right"></div>
    <!-- Banner left contents -->
    <div class="w-auto md:w-auto text-center  md:mt-0 mt-20 pt-10 md:pt-0 ">
      <h1 class="font-general-semibold heading text-center md:text-5xl text-3xl text-gray-100">
        Accelerate software delivery 
        <br class="md:show"/>
        with
        <span class="focus-text">reliable </span> deployments
      </h1>
      <div class="mt-4 text-center">
      <p
        class="font-general-regular  para "
      >
        Octopus automates complex deployments and seamlessly   
             <br class="md:show"/>
 integrates with your DevOps
        tools.
      </p>
      </div>
      <div class="justify-center  md:mx-64 mx-1 mt-10 items-center text-center grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 ">

        <a
          class="justify-center items-center text-sm bg-accent-primary cry90 bttn "
          aria-label=""
          te
        >
          <!-- <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i> -->
          <span class="text-sm sm:text-lg font-general-medium duration-100">
            Start a trial</span
          ></a
        >
        <a
        class="justify-center items-center   text-sm text-gray-100 border-2 bttn "
        >
          <!-- <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i> -->
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Schedule a Demo</span
          ></a
        >
      </div>
    </div>
    <div></div>
    <!-- animation-container -->
    <div class="w-full my-10">
      <!-- <lottie-player src="https://octopus.com/octopus-public/animations/hero-cicd-pipeline-animation.json" autoplay="" loop="" speed="1" intermission="1" class=" hide-sm hide-xs " style="margin-top: 0px;" background="transparent">

</lottie-player> -->

      <div>animation section</div>
      <div class="hide">      
        <img
        src="@/assets/images/octupos/draft-home-hero-graphic-mobile.svg"
        class=" mt-5 sm:mb-0 sm:mt-10"
        alt=""
      />
</div>
</div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 320px) {
  section {
    padding-top: 25px;
    /* height: 50%; */
  }
}
.cutom-border {
  border: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

.text-color {
  color: #02801df8;
  text-shadow: #fcfdfd 2px;
  /* -webkit-text-stroke: 0.25px #3cff76; */
}
.focus-text {
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(180deg, #76baed, #76f5a9);
  -webkit-background-clip: text;
  display: inline-block;
  -moz-transition: width 0.15s ease-in-out, left 0.15s ease-in-out;
  -webkit-transition: width 0.15s ease-in-out, left 0.15s ease-in-out;
  -o-transition: width 0.15s ease-in-out, left 0.15s ease-in-out;
  transition: width 0.15s ease-in-out, left 0.15s ease-in-out;
}
.bttn {
  border-radius: 36px;
    font-weight: 400;
    line-height: 22px;
    padding: 14px 0px;
    transition: background .25s,color .25s,filter .25s;
    /* background:#00b065; */
    border-color: #00ffa3;
}
.cry90{    color: #113049;
}
.heading  {
/* font-size: 48px; */
line-height: 1.4em;
font-weight: 400;
/* font-family: Roboto,Helvetica Neue,Helvetica,Arial,sans-serif; */
}
.para{
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 20px;
    color:#a9bbcb;
    line-height: 1.3em;

}
.hide{
display: none;
}
@media (min-width: 992px){
.page-highlight.left {
    width: 578px;
}}
.page-highlight.left {
    height: 920px;
    left: 0;
}
.page-highlight {
    background: radial-gradient(at 0 0,rgba(0,62,107,.4) 35%,#00000000 70%);
    position: absolute;
    top: 0;
    width: 50%;
}

@media  (min-width: 992px){
.page-highlight.right {
    width: 50%;
}}
.page-highlight.right {
    height: 782px;
    right: 0;
    transform: matrix(-1,0,0,1,0,0);
}
.page-highlight {
    background: radial-gradient(at 0 0,rgba(0,62,107,.4) 35%,#00000000 70%);
    position: absolute;
    top: 0;
    width: 50%;
}
</style>
