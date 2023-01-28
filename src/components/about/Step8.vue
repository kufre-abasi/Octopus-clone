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
  <div class="">
    <div class="hide">
      <div class="content px-3">
        <header class="heading heading-center max-w-430  " style="">
        <div class="eyebrow heading-center">
        <div class="gradient-border medium">
        <div class="eyebrow-heading pt-2">INTEGRATIONS</div>
        </div>
        </div>
        <h1 class="font-general-regular mb-2 text-center justify-center text-text-secondary text-3xl"
        >Deploy almost anything <br/> without scripting</h1>
        <div class="mt-4 font-general-regular justify-center text-center mb-4 text-gray-400 text-md"><p>Octopus has over 500 integrations with the tools DevOps teams use, making setup easy.</p>
        </div>
        </header>
        <!-- <hr class="bg-cl w-1/6 "/> -->
        </div>
      
            <!-- <img
        src="@/assets/images/octupos/integrations-mobile.svg"
        class=" mt-5 sm:mb-0 sm:mt-10 "
        alt=""
      /> -->
        <figure class="image-wrapper px-3">
            <img class="  " style="" src="https://a.storyblok.com/f/185929/x/910f777bff/integrations-mobile.svg" alt="">
            <figcaption></figcaption>
        </figure>
        <p class="text-gray-300 text-xl mb-5">Plus many more.</p>
      <div>        
        <a href="https://library.octopus.com/listing" target="_blank" class="underline-arrow  flex  p-0 justify-center " onclick="this.blur()" style="">
               View all        
               <svg class="my-1 mx-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg>
        </a>
      </div>

    </div>
    <!-- integrations-mobile.svg -->
    <div class="integrations-block hideOnmobile">
        <div class="image " style="background-image: url(&quot;https://a.storyblok.com/f/185929/x/ec773abb47/draft-integrations.svg&quot;);"></div>
        <div class="content">
        <header class="heading heading-center max-w-430  " style="">
        <div class="eyebrow heading-center">
        <div class="gradient-border medium">
        <div class="eyebrow-heading pt-2">INTEGRATIONS</div>
        </div>
        </div>
        <h1 class="font-general-regular mb-2 text-center text-text-secondary text-4xl"
>Deploy almost anything <br/> without scripting</h1>
        <div class="mt-5 font-general-regular text-center mb-4 text-gray-400 text-md"><p>Octopus has over 500 integrations with the tools DevOps teams use, making setup easy.</p>
        </div>
        </header>
        <a href="https://library.octopus.com/listing" target="_blank" class="underlined-arrow   p-0 mt-5 flex justify-center " onclick="this.blur()" style="">       View all        <svg class="my-1 mx-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41999 0.915365L6.03044 0.291039C6.28892 0.0266849 6.70689 0.0266849 6.96262 0.291039L12.3082 5.7553C12.5667 6.01965 12.5667 6.44712 12.3082 6.70866L6.96262 12.1757C6.70414 12.4401 6.28617 12.4401 6.03044 12.1757L5.41999 11.5514C5.15876 11.2842 5.16426 10.8483 5.43099 10.5868L8.74449 7.3583H0.84159C0.475868 7.3583 0.181641 7.05739 0.181641 6.68335V5.78342C0.181641 5.40939 0.475868 5.10848 0.84159 5.10848H8.74449L5.43099 1.87998C5.16151 1.61844 5.15601 1.18253 5.41999 0.915365Z" fill="currentColor"></path></svg>
        </a>
        <!-- <hr class="bg-cl w-1/6 "/> -->
        </div>
    </div>

  </div>
</template>

<style scoped>
.integrations-block:not(.mobile) .image {
    background-position: 50%;
    background-repeat: no-repeat;
    bottom: 0;
    left: 0;
    overflow: visible;
    position: absolute;
    right: 0;
    top: 0;
}
.integrations-block:not(.mobile) {
    height: 1000px;
    margin-bottom: 80px;
    margin-top: 80px;
    position: relative;
}
.integrations-block:not(.mobile) .content {
    position: relative;
    text-align: center;
    top: 37%;
}


.heading-center {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
.integrations-block.mobile header, .integrations-block:not(.mobile) .content header>div {
    margin: auto;
    max-width: 300px;
}
.heading .eyebrow {
    display: flex;
    margin-bottom: 30px;
}
.heading-center {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.heading>* {
    margin-top: 16px;
}
.heading .gradient-border.medium {
    width: 176px;
}
.heading .gradient-border {
    align-items: center;
  background: linear-gradient(95.05deg, #3fa3ef 0, #1d3b53 54.06%);
    border-radius: 6px;
    display: flex;
    height: 37px;
}
.heading .eyebrow-heading {
  background: linear-gradient(268.25deg, #0c2436 0.46%, #0b1f2e 97%),
    linear-gradient(95.05deg, #3fa3ef 0, #1d3b53 54.06%);
    border-radius: 6px;
  color: #2f95e3;
  font-size: 13px;
    font-weight: 600;
    height: 35px;
    margin: 1px;
    padding: 10px 30px;
    width: 100%;
}
.eyebrow-heading {
    color: #2f95e3;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
}


.underlined-arrow {
    color: #2f95e3;
    padding-bottom: 8px;
    /* position: relative; */
}

  svg {
    overflow: hidden;
    vertical-align: middle;
}
svg:not(:root) {
    overflow: hidden;
}

.underline-arrow:after {
    border-bottom: 1px solid;
    bottom: 0;
    content: "";
    height: 1px;
    margin: 0 auto;
    position: absolute;
    right: 0;
    left:0;
    width: 25%;
}
.content .underlined-arrow:after{
  border-bottom: 1px solid;
    bottom: 0;
    content: "";
    height: 1px;
    margin: 0 auto;
    position: absolute;
    right: 0;
    left:0;
    width: 6%;
}
.image-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
}
figure {
    page-break-inside: avoid;
}
figure {
    margin: 0 0 1rem;
}
.hide{
display:none;
}

@media only screen and (max-width: 489px){
.hide{
display: block;
}}


.hideOnmobile{
display:block;
}

@media only screen and (max-width: 489px){
.hideOnmobile{
display: none;
}}


@media screen and (max-width: 320px) {
  .heading {
    height: 50%;
  }
}
.border-b {
  border-bottom: solid 2px #022c0c;
}
/* .eyebrow-heading {
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
} */
.underlined-arrow {
    color: #1fc0ff;
    padding-bottom: 8px;
    position: relative;
  }

.bg-cl{
  border-color: #1fc0ff;
border-top-width: 3px;
}
/* .gradient-background {
    background: linear-gradient(180deg,rgba(7,14,20,0),#070e14);
}
.flex-container {
    position: relative;
}
.stripe {
    border: 0;
    padding-bottom: 80px;
    padding-top: 80px;
    position: relative;
} */
</style>
