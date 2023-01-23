<script>
export default {
  props: ["contacts", "headers"],
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div class="text-left max-w-xl">
      <h2
        v-for="header in headers"
        :key="header.id"
        class="font-general-medium sm:text-2xl text-lg text-gray-500 mb-8"
      >
        {{ header.name }}
      </h2>
      <ul class="font-general-regular">
        <li class="flex" v-for="contact in contacts" :key="contact.id">
          <p :href="contact.href" target="_blank" class="text-lg mb-4 text-gray-400">
            -{{ contact.name }}
          </p>
        </li>
      </ul>
      <p class="font-general-regular text-gray-500 text-md mb-8">
        Please fill out the form to create your custom package.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
