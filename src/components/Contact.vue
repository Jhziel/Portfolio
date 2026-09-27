<script setup>
import ContactItem from "@/components/ContactItem.vue";
</script>
<template>
  <section
    id="contact"
    class="relative min-h-screen overflow-hidden bg-[#0d1117] px-6 py-24 sm:px-10 lg:px-20 fade-in-up"
  >
    <!-- Background Glow -->
    <div
      class="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
    ></div>
    <div
      class="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
    ></div>
    <div class="relative z-10 mx-auto w-full max-w-6xl">
      <!-- Section Header -->
      <div class="mb-14 text-center">
        <p class="mb-3 text-sm uppercase tracking-[0.3em] text-green-500">
          Let's connect
        </p>
        <h1 class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Get In <span class="text-green-500"> Touch </span>
        </h1>
        <div class="mx-auto mt-5 h-1 w-16 rounded-full bg-green-500"></div>
        <p
          class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          Have a project in mind, a job opportunity, or simply want to connect?
          Feel free to reach out.
        </p>
      </div>
      <!-- Contact Content -->
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
        <!-- Contact Information -->
        <div class="lg:col-span-2">
          <div class="mb-7">
            <h2 class="text-2xl font-bold text-white">Let's talk</h2>
            <p class="mt-3 leading-relaxed text-gray-400">
              I'm always open to discussing new opportunities, interesting
              projects, and ways we can work together.
            </p>
          </div>
          <ul class="space-y-4">
            <ContactItem :icon="['fas', 'phone']" contactInfo="+639692304051" />
            <ContactItem
              :icon="['fas', 'envelope']"
              contactInfo="barnedodonjaziel57@gmail.com"
            />
            <ContactItem
              :icon="['fas', 'location-dot']"
              contactInfo="Santa Rosa, Laguna"
            />
          </ul>
          <!-- Small Availability Card -->
          <div
            class="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-5"
          >
            <div class="flex items-center gap-3">
              <span
                class="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"
              ></span>
              <span class="font-medium text-green-400">
                Open to opportunities
              </span>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-gray-500">
              Available for web development projects and professional
              opportunities.
            </p>
          </div>
        </div>
        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <div
            class="rounded-2xl border border-gray-800 bg-[#111820] p-6 shadow-2xl shadow-black/20 sm:p-8"
          >
            <form
              action="mailto:barnedodonjaziel57@gmail.com"
              method="post"
              enctype="text/plain"
              class="space-y-5"
            >
              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@example.com"
                  class="w-full rounded-lg border border-gray-700 bg-[#0d1117] px-4 py-3 text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
              <!-- Subject -->
              <div>
                <label
                  for="subject"
                  class="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Hello there"
                  class="w-full rounded-lg border border-gray-700 bg-[#0d1117] px-4 py-3 text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Let's talk about..."
                  class="w-full resize-none rounded-lg border border-gray-700 bg-[#0d1117] px-4 py-3 text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                ></textarea>
              </div>
              <!-- Submit -->
              <button
                type="submit"
                class="group flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-[#0d1117] transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
              >
                Send Message
                <span
                  class="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <!-- Footer Decoration -->
      <div class="mt-20 flex items-center justify-center gap-3">
        <span class="h-px w-16 bg-gray-800"></span>
        <span class="text-xs uppercase tracking-widest text-gray-600">
          Thanks for visiting
        </span>
        <span class="h-px w-16 bg-gray-800"></span>
      </div>
    </div>
  </section>
</template>
