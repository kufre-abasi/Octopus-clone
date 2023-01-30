<template>
    <div>
        <div class=" p-5 md:p-24">
        <div class="" style="">
            <header class="heading heading-center   " style="">

                <div class="eyebrow heading-center">
                    <div class="gradient-border small">
                        <div class="eyebrow-heading">LEARN</div>
                    </div>
                </div>

            <h2
            class="text-3xl text-gray-100  mb-10 mt-4 text-center font-general-medium leading-none"
      v-for="heading in headings"
      :key="heading.id"
            >
            {{ heading.heading }}
            </h2>
            </header>
        <div class=" ">
        <div class="  grid grid-cols-1 sm:grid-cols-4  mt-5 gap-3  " style="">
        <div class="resource-card  " style="">
        <div class="background">
            <div class="preview">
                <img src="https://a.storyblok.com/f/185929/501x281/044bd1b473/devops-guide.png" alt="Infinity loop with people sitting doing work on a laptop">
            </div>
            <div class="content text-gray-200">
                <h5 class="font-general-semibold text-lg mb-2 text-left">
                DevOps Guide
                </h5>

                <p class="font-general-regular text-sm text-left">Everything you’ll ever need to know about DevOps, written by our own DevOps engineers and experts.</p>
                

<div class="mt-4">
        <a href="https://octopus.com/devops/" class="underlined-arrow flex flex-row py-0 " onclick="this.blur()" style="">

        Read more

        <svg class="my-1 mx-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg>
        </a>
        <hr class="bg-cl w-1/3 "/>
    </div>
            </div>
        </div>
        </div>


        <div class="resource-card  " style="">
        <div class="background">
            <div class="preview">
                <img src="https://a.storyblok.com/f/185929/501x281/4377ccae42/github-actions.png" alt="Graphic showing plug in a socket with blue and purple background">
            </div>
            <div class="content text-gray-200">
                <h5 class="font-general-semibold text-lg mb-2 text-left">
                GitHub Actions
                </h5>

                <p class="font-general-regular text-sm text-left">When it comes to deployments, Octopus is the tool to supercharge your GitHub Actions workflows.</p>
                


                <div class="mt-4">
        <a href="https://octopus.com/devops/" class="underlined-arrow flex flex-row py-0 " onclick="this.blur()" style="">

        Read more

        <svg class="my-1 mx-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg>
        </a>
        <hr class="bg-cl w-1/3 "/>
    </div>

            </div>
        </div>
        </div>


        <div class="resource-card  " style="">
        <div class="background">
            <div class="preview">
                <img src="https://a.storyblok.com/f/185929/501x281/5128833d4f/documentation.png" alt="Cartoon image showing a bookshelf with an open book below it">
            </div>
            <div class="content text-gray-200">
                <h5 class="font-general-semibold text-lg mb-2 text-left">
                Documentation
                </h5>

                <p class="font-general-regular text-sm text-left">Explore our guides and examples to learn more about Octopus Deploy fundamentals and concepts.</p>
                


                <div class="mt-4">
        <a href="https://octopus.com/devops/" class="underlined-arrow flex flex-row py-0 " onclick="this.blur()" style="">

        Read more

        <svg class="my-1 mx-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg>
        </a>
        <hr class="bg-cl w-1/3 "/>
    </div>

            </div>
        </div>
        </div>


        <div class="resource-card  " style="">
        <div class="background">
            <div class="preview">
                <img src="https://a.storyblok.com/f/185929/501x281/fa0f6d319c/getting-started.png" alt="Cartoon showing bug getting shot with flame thrower">
            </div>
            <div class="content text-gray-200">
                <h5 class="font-general-semibold text-lg mb-2 text-left">
                Getting Started
                </h5>

                <p class="font-general-regular text-sm text-left">Follow our guides to get started with Octopus Cloud or your own self-hosted Octopus Server.</p>
                


                <div class="mt-4">
        <a href="https://octopus.com/devops/" class="underlined-arrow flex flex-row py-0 " onclick="this.blur()" style="">

        Read more

        <svg class="my-1 mx-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg>
        </a>
        <hr class="bg-cl w-1/3 "/>
    </div>

            </div>
        </div>
        </div>

        </div>
        </div>
        </div>
</div>

<!-- lass -->

<div class="banner stripe horizon-gradient  px-5 " style="">
    


    <header class="heading heading-center   ">
    
    
    <h2 class="font-general-medium text-3xl mb-2 text-gray-100">Get started with Octopus Deploy</h2>
    </header>
    
        <div class=" text-center mx-auto mb-3">
            <p class="font-general-regular text-md mt-1 text-gray-200">Start a free 30 day trial of Octopus Server or Octopus Cloud, or contact <br> us to discuss your goals and how Octopus Deploy can help.</p>
    
        </div>
    
        
    
    <div class="button-group center   " style="flex-direction:;">
        
        
    
    
    <a href="/start?location=home-bottom" class="btn primary btn-primary  text-gray-100 " onclick="this.blur()" style="">
    
        Start a trial
    
    </a>
        
    
    
    <a href="https://octopus.com/company/contact" class="btn secondary btn-secondary   text-gray-100" onclick="this.blur()" style="">
    
        Contact Sales
    
    </a>
    
    </div>
    </div>
    </div>
  
</template>

<script>
export default {
    setup() {
    return {
      activetab: "1",
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
          heading: "More resources",
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
  methods: {
    onChange(e) {
      this.e.target.value;
    },
  },

}
</script>

<style scoped>





.button-group.center, .flex-container-content.center {
    align-items: center;
    justify-content: center;
}
.button-group {
    flex-wrap: wrap;
    width: 100%;
}
.btn-secondary{
    border-color: #00ffa3;
}
.btn:not(.navbar-toggler).btn-primary {

background: #00ffa3;
    border-color: #00ffa3;
}
.button-group>.btn {
    margin: 16px 8px;
}
.btn:not(.navbar-toggler) {
    border-radius: 36px;
    border-width: 2px;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    padding: 10px 40px;
    transition: background .25s,color .25s,filter .25s;
}


.button-group, .flex-container-content {
    display: flex;
}



.bg-cl{
  border-color: #1fc0ff;
border-top-width: 1.5px;
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
.underlined-arrow {
    color: #1fc0ff;
    padding-bottom: 8px;
    position: relative;
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

.flex-container {
    position: relative;
}
.stripe {
    border: 0;
    padding-bottom: 80px;
    padding-top: 80px;
    position: relative;
}
.horizon-gradient {
    max-width: 100%;
    overflow: hidden;
    z-index: 1;
}
.resource-card {
    border-radius: 10px;
    box-shadow: 0 14px 20px rgb(0 0 0 / 25%);
    max-width: 100%;
    position: relative;
    z-index: 1;
}

.resource-card:after, .resource-card:before {
    border-radius: 10px;
    content: "";
    height: calc(100% + 2.2px);
    left: 0;
    margin: -1.1px;
    position: absolute;
    top: 0;
    width: calc(100% + 2.2px);
    z-index: -2;
}
.resource-card:before {
    background: linear-gradient(180.2deg,#173045 80.28%,#094777 91.98%);
}
.resource-card .background {
    align-content: start;
    background: #10212f;
    border-radius: 10px;
    display: grid;
    height: 100%;
    width: 100%;
}
.resource-card:after {
    background: linear-gradient(180.2deg,#173045 69.99%,rgba(12,176,242,.8) 91.98%);
    opacity: 0;
    transition: opacity .15s;
}
.resource-card:after, .resource-card:before {
    border-radius: 10px;
    content: "";
    height: calc(100% + 2.2px);
    left: 0;
    margin: -1.1px;
    position: absolute;
    top: 0;
    width: calc(100% + 2.2px);
    z-index: -2;
}
.resource-card .preview {
    /* grid-column: 1;
    grid-row: 1; */
    padding: 13px 13px 0;
}
.resource-card .preview img {
    border-radius: 10px;
    width: 100%;
}
.resource-card .content {
    /* grid-column: 1;
    grid-row: 2; */
    padding: 25px;
}
.horizon-gradient:before {
    background: linear-gradient(180deg,rgba(126,198,253,.7),rgba(13,128,216,.7) 0,rgba(126,198,253,0) 25.9%);
    top: 0;
    z-index: -2;
}
.horizon-gradient:after, .horizon-gradient:before {
    border-radius: 50%;
    content: "";
    height: 100%;
    left: -120px;
    position: absolute;
    width: calc(100% + 240px);
}
horizon-gradient:after, .horizon-gradient:before {
    border-radius: 50%;
    content: "";
    height: 100%;
    left: -120px;
    position: absolute;
    width: calc(100% + 240px);
}
.horizon-gradient:after {
    background: linear-gradient(180deg,#0b1f2e 0,#0c1a24 50.14%);
    top: 2px;
    z-index: -1;
}


.button-group.center, .flex-container-content.center {
    align-items: center;
    justify-content: center;
}
.button-group, .flex-container-content {
    display: flex;
}
</style>