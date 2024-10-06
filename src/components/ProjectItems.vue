<script setup>
const props = defineProps({
  title: String,
  img: String,
  hrefRepo: String,
  hrefLive: {
    type: String,
    default: null,
  },
});

defineEmits([""]);
</script>

<template>
  <div class="col-span-1">
    <img :src="img" alt="Weather" />
  </div>
  <div class="col-span-1 space-y-3 flex flex-col justify-start">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p class="text-lg font-medium text-wrap">
      <slot name="description"></slot>
    </p>
    <div class="flex flex-wrap gap-2 items-center">
      <slot name="technologies"></slot>
    </div>
    <div class="flex gap-3 justify-end mt-2">
      <a
        v-if="hrefLive"
        class="px-8 py-2 cursor-pointer border-2 border-green-700 text-lg font-semibold hover:bg-green-600 hover:text-white hover:border-0 transition-all duration-300 ease-in-out transform hover:scale-105"
        target="_blank"
        :href="hrefLive"
      >
        <font-awesome-icon :icon="['fas', 'eye']" class="text-xl" /> Live
      </a>
      <a
        class="px-8 py-2 cursor-pointer border-2 border-green-700 text-lg font-semibold hover:bg-green-600 hover:text-white hover:border-0 transition-all duration-300 ease-in-out transform hover:scale-105"
        target="_blank"
        :href="hrefRepo"
      >
        <font-awesome-icon :icon="['fab', 'github']" class="text-xl" />
        Repo
      </a>
    </div>
  </div>
</template>
