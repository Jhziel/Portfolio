
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

const fullDescription = computed(() => {
  const content = slots.description?.()?.[0]?.children;
  return typeof content === "string" ? content.trim() : "";
});

const isDescriptionLong = computed(() => fullDescription.value.length > 210);

const truncatedDescription = computed(() => {
  if (isDescriptionLong.value && !showFullDescription.value) {
    return fullDescription.value.substring(0, 210).trim() + "...";
  }

  return fullDescription.value;
});
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#111820] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/50 hover:shadow-green-500/5"
  >
    <!-- Project Image -->
    <div class="relative overflow-hidden">
      <img
        :src="img"
        :alt="`${title} project screenshot`"
        class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Image Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#111820] via-transparent to-transparent opacity-80"
      ></div>

      <!-- Project Number / Decoration -->
      <div
        class="absolute top-4 right-4 rounded-full border border-white/10 bg-[#0d1117]/80 px-3 py-1 text-xs font-semibold text-gray-300 backdrop-blur-sm"
      >
        PROJECT
      </div>
    </div>

    <!-- Project Content -->
    <div class="flex flex-1 flex-col p-6">
      <!-- Title -->
      <h2
        class="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-green-400"
      >
        {{ title }}
      </h2>

      <!-- Description -->
      <div class="mt-4 flex-1">
        <p class="text-sm sm:text-base leading-relaxed text-gray-400">
          {{ truncatedDescription }}

          <button
            v-if="isDescriptionLong"
            type="button"
            @click="toggleFullDescription"
            class="ml-1 font-medium text-green-500 hover:text-green-400 transition-colors"
          >
            {{ showFullDescription ? "See Less" : "See More" }}
          </button>
        </p>
      </div>

      <!-- Technologies -->
      <div class="mt-6">
        <p
          class="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500"
        >
          Technologies
        </p>

        <div class="flex flex-wrap gap-2">
          <slot name="technologies"></slot>
        </div>
      </div>

      <!-- Buttons -->
      <div
        class="mt-6 flex flex-wrap gap-3 border-t border-gray-800 pt-5"
      >
        <a
          v-if="hrefLive"
          :href="hrefLive"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-[#0d1117] transition-all duration-300 hover:bg-green-400 hover:-translate-y-0.5"
        >
          <font-awesome-icon
            :icon="['fas', 'eye']"
          />
          Live Demo
        </a>

        <a
          :href="hrefRepo"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-green-500 hover:text-green-400 hover:-translate-y-0.5"
        >
          <font-awesome-icon
            :icon="['fab', 'github']"
          />
          Repository
        </a>
      </div>
    </div>
  </article>
</template>

