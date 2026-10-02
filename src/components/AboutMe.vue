
<script setup>
import GradPic from "@/assets/images/GradPic.png";
</script>

<template>
  <section
    id="about"
    class="relative min-h-screen bg-[#0d1117] px-6 sm:px-10 lg:px-20 py-24 flex items-center "
  >
    <div class="w-full max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-14">
        <p
          class="text-sm sm:text-base uppercase tracking-[0.3em] text-green-500 mb-3"
        >
          Get to know me
        </p>

        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
        >
          About
          <span class="text-green-500">Me</span>
        </h1>

        <div class="mx-auto mt-5 h-1 w-16 rounded-full bg-green-500"></div>
      </div>

      <!-- Content -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <!-- Image -->
        <div class="relative flex justify-center">
          <!-- Decorative Glow -->
          <div
            class="absolute inset-0 bg-green-500/10 blur-3xl rounded-full"
          ></div>

          <!-- Image Card -->
          <div
            class="relative w-full max-w-md rounded-2xl border border-gray-800 bg-[#111820] p-3 shadow-2xl shadow-black/30"
          >
            <img
              :src="GradPic"
              alt="Don Jaziel Barnedo graduation picture"
              class="w-full h-auto rounded-xl object-cover"
            />

            <!-- Image Label -->
            <div
              class="absolute bottom-6 left-6 right-6 rounded-lg border border-gray-700 bg-[#0d1117]/90 backdrop-blur-sm px-4 py-3"
            >
              <p class="text-sm text-gray-400">
                Web Developer
              </p>

              <p class="font-semibold text-white">
                Don Jaziel Barnedo
              </p>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="space-y-7">
          <!-- Intro -->
          <div>
            <h2
              class="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              Building ideas into
              <span class="text-green-500">
                real applications.
              </span>
            </h2>

            <p
              class="text-gray-400 text-base sm:text-lg leading-relaxed"
            >
              I am a passionate web developer who enjoys turning ideas into
              functional and user-friendly web applications. I have experience
              working with HTML, CSS, JavaScript, Laravel, Vue.js, Tailwind CSS,
              WordPress, and other modern web technologies.
            </p>
          </div>

          <!-- Second Paragraph -->
          <p
            class="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            I am continuously improving my skills through real-world projects
            and hands-on development. I enjoy learning new technologies,
            solving problems, and finding better ways to build reliable and
            maintainable applications.
          </p>

          <!-- Quick Info -->
          <div
            class="grid grid-cols-2 gap-4 pt-2"
          >
            <div
              class="rounded-xl border border-gray-800 bg-[#111820] p-4 hover:border-green-500/50 transition-colors duration-300"
            >
              <p class="text-green-500 font-bold text-xl">
                1+
              </p>

              <p class="text-gray-500 text-sm mt-1">
                Year Experience
              </p>
            </div>

            <div
              class="rounded-xl border border-gray-800 bg-[#111820] p-4 hover:border-green-500/50 transition-colors duration-300"
            >
              <p class="text-green-500 font-bold text-xl">
                Web
              </p>

              <p class="text-gray-500 text-sm mt-1">
                Development
              </p>
            </div>
          </div>

          <!-- Button -->
          <div class="pt-2">
            <a
              href="#projects"
              class="inline-flex items-center gap-2 rounded-lg border border-green-500 px-6 py-3 font-semibold text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-[#0d1117] hover:-translate-y-1"
            >
              Explore My Work
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

