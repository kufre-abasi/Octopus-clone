<template>
    <div>
      <div class="p-0">
        <!-- tabs -->
        <div  class=" pb-0">
          <a
            v-on:click="activetab = '1'"
            v-bind:class="[activetab === '1' ? 'active' : '']"
          >
            <slot name="tab1"></slot>
          </a>
          <a
            v-on:click="activetab = '2'"
            v-bind:class="[activetab === '2' ? 'active' : '']"
          >
            <slot name="tab2"></slot>
          </a>
        </div>

      </div>
      <!-- tabs  view  start here -->
      <div class="pt-2">
        <div v-if="activetab === '1'" class="tabcontent">
          <slot name="view1"></slot>
        </div>
        <div v-if="activetab === '2'" class="tabcontent">
          <slot name="view2"></slot>
        </div>
      </div>
      <!-- tabs  view  start end -->
    </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      activetab: "1",
    };
  },
  methods: {
    onChange(e) {
      this.e.target.value;
    },
  },
};
</script>