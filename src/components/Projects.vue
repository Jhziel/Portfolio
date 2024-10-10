<script setup>
import WeatherImg from "@/assets/images/projects/WeatherApp.png";
import Portfolio from "@/assets/images/projects/Portfolio.png";
import Capstone from "@/assets/images/projects/Capstone.png";
import ProjectItems from "@/components/ProjectItems.vue";
import TechonologyItems from "./TechonologyItems.vue";
</script>

<template>
  <section
    class="max-w-[1000px] mx-auto h-auto overflow-hidden mb-40 fade-in-up"
    id="project"
  >
    <h1
      class="text-5xl underline decoration-green-600 decoration-4 underline-offset-8 font-bold text-center mb-16"
    >
      PROJECTS
    </h1>
    <div class="md:grid md:grid-cols-2 grid-cols-1 gap-10 px-3 space-y-5">
      <!-- Capstone -->
      <ProjectItems
        title="Impound Vehicle Management System"
        :img="Capstone"
        hrefRepo="https://github.com/Jhziel/Impound-Vehicle-System"
      >
        <template #description>
          This capstone project, the Impound Vehicle Management System, was a
          collaborative effort where I was involved in every stage, from
          planning to deployment. Throughout the development process, I gained
          valuable experience in full-stack web development, problem-solving,
          and project management. The system is designed to efficiently manage
          impounded vehicles, track violations, and oversee parking lot space.
          This project greatly enhanced my technical skills, particularly in
          handling real-world challenges and delivering a functional,
          user-friendly solution.
        </template>

        <template #technologies>
          <TechonologyItems name="HTML" />
          <TechonologyItems name="CSS" />
          <TechonologyItems name="Javascript" />
          <TechonologyItems name="Bootstrap" />
          <TechonologyItems name="Jquery" />
          <TechonologyItems name="Mysql" />
          <TechonologyItems name="Php" />
        </template>
      </ProjectItems>

      <!-- WeatherApp -->
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
          weather conditions, such as temperature, humidity, and wind speed. The
          user-friendly interface allows users to search for different cities
          and easily access the latest weather information.
        </template>

        <template #technologies>
          <TechonologyItems name="VueJS" />
          <TechonologyItems name="TailWind" />
          <TechonologyItems name="API" />
        </template>
      </ProjectItems>

      <!-- Portfolio -->
      <ProjectItems
        title="My Portfolio"
        :img="Portfolio"
        hrefRepo="https://github.com/Jhziel/Portfolio"
        hrefLive="https://donjaziel-portfolio.vercel.app/"
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
