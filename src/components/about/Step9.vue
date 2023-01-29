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

    <div class=" md:mx-24 mt-5 grid grid-cols-1 sm:grid-cols-2  mt-10 gap-7 md:px-12 ">
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
    <div class="">
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


<div class="grid grid-cols-1 sm:grid-cols-3  mt-10 sm:gap-10  mt-6">
<div class="">
    <div class="card mx-auto pricing-card mb-4">
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <div class="card__header">
                    <div class="d-flex text-normal">
                        <svg class="svg-inline--fa fa-user-alt w-5  mr-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="user-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#a5b2bd" d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path></svg><!-- <i class="fa fa-user-alt fs-18 mr-2"></i> Font Awesome fontawesome.com -->
                        <h6 class="m-0 text-gray-100    font-general-medium">Community</h6>
                    </div>
                    <p class="text-gray-300 text-sm mt-2 font-general-regular text-left">For personal projects and open source</p>
                    <hr class="color-grey-20">
                </div>
                <div class="card__price">
                    <div class="server-only" style="display: none">
                        <div class="d-flex align-items-baseline mb-2">
                            <h1 class="fw-400 mt-0 mb-0 mr-2">Free</h1>
                        </div>
                    </div>
                    <div class="cloud-only">
                        <div class="d-flex align-items-baseline mb-2">
                            <h1 class="fw-400 mt-0 mb-0 mr-2">$10</h1>
                            <p class="small mb-0">flat fee, per month</p>
                        </div>
                    </div>
                    <p class="small text-muted">Billed monthly</p>
                </div>
                <div class="card__features">
                    <ul class="fa-ul d-flex flex-column mt-3 ml-4" style="gap: var(--spacer-2);">
                        <li class="cloud-only">
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span>
                                <strong>5</strong>
                                <abbr>
                                    <abbr><a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. <a href='/pricing/faq#what-is-the-pricing-for-octopus-cloud'>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your cloud instance." data-original-title="What are deployment targets?">deployment targets</a></abbr>
                                </abbr>
                            </span>
                        </li>
                        <li class="server-only" style="display: none;">
                             <span class="fa-li">
                                  <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                             </span>
                             <span>
                                 <strong>5</strong> 
                                 <abbr><a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. <a href='/pricing/faq#what-is-the-pricing-for-octopus-server '>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your server instance." data-original-title="What are deployment targets?">deployment targets</a></abbr>
                            </span>
                        </li>
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span><strong>5</strong> projects</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="text-center align-self-center">
                <a href="/start?location=pricing-community" class="btn btn-primary m-auto nowrap">
                    <span>Start a trial</span>
                    <hover-button><svg class="hover-arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" style="vertical-align: baseline; margin-left: 6px; transform: rotate(0deg)">
                              <g fill-rule="evenodd">
                                <path class="hover-arrow-line" d="M0 5h7"></path>
                                <path class="hover-arrow-tip" d="M1 1l4 4-4 4" style=""></path>
                              </g>
                            </svg></hover-button>
                </a>
                <p class="fs-12 mt-2 mb-0 text-muted">Free for 30 days. No credit card required.</p>
            </div>
        </div>
    </div>
</div>
<div class="">
    <div class="card mx-auto pricing-card mb-4">
        <div class="card-body d-flex flex-column justify-content-between">
            <div class="mx-auto">
                <div class="card__header">
                    <div class="d-flex text-normal">
                        <svg class="svg-inline--fa fa-users w-5 mr-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="#a5b2bd" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg><!-- <i class="fa fa-users fs-18 mr-2"></i> Font Awesome fontawesome.com -->
                        <h6 class="m-0 text-gray-100">Professional</h6>
                    </div>
                    <p class="text-gray-300 text-sm mt-2 font-general-regular text-left">Continuous delivery for one or several teams</p>
                    <hr class="color-grey-20">
                </div>
                <div class="card__price">
                    <div class="d-flex align-items-baseline mb-2">
                        <h1 id="card-price" class="fw-400 mt-0 mb-0 mr-2">$12</h1>
                        <p class="small mb-0 cloud-only">per <abbr><a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. 
                            <a href='/pricing/faq#what-is-the-pricing-for-octopus-cloud'>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your cloud instance." data-original-title="What are deployment targets?">target
                            </a></abbr>, per month
                        </p>
                        <p class="small mb-0 server-only" style="display: none;">per <abbr><a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. 
                            <a href='/pricing/faq#what-is-the-pricing-for-octopus-server'>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your cloud instance." data-original-title="What are deployment targets?">target
                            </a></abbr>, per month
                        </p>
                    </div>
                    <p class="small text-muted cloud-only">Billed <span id="billing-cycle">annually</span>, 5 <abbr>
                        <a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. <a href='/pricing/faq#what-is-the-pricing-for-octopus-cloud'>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your cloud instance." data-original-title="What are deployment targets?">targets
                        </a></abbr> minimum
                    </p>
                    <p class="small text-muted server-only" style="display: none;">Billed <span id="billing-cycle">annually</span>, 5 <abbr>
                        <a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. <a href='/pricing/faq#what-is-the-pricing-for-octopus-server '>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your server instance." data-original-title="What are deployment targets?">targets
                        </a></abbr> minimum
                    </p>
                </div>
                <div class="cloud-only align-self-center">
                    <div class="card__billing-container d-flex justify-content-center p-2 border-grey30 w-100 mx-auto">
                        <button type="button" id="annually" data-selected="true" data-price="$12" data-billing-cycle="annually" class="btn btn-sm w-100 mr-2 btn-brand">
                            Annually
                            (-20%)
                        </button>
                        <button type="button" id="monthly" data-selected="false" data-price="$15" data-billing-cycle="monthly" class="btn btn-link btn-sm w-100">
                            Monthly
                        </button>
                    </div>
                </div>
                <div class="card__features">
                    <ul class="fa-ul d-flex flex-column mt-3 ml-4" style="gap: var(--spacer-2);">
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span><strong class="fw-500">Unlimited</strong> projects</span>
                        </li>
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span><strong class="fw-500">Unlimited</strong> users</span>
                        </li>
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span><strong class="fw-500">Unlimited</strong> spaces</span>
                        </li>
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span><strong class="fw-500">24/5</strong> support</span>
                        </li>
                        <li class="server-only" style="display: none;">
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span>Up to <strong class="fw-500">3</strong> instances</span>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="text-center align-self-center">
                <a href="/start?location=pricing-professional" class="btn btn-primary m-auto nowrap">
                    <span>Start a trial</span>
                    <hover-button><svg class="hover-arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" style="vertical-align: baseline; margin-left: 6px; transform: rotate(0deg)">
                              <g fill-rule="evenodd">
                                <path class="hover-arrow-line" d="M0 5h7"></path>
                                <path class="hover-arrow-tip" d="M1 1l4 4-4 4" style=""></path>
                              </g>
                            </svg></hover-button>
                </a>
                <p class="fs-12 mt-2 mb-0 text-muted">Free for 30 days. No credit card required.</p>
            </div>
        </div>
    </div>
</div>
<div class="">
    <div class="card mx-auto pricing-card mb-4">
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <div class="card__header">
                    <div class="flex text-normal">
                        <svg class="svg-inline--fa fa-building w-5 mr-2" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="#a5b2bd" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path></svg><!-- <i class="fa fa-building fs-18 mr-2"></i> Font Awesome fontawesome.com -->
                        <h6 class="m-0 text-gray-100">Enterprise</h6>
                        <span class="badge badge-primary ml-auto">BETA</span>
                    </div>
                    <p class="text-gray-300 text-sm mt-2 font-general-regular text-left">Advanced features for teams at scale</p>
                    <hr class="color-grey-20">
                </div>
                <div class="card__price">
                    <div class="d-flex align-items-baseline mb-2">
                        <h1 class="fw-400 mt-0 mb-0 mr-2">$18</h1>
                        <p class="small mb-0 cloud-only">per <abbr>
                            <a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. <a href='/pricing/faq#what-is-the-pricing-for-octopus-cloud'>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your cloud instance." data-original-title="What are deployment targets?">target
                            </a></abbr>, per month
                        </p>
                        <p class="small mb-0 server-only" style="display: none;">per <abbr>
                            <a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. <a href='/pricing/faq#what-is-the-pricing-for-octopus-server '>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your server instance." data-original-title="What are deployment targets?">target
                            </a></abbr>, per month
                        </p>
                    </div>
                        <p class="small text-muted cloud-only">Billed annually, 100 <abbr>
                            <a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. <a href='/pricing/faq#what-is-the-pricing-for-octopus-cloud'>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your cloud instance." data-original-title="What are deployment targets?">targets
                            </a></abbr> minimum
                        </p>
                        <p class="small text-muted server-only" style="display: none;">Billed annually, 100 <abbr>
                            <a tabindex="0" href="#" class="clickable" data-container="body" data-toggle="popover" data-placement="right" onclick="void(0);" title="" data-content="Deployment targets are the Windows and Linux servers, Kubernetes Clusters, and cloud PaaS resources you deploy to. <a href='/pricing/faq#what-is-the-pricing-for-octopus-server '>Learn more</a>.<br/><br/>You will only be charged for the targets you use in your server instance." data-original-title="What are deployment targets?">targets
                            </a></abbr> minimum
                        </p>
                </div>
                <div class="card__features">
                    <ul class="fa-ul d-flex flex-column mt-3 ml-4" style="gap: var(--spacer-2);">
                        <li class="server-only" style="display: none;">
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span>Advanced high availability</span>
                        </li>
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span>Insights &amp; DORA metrics</span>
                        </li>
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span>ServiceNow &amp; Jira Service Management integration</span>
                        </li>
                        <li class="server-only" style="display: none;">
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span><strong class="fw-500">Unlimited</strong> instances</span>
                        </li>
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span>24/7 support</span>
                        </li>
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span>Customer Success Manager</span>
                        </li>
                        <li>
                            <span class="fa-li">
                                <svg class="svg-inline--fa fa-check-circle fa-w-16 color-text-cyan-40 fs-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><!-- <i class="fa color-text-cyan-40 fa-check-circle fs-18"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span>Stream your Octopus audit logs to a SIEM provider</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="text-center align-self-center pricing-card__footer">
                <a href="/company/contact" class="btn btn-secondary m-auto nowrap">
                    <span>Contact sales</span>
                    <hover-button><svg class="hover-arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" style="vertical-align: baseline; margin-left: 6px; transform: rotate(0deg)">
                              <g fill-rule="evenodd">
                                <path class="hover-arrow-line" d="M0 5h7"></path>
                                <path class="hover-arrow-tip" d="M1 1l4 4-4 4" style=""></path>
                              </g>
                            </svg></hover-button>
                </a>
            </div>
        </div>
    </div>
</div>
</div>



    <div class="grid grid-cols-1 sm:grid-cols-3  mt-10 sm:gap-20 ">
      

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
    background-image: url(../../assets/images/octupos/blue-check-mark-icon.svg);
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

/* card styles */

.color-grey-20{
  border: 0;
    border-top: 1px solid #19334b;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.pricing-card {
    background: #10212f;
    border: 1px solid #173045;
    height: 100%;
    max-width: 350px;
    min-height: 550px;
}
.card {
    border: 0;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
    text-decoration: none!important;
    transition: all .1s ease-in;
}

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    /* background-color: #fff; */
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}

.justify-content-between {
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
}
.flex-column {
    -ms-flex-direction: column!important;
    flex-direction: column!important;
}
.d-flex {
    display: -ms-flexbox!important;
    display: flex!important;
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
}
</style>
