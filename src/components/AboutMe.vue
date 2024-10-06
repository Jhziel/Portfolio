<script setup>
import GradPic from "@/assets/images/GradPic.png";
</script>

<template>
  <section
    class="max-w-[1000px] mx-auto h-[90vh] overflow-hidden space-y-10 mb-20"
    id="about"
  >
    <h1
      class="text-5xl underline decoration-green-600 decoration-4 font-bold text-center"
    >
      About Me
    </h1>
    <div class="md:grid md:grid-cols-2 gap-14">
      <div class="col-span-1">
        <!-- Prevent image from shrinking and set width -->
        <img
          class="w-full h-auto object-cover"
          :src="GradPic"
          alt="Graduation Picture"
        />
      </div>

      <div class="col-span-1 space-y-10 px-10 mt-10">
        <!-- Set width for text -->
        <p class="font-semibold text-black text-lg text-wrap">
          I am a passionate web developer with a solid background in HTML, CSS,
          and JavaScript. Currently, I am expanding my skill set by exploring
          modern frameworks such as Tailwind CSS, Vue.js, and Laravel. I believe
          that learning is a lifelong journey, and I am committed to continually
          enhancing my expertise to deliver high-quality, dynamic web
          applications.
        </p>

        <p class="font-semibold text-black text-lg text-wrap">
          I’m eager to tackle new challenges in backend development, enhance my
          skills, and express my creativity through coding. My goal is to become
          a proficient backend developer and create robust systems that support
          stunning websites.
        </p>
      </div>
    </div>
  </section>
</template>
