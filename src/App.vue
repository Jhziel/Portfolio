<script setup>
import Navbar from "./components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import { onMounted, ref } from "vue";

onMounted(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <AboutMe />
    <Skills />
    <Projects />
  </main>
  <footer>
    <Contact />
  </footer>
</template>

<style>
.fade-in-up {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease-in, transform 0.5s ease-in;
}
.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
