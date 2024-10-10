<script setup>
import { ref, computed, useSlots } from "vue";

const props = defineProps({
  title: String,
  img: String,
  hrefRepo: String,
  hrefLive: {
    type: String,
    default: null,
  },
});

const slots = useSlots();
const showFullDescription = ref(false);

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

// Get the slot description's content and handle truncation
const fullDescription = computed(() => slots.description()[0]?.children || "");
const isDescriptionLong = computed(() => fullDescription.value.length > 210);

// Display truncated description if it's long and not expanded
const truncatedDescription = computed(() => {
  if (isDescriptionLong.value && !showFullDescription.value) {
    return fullDescription.value.substring(0, 210) + "...";
  }
  return fullDescription.value;
});
</script>

<template>
  <div class="col-span-1">
    <img :src="img" alt="Weather" />
  </div>
  <div class="col-span-1 space-y-3 flex flex-col justify-start">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <div class="mb-5">
      <p class="text-lg font-normal">
        {{ truncatedDescription }}
        <!-- Conditionally render "See More" / "See Less" only if description is long -->
        <span
          v-if="isDescriptionLong"
          @click="toggleFullDescription"
          class="text-green-500 hover:text-green-600 mb-4 cursor-pointer"
        >
          {{ showFullDescription ? "See Less" : "See More" }}
        </span>
      </p>
    </div>
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
