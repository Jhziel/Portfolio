<script setup>
import WeatherImg from "@/assets/projects/WeatherApp.png";
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
    <div class="md:grid md:grid-cols-2 grid-cols-1 gap-10 px-3">
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
    </div>
  </section>
</template>
