<script setup>
import Navbar from "./components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
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
