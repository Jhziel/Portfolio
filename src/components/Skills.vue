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
    class="max-w-[1000px] mx-auto h-auto md:h-[86vh] overflow-hidden"
    id="skills"
  >
    <h1
      class="text-5xl underline decoration-green-600 decoration-4 font-bold text-center mb-16 px-5"
    >
      Technologies I use
    </h1>
    <div
      class="md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 flex flex-col space-y-3 md:space-y-0 px-4 gap-5"
    >
      <SkillsItem :image="html" name="html" />
      <SkillsItem :image="css" name="css" />
      <SkillsItem :image="javascript" name="javascript" />
      <SkillsItem :image="bootstrap" name="bootstrap" />
      <SkillsItem :image="tailwind" name="tailwind" />
      <SkillsItem :image="jquery" name="jquery" />
      <SkillsItem :image="vue" name="vue" />
      <SkillsItem :image="php" name="php" />
      <SkillsItem :image="laravel" name="laravel" />
      <SkillsItem :image="git" name="git" />
      <SkillsItem :image="github" name="github" />
      <SkillsItem :image="mysql" name="mysql" />
      <SkillsItem :image="postman" name="postman" />
    </div>
  </section>
</template>
