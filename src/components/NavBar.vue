<script setup>
import { ref } from "vue";
const showMenu = ref(false);

const active = ref(0);
const navItem = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const closeMenu = () => {
  showMenu.value = false;
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
        v-if="!showMenu"
        @click="toggleMenu"
      />

      <!-- Menu Background Overlay -->
      <Transition
        enter-from-class="opacity-0"
        enter-active-class="ease-out duration-300"
        enter-to-class="opacity-50"
        leave-from-class="opacity-50"
        leave-active-class="ease-in duration-200"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showMenu"
          class="fixed inset-0 bg-black bg-opacity-30 z-40"
          @click="closeMenu"
        ></div>
      </Transition>

      <!-- Menu Content -->
      <Transition
        enter-from-class="opacity-0 translate-x-full"
        enter-active-class="ease-out duration-300"
        enter-to-class="opacity-100 translate-x-0"
        leave-from-class="opacity-100 translate-x-0"
        leave-active-class="ease-in duration-200"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div v-if="showMenu" class="fixed right-0 bg-white inset-y-0 w-64 z-50 p-2">
          <div class="flex justify-end">
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              class="cursor-pointer"
              @click="closeMenu"
            />
          </div>
          <ul class="flex flex-col items-center gap-5">
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
      </Transition>

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
