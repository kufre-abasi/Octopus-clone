<script>
  // import InfiniteSlideBar from 'vue-infinite-slide-bar'
  // import { coverflow } from 'vue-coverflow'

export default {
  components: {
        // InfiniteSlideBar,
      // coverflow

      },
  data() {
    
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
          heading: "Thousands of organizations automate their <br /> software delivery with Octopus Deploy",
        },
      ],
      logos:[
        {
          id:1,
          name:"@/assets/images/octupos/logo/auror-logo-inactive"
        },
        {
          id:2,
          name:"@/assets/images/octupos/logo/drivecentric-logo-inactive"
        },
        {
          id:3,
          name:"@/assets/images/octupos/logo/logo-recruitwizard-inactive"
        },
        {
          id:4,
          name:"@/assets/images/octupos/logo/logo-stackoverflow"
        },
        {
          id:5,
          name:"@/assets/images/octupos/logo/logo-white-guestline-inactive"
        },
        {
          id:6,
          name:"@/assets/images/octupos/logo/nasa-logo-inactive2"
        },
        {
          id:7,
          name:"@/assets/images/octupos/logo/poweredBy_ot_logo"
        }
      ],
      authorname: [
        {
          id: 1,
          name: "Reliable and risk-free deployments with rollback capabilities",
        },
      ],
      duration: "8s",
      direction: "",
      delay: "5s",
            coverList: [
        {
          cover: require('@/assets/images/octupos/auror_logo_inactive.svg'),
          title: 'React'
        }, {
          cover: require('@/assets/images/octupos/logo/drivecentric_logo_inactive.svg'),
          title: 'Angular'
        }, {
          cover: require('@/assets/images/octupos/logo/logo_recruitwizard_inactive.svg'),
          title: 'Vue'
        }, {
          cover: require('@/assets/images/octupos/logo/logo_stackoverflow.svg'),
          title: 'Webpack'
        }, {
          cover: require('@/assets/images/octupos/logo/logo_white_guestline_inactive.svg'),
          title: 'Yarn'
        }, {
          cover: require('@/assets/images/octupos/logo/nasa_logo_inactive2.svg'),
          title: 'Node'
        }
      ],
      codeOne: `
      <coverflow :coverList="coverList" :coverWidth="260" :index="2"></coverflow>
      `,
      codeTwo: `
      <coverflow :coverList="coverList" :coverWidth="260" :index="2" bgColor="#ddd"></coverflow>
      `,
      codeThree: `
      <coverflow :coverList="coverList" :coverWidth="260" :index="2" :coverShadow="true"></coverflow>
      `,
      codeFour: `
      <coverflow :coverList="coverList" :coverWidth="260" :coverSpace="100" :index="0" :coverFlat="true"></coverflow>
      `


    };
  },
    methods: {
    handleChange (index) {
      // eslint-disable-next-line
      console.log(`[Demo 1] You have click cover ${index}`)
    }
  }

};
</script>

<template>
  <div class="py-20 mx-8 md:mx-24">
    <div class="eyebrow heading-center">
      <div class="gradient-border">
        <div class="eyebrow-heading" alt="">CUSTOMERS</div>
      </div>
    </div>

    <h1
      class="text-2xl text-gray-100 sm:text-4xl font-semibold mb-5 mt-4 text-center font-general-medium md:text-3xl leading-none"
    >
    Thousands of organizations automate their <br/> software delivery with Octopus Deploy
        </h1>
    <!-- <p class="font-general-regular  text-text-secondary mt-4 text-lg">
      Octopus understands the full deployment journey in ways few other tools do.             
       <br class="md:show"/>
Make any
      deployment simple, wherever you deliver software.
    </p> -->
    <div>
  <!-- <div class="demo">
    <h2>Demo 1</h2>
    <coverflow :coverList="coverList" :coverWidth="260" :index="2" @change="handleChange"></coverflow>
    <pre v-highlightjs>
       <code class="javascript"> 
         // all example uses the same js
        import { coverflow } from 'vue-coverflow'

        export default {
          name: 'app',
          data () {
            return {
              coverList: [
                {
                  cover: 'http://ogu51f989.bkt.clouddn.com/react.png',
                  title: 'React'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/angular.png',
                  title: 'Angular'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/vue.png',
                  title: 'Vue'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/webpack.png',
                  title: 'Webpack'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/yarn.png',
                  title: 'Yarn'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/node.png',
                  title: 'Node'
                }
              ]
            }
          },
          components: {
            coverflow
          }
        } 
      </code> 
      <code class="html">{{ codeOne }}</code>
    </pre>
    <h2>Demo 2</h2>
    <coverflow :coverList="coverList" :coverWidth="260" :index="2" bgColor="#333"></coverflow>
    <pre v-highlightjs>
      <code class="html">{{ codeTwo }}</code>
    </pre>
    <h2>Demo 3</h2>
    <coverflow :coverList="coverList" :coverWidth="260" :index="2" :coverShadow="true"></coverflow>
    <pre v-highlightjs>
      <code class="html">{{ codeThree }}</code>
    </pre>
    <h2>Demo 4</h2>
    <coverflow :coverList="coverList" :coverWidth="260" :coverSpace="100" :index="0" :coverFlat="true"></coverflow>
    <pre v-highlightjs>
      <code class="html">{{ codeFour }}</code>
    </pre>
  </div> -->

      <!-- <infinite-slide-bar >
      <div class="items">
         <div v-for="logo in logos" :key="logo.id"> 
          <div class="">
            <img src="@/assets/images/octupos/auror_logo_inactive.svg">
          </div>
          <div class="">
            <img src="@/assets/images/octupos/logo/drivecentric_logo_inactive.svg">
          </div>
          <div class="">
            <img src="@/assets/images/octupos/logo/logo_recruitwizard_inactive.svg">
          </div>
          <div class="">
            <img src="@/assets/images/octupos/logo/logo_stackoverflow.svg">
          </div>
          <div class="">
            <img src="@/assets/images/octupos/logo/logo_white_guestline_inactive.svg">
          </div>
          <div class="">
            <img src="@/assets/images/octupos/logo/nasa_logo_inactive2.svg">
          </div>
          <div class="">
            <img src="@/assets/images/octupos/logo/poweredBy_ot_logo.svg">
          </div>

        </div> 
      </div>
    </infinite-slide-bar>     -->
    </div>
    
    
    <div class="grid grid-cols-1 sm:grid-cols-2  mt-10 sm:gap-20 ">
      <!-- About details -->
      <!-- <div class="w-full text-justify  py-40">
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
      </div> -->
      <!-- About profile image -->
      <!-- <img
        src="@/assets/images/octupos/process-3.png"
        class=" mt-5 sm:mb-0 sm:mt-10"
        alt=""
      /> -->
    </div>

    <!-- <div class="flex-container stripe   gradient-background">
<div class="flex-container-content container   center" style="flex-direction: column; ">
<header class="heading heading-center   " style="">
<div class="eyebrow heading-center">
<div class="gradient-border medium">
<div class="eyebrow-heading">PRODUCT TOUR</div>
</div>
</div>
<h2>How Octopus works</h2>
</header>
<div class="stripe product-highlights-grid" section-display-time-in-seconds="5">
<div id="product-highlights" class="product-highlights">
<div class="highlight-section selected" highlight-section="0">
<div class="loading-bar">
<div class="loading-bar-progress" style="--product-highlight-transition-time: 5s"></div>
<div class="mobile-bubble"></div>
</div>
<div class="highlight-content">
<div highlight-section-content="0" style="">
<img class="icon" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/icon-release.svg" alt="icon release">
</div>
<h3 class="highlight-section-heading">
Release
</h3>
<div class="highlight-section-content" highlight-section-content="0" style="">
<p>Set once, deploy often. Configure your deployment steps, create a new release to snapshot the process, and use that process consistently across your environments.</p>
<a href="https://octopus.com/docs/releases" class="underlined-arrow   " onclick="this.blur()" style="">
Learn more
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg></a>
<div class="highlight-image">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/release-octopus-deploy.png" alt="">
<figcaption></figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="highlight-section" highlight-section="1">
<div class="loading-bar">
<div class="loading-bar-progress" style="--product-highlight-transition-time: 5s"></div>
<div class="mobile-bubble"></div>
</div>
<div class="highlight-content">
<div highlight-section-content="1" style="display: none;">
<img class="icon" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/icon-deploy.svg" alt="icon release">
</div>
<h3 class="highlight-section-heading">
Deploy
</h3>
<div class="highlight-section-content" highlight-section-content="1" style="display: none;">
<p>Octopus seamlessly connects to either side of your deployment pipeline to deliver software. Pull code from your build server or CI platform of choice and deploy anywhere, like the cloud, data centers, Kubernetes, or on-premises servers.</p>
<a href="https://octopus.com/docs/deployments" class="underlined-arrow   " onclick="this.blur()" style="">
Learn more
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg></a>
<div class="highlight-image">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/deploy-octopus-deploy.png" alt="">
<figcaption></figcaption>
</figure>
 </div>
</div>
</div>
</div>
<div class="highlight-section" highlight-section="2">
<div class="loading-bar">
<div class="loading-bar-progress" style="--product-highlight-transition-time: 5s"></div>
<div class="mobile-bubble"></div>
</div>
<div class="highlight-content">
<div highlight-section-content="2" style="display: none;">
<img class="icon" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/icon-configure.svg" alt="icon configure">
</div>
<h3 class="highlight-section-heading">
Configure
</h3>
<div class="highlight-section-content" highlight-section-content="2" style="display: none;">
<p>Set up deployments any way that suits you. Create processes with our easy-to-use UI and over 500 free step templates, or use command lines and scripts. Store deployment processes in Git with Config as Code and branch and merge in Octopus. Easily manage environment differences with scoped variables.</p>
<a href="https://octopus.com/docs/projects" class="underlined-arrow   " onclick="this.blur()" style="">
Learn more
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg></a>
<div class="highlight-image">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/configure.png" alt="Configuring Octopus Deploy">
<figcaption></figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="highlight-section" highlight-section="3">
<div class="loading-bar">
<div class="loading-bar-progress" style="--product-highlight-transition-time: 5s"></div>
<div class="mobile-bubble"></div>
</div>
<div class="highlight-content">
<div highlight-section-content="3" style="display: none;">
<img class="icon" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/icon-operate.svg" alt="icon operate">
</div>
<h3 class="highlight-section-heading">
Operate
</h3>
<div class="highlight-section-content" highlight-section-content="3" style="display: none;">
<p>Octopus Runbooks allows Operations teams to automate routine and emergency operations tasks. Manage tasks like infrastructure provisioning, database management, and website failover and restoration with one click.

Set permissions so anyone on a team can start a runbook, freeing your Ops team from time-consuming, repetitive tasks.</p>
<a href="https://octopus.com/docs/runbooks" class="underlined-arrow   " onclick="this.blur()" style="">
Learn more
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg></a>
<div class="highlight-image">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/runbooks-3.png" alt="Octopus Deploy Runbooks">
<figcaption></figcaption>
</figure>
</div>
</div>
</div>
</div>
<div class="highlight-section" highlight-section="4">
<div class="loading-bar">
<div class="loading-bar-progress" style="--product-highlight-transition-time: 5s"></div>
<div class="mobile-bubble"></div>
</div>
<div class="highlight-content">
<div highlight-section-content="4" style="display: none;">
<img class="icon" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/icon-measure.svg" alt="icon measure">
</div>
<h3 class="highlight-section-heading">
Measure
</h3>
<div class="highlight-section-content" highlight-section-content="4" style="display: none;">
<p>Octopus's DevOps Insights uses DORA metrics to tell you exactly how you're performing so you can find areas for improvement in your deployment processes.</p>
<a href="https://octopus.com/docs/insights" class="underlined-arrow   " onclick="this.blur()" style="">
Learn more
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg></a>
<div class="highlight-image">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/measure-octopus-deploy.png" alt="">
<figcaption></figcaption>
</figure>
</div>
</div>
</div>
</div>
</div>
<div class="highlight-section-image">
<div highlight-section-image="0" class="highlight-image">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/release-octopus-deploy.png" alt="">
<figcaption></figcaption>
</figure>
</div>
<div highlight-section-image="1" class="highlight-image hide-complete">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/deploy-octopus-deploy.png" alt="">
<figcaption></figcaption>
</figure>
</div>
<div highlight-section-image="2" class="highlight-image hide-complete">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/configure.png" alt="Configuring Octopus Deploy">
<figcaption></figcaption>
</figure>
</div>
<div highlight-section-image="3" class="highlight-image hide-complete">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/runbooks-3.png" alt="Octopus Deploy Runbooks">
<figcaption></figcaption>
</figure>
</div>
<div highlight-section-image="4" class="highlight-image hide-complete">
<figure class="image-wrapper">
<img class="  " style="" src="./Continuous delivery &amp; deployment automation tool for DevOps teams _ Octopus Deploy - Octopus Deploy_files/measure-octopus-deploy.png" alt="">
<figcaption></figcaption>
</figure>
</div>
</div>
</div>
<script>
    $(document).ready(() => {
        window.createProductHighlight();
    });
</script>
</div>
</div> -->
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
.items { display: flex; justify-content: space-around; } 
</style>
