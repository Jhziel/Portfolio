<script setup>
defineProps({
  icon: Array,
  contactInfo: String,
});
</script>

<template>
  <li
    class="group flex items-center gap-4 rounded-xl border border-gray-800 bg-[#111820] p-4 transition-all duration-300 hover:border-green-500/50"
  >
    <div
      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500 transition-colors duration-300 group-hover:bg-green-500 group-hover:text-[#0d1117]"
    >
      <font-awesome-icon :icon="icon" class="text-lg" />
    </div>

    <span
      class="break-all text-sm text-gray-300 sm:text-base"
    >
      {{ contactInfo }}
    </span>
  </li>
</template>

