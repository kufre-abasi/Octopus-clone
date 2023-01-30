<script>
// import feather from 'feather-icons';
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

export default {
  components: {
    Vue3Lottie
  },

  name: "Home",
  data: () => {
    return {
      // theme: '',
      AstronautJSON: 'https://www.octopus.com/octopus-public/animations/hero-cicd-pipeline-animation.json',
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
      <div class="button-group center   " style="flex-direction: row; ">
    
    


    <a  class="btn primary btn-primary   " onclick="this.blur()" style="">
    
        Start a trial
    
    </a>
        
    
    
    <a href="/lp/schedule-a-demo" class="btn secondary btn-secondary   " onclick="this.blur()" style="">
    
        Schedule a demo
    
    </a>
    
    </div>
      <!-- <div class="justify-center  md:mx-64 mx-1 mt-10 items-center text-center block md:flex md:flex-col-2 md:col-gap-2  ">
        <div class="justify-right items-right">
          <a
          class=" mx-0 text-sm bg-accent-primary cry90 bttn "
          aria-label=""
          te
        >
          <span class="text-sm sm:text-lg font-general-medium duration-100">
            Start a trial</span
          ></a
        >
        </div>
        <div class="justify-left items-left">
          <a
        class="   text-sm text-gray-100 border-2 bttn "
        >
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Schedule a Demo</span
          ></a
        >
        </div>
      </div> -->
    </div>
    <!-- animation-container -->
    <div class="w-full my-10">
      <Vue3Lottie class="hideOnMobile" :animationData="AstronautJSON" :height="200" :width="200" />
            <div class="hideOnMobile">animation section</div>
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

.button-group.center, .flex-container-content.center {
    align-items: center;
    justify-content: center;
}
.button-group {
    flex-wrap: wrap;
    width: 100%;
}
.button-group, .flex-container-content {
    display: flex;
}
.btn:not(.navbar-toggler).btn-primary {
    color: var(--cyan90);
    background: #00ffa3;
    border-color: #00ffa3;
}
@media screen and (max-width: 577px){ 
.button-group > .btn {
    width: 100%;
    margin: 9px 0px;
}}
.button-group > .btn {
    margin: 16px 8px;
}
.btn:not(.navbar-toggler) {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    border-radius: 36px;
    border-width: 2px;
    padding: 10px 40px;
    transition: background 0.25s ease 0s, color 0.25s ease 0s, filter 0.25s ease 0s;
}
.btn:not(.navbar-toggler).btn-secondary {
    color: #ffffff;
    background: transparent;
    border-color: #00ffa3;
}
@media screen and (max-width: 577px){ 
.button-group > .btn {
    width: 100%;
    margin: 9px 0px;
}}
.button-group > .btn {
    margin: 16px 8px;
}
.btn:not(.navbar-toggler) {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    border-radius: 36px;
    border-width: 2px;
    padding: 10px 40px;
    transition: background 0.25s ease 0s, color 0.25s ease 0s, filter 0.25s ease 0s;
}




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
    padding: 14px 20px;
    transition: background .25s,color .25s,filter .25s;
    /* background:#00b065; */
    border-color: #00ffa3;
    /* width: 100px; */
}
.cry90{   
   color: #113049;
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
display:none;
}
.hideOnMobile{

}
@media only screen and (max-width: 489px){
.hide{
display: block;

}
.hideOnMobile{
  display:none;
}

}
@media  (min-width: 992px){
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
