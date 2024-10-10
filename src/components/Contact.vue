<script setup>
import ContactItem from "@/components/ContactItem.vue";
</script>

<template>
  <section
    class="w-full mx-auto h-auto overflow-hidden bg-green-600 p-3 fade-in-up"
    id="contact"
  >
    <h1 class="text-5xl text-white font-bold text-center mt-20 mb-12">
      GET IN TOUCH
    </h1>
    <div class="max-w-[850px] mx-auto overflow-hidden">
      <div class="md:flex gap-10">
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
        <div class="flex-grow md:mt-0 mt-5 px-3">
          <form
            action="mailto:barnedodonjaziel57@gmail.com"
            class="w-full flex flex-col gap-5"
          >
            <div>
              <label for="email" class="text-white text-lg font-medium mb-2"
                >Your Email</label
              >
              <input
                type="text"
                placeholder="example@example.com"
                id="email"
                class="p-2 rounded-md focus:ring-1 w-full"
              />
            </div>

            <div>
              <label for="email" class="text-white text-lg font-medium mb-2"
                >Subject</label
              >
              <input
                type="text"
                placeholder="Hello There"
                id="subject"
                class="p-2 rounded-md focus:ring-1 w-full"
              />
            </div>

            <div>
              <label
                for="message"
                class="block mb-2 text-lg font-medium text-white"
                >Your message</label
              >
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Lets talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-500 text-white font-medium text-md py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
