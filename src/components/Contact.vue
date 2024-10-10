<script setup>
import ContactItem from "@/components/ContactItem.vue";
</script>

<template>
  <section
    class="w-full mx-auto h-[60vh] overflow-hidden bg-green-600 p-3"
    id="contact"
  >
    <h1 class="text-5xl text-white font-bold text-center mt-20 mb-12">
      GET IN TOUCH
    </h1>
    <div class="max-w-[850px] mx-auto overflow-hidden">
      <div class="flex">
        <div>
          <h3 class="text-white font-semibold text-2xl mb-6">
            My Contact Information
          </h3>
          <ul class="space-y-5">
            <ContactItem :icon="['fas', 'phone']" contactInfo="+639692304051" />
            <ContactItem
              :icon="['fas', 'envelope']"
              contactInfo="barnedodonjaziel57@gmail.com"
            />
            <ContactItem
              :icon="['fas', 'location-dot']"
              contactInfo="Santa,Rosa Laguna"
            />
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <div class="md:flex gap-2 w-full">
            <input
              type="text"
              placeholder="Name"
              class="p-2 focus:ring-1 w-full"
            />
            <input
              type="text"
              placeholder="Name"
              class="p-2 focus:ring-1 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
