<script setup>
defineProps({
  image: String,
  name: String,
});
</script>

<template>
  <div
    class="border border-gray-500 rounded-md p-2 flex justify-between items-center col-span-1"
  >
    <img height="32" width="32" :src="image" alt="HTML" class="h-8 w-8" />
    <p class="font-semibold uppercase">{{ name }}</p>
  </div>
</template>
