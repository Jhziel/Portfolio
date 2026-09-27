
<script setup>
import WeatherImg from "@/assets/images/projects/WeatherApp.png";
import Portfolio from "@/assets/images/projects/Portfolio.png";
import Capstone from "@/assets/images/projects/Capstone.png";
import ProjectItems from "@/components/ProjectItems.vue";
import TechonologyItems from "./TechonologyItems.vue";
</script>

<template>
  <section
    id="projects"
    class="relative min-h-screen bg-[#0d1117] px-6 sm:px-10 lg:px-20 py-24 fade-in-up"
  >
    <div class="mx-auto w-full max-w-6xl">

      <!-- Section Header -->
      <div class="mb-14 text-center">
        <p
          class="mb-3 text-sm uppercase tracking-[0.3em] text-green-500"
        >
          My recent work
        </p>

        <h1
          class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          My
          <span class="text-green-500">Projects</span>
        </h1>

        <div
          class="mx-auto mt-5 h-1 w-16 rounded-full bg-green-500"
        ></div>

        <p
          class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          Here are some of the projects I've built while learning and
          developing my skills in modern web development.
        </p>
      </div>

      <!-- Projects Grid -->
      <div
        class="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        <!-- Capstone -->
        <ProjectItems
          title="Impound Vehicle Management System"
          :img="Capstone"
          hrefRepo="https://github.com/Jhziel/Impound-Vehicle-System"
        >
          <template #description>
            This capstone project, the Impound Vehicle Management System, was a
            collaborative effort where I was involved in every stage, from
            planning to deployment. The system is designed to efficiently
            manage impounded vehicles, track violations, and oversee parking
            lot space.
          </template>

          <template #technologies>
            <TechonologyItems name="HTML" />
            <TechonologyItems name="CSS" />
            <TechonologyItems name="JavaScript" />
            <TechonologyItems name="Bootstrap" />
            <TechonologyItems name="jQuery" />
            <TechonologyItems name="MySQL" />
            <TechonologyItems name="PHP" />
          </template>
        </ProjectItems>

        <!-- WeatherApp -->
        <ProjectItems
          title="Weather App"
          :img="WeatherImg"
          hrefRepo="https://github.com/Jhziel/Weather-App-Using-VueJS"
          hrefLive="https://main--weatherappvuejs2.netlify.app/"
        >
          <template #description>
            Weather App is a simple application that provides users with
            real-time weather data for locations around the world. It uses a
            weather API to retrieve information such as temperature, humidity,
            and wind speed.
          </template>

          <template #technologies>
            <TechonologyItems name="Vue.js" />
            <TechonologyItems name="Tailwind CSS" />
            <TechonologyItems name="API" />
          </template>
        </ProjectItems>

        <!-- Portfolio -->
        <ProjectItems
          title="Personal Portfolio"
          :img="Portfolio"
          hrefRepo="https://github.com/Jhziel/Portfolio"
          hrefLive="https://donjaziel-portfolio.vercel.app/"
        >
          <template #description>
            A personal portfolio website showcasing my projects, skills, and
            experience. It features a responsive design built with Vue.js and
            styled using Tailwind CSS.
          </template>

          <template #technologies>
            <TechonologyItems name="Vue.js" />
            <TechonologyItems name="Tailwind CSS" />
          </template>
        </ProjectItems>
      </div>

      <!-- Bottom Decoration -->
      <div class="mt-16 flex items-center justify-center gap-3">
        <span class="h-px w-16 bg-gray-800"></span>

        <span class="text-xs uppercase tracking-widest text-gray-600">
          More projects coming soon
        </span>

        <span class="h-px w-16 bg-gray-800"></span>
      </div>
    </div>
  </section>
</template>

