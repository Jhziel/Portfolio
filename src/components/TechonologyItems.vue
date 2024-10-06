<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <p class="bg-green-500 text-md py-2 px-4 text-white font-bold text-center">
    {{ name }}
  </p>
</template>
