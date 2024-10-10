<script setup>
defineProps({
  icon: Array,
  contactInfo: String,
});
</script>

<template>
  <li>
    <font-awesome-icon :icon="icon" class="text-white text-xl mr-2" />

    <span class="text-white text-xl">{{ contactInfo }}</span>
  </li>
</template>
