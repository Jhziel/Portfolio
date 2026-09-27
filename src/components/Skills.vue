
<script setup>
import SkillsItem from "./SkillsItem.vue";

import html from "@/assets/images/tech/html.svg";
import bootstrap from "@/assets/images/tech/bootstrap.svg";
import css from "@/assets/images/tech/css.svg";
import git from "@/assets/images/tech/git.svg";
import github from "@/assets/images/tech/github.svg";
import javascript from "@/assets/images/tech/javascript.svg";
import jquery from "@/assets/images/tech/jquery.svg";
import laravel from "@/assets/images/tech/laravel.svg";
import mysql from "@/assets/images/tech/mysql.svg";
import php from "@/assets/images/tech/php.svg";
import postman from "@/assets/images/tech/postman.svg";
import tailwind from "@/assets/images/tech/tailwind.svg";
import vue from "@/assets/images/tech/vue.svg";
</script>

<template>
  <section
    id="skills"
    class="relative min-h-screen bg-[#0d1117] px-6 py-24 sm:px-10 lg:px-20 fade-in-up"
  >
    <div class="mx-auto w-full max-w-6xl">

      <!-- Section Header -->
      <div class="mb-14 text-center">
        <p
          class="mb-3 text-sm uppercase tracking-[0.3em] text-green-500"
        >
          My technical skills
        </p>

        <h1
          class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          Technologies I
          <span class="text-green-500">
            Use
          </span>
        </h1>

        <div
          class="mx-auto mt-5 h-1 w-16 rounded-full bg-green-500"
        ></div>

        <p
          class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          Technologies and tools I use to build, develop, and maintain
          web applications.
        </p>
      </div>

      <!-- Skills Grid -->
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <SkillsItem :image="html" name="HTML" />
        <SkillsItem :image="css" name="CSS" />
        <SkillsItem :image="javascript" name="JavaScript" />
        <SkillsItem :image="bootstrap" name="Bootstrap" />
        <SkillsItem :image="tailwind" name="Tailwind CSS" />
        <SkillsItem :image="jquery" name="jQuery" />
        <SkillsItem :image="vue" name="Vue.js" />
        <SkillsItem :image="php" name="PHP" />
        <SkillsItem :image="laravel" name="Laravel" />
        <SkillsItem :image="git" name="Git" />
        <SkillsItem :image="github" name="GitHub" />
        <SkillsItem :image="mysql" name="MySQL" />
        <SkillsItem :image="postman" name="Postman" />
      </div>

      <!-- Bottom Text -->
      <div class="mt-14 flex items-center justify-center gap-3">
        <span class="h-px w-12 bg-gray-800"></span>

        <p class="text-xs uppercase tracking-widest text-gray-600">
          Always learning • Always building
        </p>

        <span class="h-px w-12 bg-gray-800"></span>
      </div>
    </div>
  </section>
</template>

