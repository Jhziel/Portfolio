```vue
<script setup>
import { computed, ref } from "vue";

import WeatherImg from "@/assets/images/projects/WeatherApp.png";
import Portfolio from "@/assets/images/projects/Portfolio.png";
import Capstone from "@/assets/images/projects/Capstone.png";

import ProjectItems from "@/components/ProjectItems.vue";
import TechonologyItems from "./TechonologyItems.vue";

const activeCategory = ref("All");

const categories = ["All", "Web Applications", "WordPress"];

const projects = [
  {
    title: "Impound Vehicle Management System",
    category: "Web Applications",
    img: Capstone,
    repo: "https://github.com/Jhziel/Impound-Vehicle-System",
    live: null,
    description:
      "A collaborative capstone project designed to manage impounded vehicles, track violations, and monitor parking lot spaces. I was involved throughout the development process, from planning to deployment.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "MySQL",
      "PHP",
    ],
  },

  {
    title: "Weather App",
    category: "Web Applications",
    img: WeatherImg,
    repo: "https://github.com/Jhziel/Weather-App-Using-VueJS",
    live: "https://main--weatherappvuejs2.netlify.app/",
    description:
      "A simple weather application that retrieves real-time weather information using a weather API. Users can search for locations and view details such as temperature, humidity, and wind speed.",
    technologies: ["Vue.js", "Tailwind CSS", "API"],
  },

  {
    title: "Personal Portfolio",
    category: "Web Applications",
    img: Portfolio,
    repo: "https://github.com/Jhziel/Portfolio",
    live: "https://donjaziel-portfolio.vercel.app/",
    description:
      "A personal portfolio website built to showcase my projects, technical skills, and experience. The site uses Vue.js and Tailwind CSS with a responsive and modern design.",
    technologies: ["Vue.js", "Tailwind CSS"],
  },

  // Add your WordPress projects here later.
  //
  // Example:
  //
  // {
  //   title: "Client WordPress Website",
  //   category: "WordPress",
  //   img: WordPressImg,
  //   repo: null,
  //   live: "https://example.com",
  //   description:
  //     "A responsive WordPress website developed and customized for a client.",
  //   technologies: [
  //     "WordPress",
  //     "Elementor",
  //     "PHP",
  //   ],
  // },
];

const filteredProjects = computed(() => {
  if (activeCategory.value === "All") {
    return projects;
  }

  return projects.filter(
    (project) => project.category === activeCategory.value,
  );
});
</script>

<template>
  <section
    id="projects"
    class="relative min-h-screen bg-[#0d1117] px-6 py-24 sm:px-10 lg:px-20 fade-in-up"
  >
    <div class="mx-auto w-full max-w-6xl">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <p class="mb-3 text-sm uppercase tracking-[0.3em] text-green-500">
          What I've built
        </p>

        <h1 class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          My
          <span class="text-green-500">Projects</span>
        </h1>

        <div class="mx-auto mt-5 h-1 w-16 rounded-full bg-green-500"></div>

        <p
          class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          A collection of web applications, websites, and other projects I've
          worked on while building my development experience.
        </p>
      </div>

      <!-- Category Filter -->
      <div class="mb-10 flex flex-wrap justify-center gap-3">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          @click="activeCategory = category"
          class="rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300"
          :class="
            activeCategory === category
              ? 'border-green-500 bg-green-500 text-[#0d1117]'
              : 'border-gray-700 bg-[#111820] text-gray-400 hover:border-green-500/50 hover:text-green-400'
          "
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects -->
      <TransitionGroup
        name="project"
        tag="div"
        class="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        <ProjectItems
          v-for="project in filteredProjects"
          :key="project.title"
          :title="project.title"
          :category="project.category"
          :img="project.img"
          :href-repo="project.repo"
          :href-live="project.live"
        >
          <template #description>
            {{ project.description }}
          </template>

          <template #technologies>
            <TechonologyItems
              v-for="technology in project.technologies"
              :key="technology"
              :name="technology"
            />
          </template>
        </ProjectItems>
      </TransitionGroup>

      <!-- Empty State -->
      <div
        v-if="filteredProjects.length === 0"
        class="rounded-2xl border border-dashed border-gray-800 bg-[#111820] px-6 py-16 text-center"
      >
        <p class="text-gray-500">
          More {{ activeCategory }} projects coming soon.
        </p>
      </div>

      <!-- Bottom Decoration -->
      <div class="mt-16 flex items-center justify-center gap-3">
        <span class="h-px w-16 bg-gray-800"></span>

        <span class="text-xs uppercase tracking-widest text-gray-600">
          Always building & learning
        </span>

        <span class="h-px w-16 bg-gray-800"></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-enter-active,
.project-leave-active {
  transition: all 0.3s ease;
}

.project-enter-from,
.project-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>
```
