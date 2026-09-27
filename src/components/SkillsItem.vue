
<script setup>
defineProps({
  image: String,
  name: String,
});
</script>

<template>
  <div
    class="group flex items-center gap-4 rounded-xl border border-gray-800 bg-[#111820] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:bg-[#151e27] hover:shadow-lg hover:shadow-green-500/5"
  >
    <!-- Technology Icon -->
    <div
      class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-[#0d1117] p-2 transition-all duration-300 group-hover:border-green-500/30"
    >
      <img
        :src="image"
        :alt="`${name} logo`"
        class="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>

    <!-- Technology Name -->
    <div class="min-w-0">
      <p
        class="font-semibold capitalize text-gray-300 transition-colors duration-300 group-hover:text-white"
      >
        {{ name }}
      </p>

      <p class="mt-0.5 text-xs text-gray-600">
        Technology
      </p>
    </div>

    <!-- Arrow -->
    <span
      class="ml-auto text-gray-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-500"
    >
      →
    </span>
  </div>
</template>

