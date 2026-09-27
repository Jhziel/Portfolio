```vue
<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <span
    class="inline-flex items-center rounded-md border border-gray-700 bg-[#0d1117] px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-green-500/50 hover:text-green-400"
  >
    {{ name }}
  </span>
</template>
```
