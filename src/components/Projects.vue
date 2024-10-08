<script setup>
import WeatherImg from "@/assets/projects/WeatherApp.png";
import Portfolio from "@/assets/projects/Portfolio.png";
import ProjectItems from "@/components/ProjectItems.vue";
import TechonologyItems from "./TechonologyItems.vue";
</script>

<template>
  <section class="max-w-[1000px] mx-auto h-auto overflow-hidden" id="project">
    <h1
      class="text-5xl underline decoration-green-600 decoration-4 underline-offset-8 font-bold text-center mb-16"
    >
      PROJECTS
    </h1>
    <div class="md:grid md:grid-cols-2 grid-cols-1 gap-10 px-3 space-y-5">
      <ProjectItems
        title="WeatherApp"
        :img="WeatherImg"
        hrefRepo="https://github.com/Jhziel/Weather-App-Using-VueJS"
        hrefLive="https://main--weatherappvuejs2.netlify.app/"
      >
        <template #description>
          WeatherApp is a simple and intuitive application that provides users
          with real-time weather data for any location in the world. By
          utilizing a weather API, the app fetches and displays the current
        </template>

        <template #technologies>
          <TechonologyItems name="VueJS" />
          <TechonologyItems name="TailWind" />
          <TechonologyItems name="API" />
        </template>
      </ProjectItems>

      <ProjectItems
        title="My Portfolio"
        :img="Portfolio"
        hrefRepo="https://github.com/Jhziel/Portfolio"
        hrefLive="https://main--weatherappvuejs2.netlify.app/"
      >
        <template #description>
          A personal portfolio website showcasing my projects, skills, and
          experience. It includes a responsive design built with Vue.js and
          styled using Tailwind CSS.
        </template>

        <template #technologies>
          <TechonologyItems name="VueJS" />
          <TechonologyItems name="TailWind" />
        </template>
      </ProjectItems>
    </div>
  </section>
</template>
