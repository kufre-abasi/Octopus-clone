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
          heading: "Plans for teams at any scale",
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
  <div class="py-20 px-8 md:px-24 flex-container stripe   stripe-navy">
    <div class="eyebrow heading-center">
      <div class="gradient-border">
        <div class="eyebrow-heading" alt="">PRICING</div>
      </div>
    </div>

    <h1
      class="text-2xl text-gray-100 sm:text-4xl  mb-5 mt-4 text-center font-general-medium md:text-5xl leading-none"
      v-for="heading in headings"
      :key="heading.id"
    >
      {{ heading.heading }}
    </h1>
    <p class="font-general-regular  text-text-secondary mt-4 text-xl">
      Our plans cover enterprise, small teams, personal projects, and everything in between.

<br class="md:show"/>
    </p>

    <div class=" mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2  mt-10 sm:gap-20 ">
    <div class="">
        <div class="radio-button">
            <input type="radio" id="cloud" name="platform" value="cloud" checked="checked">
            <label for="cloud" class="radio-button text-left  py-4">
                <strong class="text-lg text-gray-100">Cloud</strong>
                <br>
                <span class="text-md text-gray-400 font-general-regular">Deployments as-a-service</span>
            </label>
        </div>
    </div>
    <div class="col-md">
        <div class="radio-button">
            <input type="radio" id="server" name="platform" value="server">
            <label for="server" class="radio-button text-left py-4" >
                <strong class="text-lg text-gray-100">Server</strong>
                <br>
                <span class="text-md text-gray-400 font-general-regular">Octopus on your infrastructure</span>
            </label>
        </div>
    </div>
</div>

    <div class="grid grid-cols-1 sm:grid-cols-2  mt-10 sm:gap-20 ">

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
.bg-cl{
  border-color: #1fc0ff;
border-top-width: 3px;
}
.gradient-background {
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
}

.radio-button > input[type="radio"] {
    display: none;
}
.radio-button input[type=radio]:checked+label {
    background:#10212f;
    border: 2px solid #49ffbe;
}
/* .radio-button input[type=radio]:checked+label {
    background: #ecf0f3;
    border-color: #a5b2bd;
} */
.radio-button>label {
  background:#10212f;
    border: 1px solid #173045;
    border-radius: 3px;
    cursor: hand;
    display: block;
    height: 100%;
    padding: 1rem 1rem 1rem 3.8rem;
    position: relative;
}
/* .radio-button>label {
    background: #f9fafa;
    border: 1px solid #e0e0e0;
    cursor: pointer;
} */
.stripe.stripe-navy {
    background: #0f2535;
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
.radio-button input[type=radio]:checked+label:before {
    background-image: url(@/assets/images/octupos/blue-check-mark-icon.svg);
    /* background-image: url(../assets/images/bg-lekki.png); */

    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 16px;
    border-color: #0d80d8;
    color: #0d80d8;
}
.radio-button>label:before {
    align-items: center;
    background-color: #fff;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    color: #fff;
    content: "";
    display: flex;
    font-size: 16px;
    height: 30px;
    justify-content: center;
    left: 1rem;
    position: absolute;
    top: calc(50% - 15px);
    width: 30px;
}
</style>
