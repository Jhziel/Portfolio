<script setup>
import { ref } from "vue";
const showMenu = ref(false);

const active = ref(0);
const navItem = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Project",
    href: "#project",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const updateActive = (index) => {
  active.value = index;
};
</script>
<template>
  <header>
    <nav
      class="bg-slate-50 shadow-md flex justify-between py-7 md:px-32 px-4 items-center text-gray-800"
    >
      <h1 class="text-2xl font-bold">Don</h1>

      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="cursor-pointer text-xl lg:hidden"
      />

      <div class="hidden lg:block">
        <ul class="flex gap-5">
          <li v-for="(item, index) in navItem" :key="index">
            <a
              :href="item.href"
              @click="updateActive(index)"
              class="text-semibold hover:underline decoration-green-500 decoration-2"
              :class="active === index ? 'text-green-500' : ''"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
