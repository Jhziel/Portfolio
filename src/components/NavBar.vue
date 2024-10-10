<script setup>
import Logo from "@/assets/images/Logo/Don.png";
import { onMounted, ref, onBeforeUnmount } from "vue";

const showMenu = ref(false);
const isScrolled = ref(false); // Track if the user has scrolled
const active = ref(0); // Index of the active section link
const currentSection = ref(""); // The id of the current section in view

// Menu toggle functions
const toggleMenu = () => (showMenu.value = !showMenu.value);
const closeMenu = () => (showMenu.value = false);

// Navigation items with hrefs to sections
const navItem = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

// Detect the current section in view using IntersectionObserver
onMounted(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the current section to the ID of the intersecting section
          currentSection.value = entry.target.id;

          // Find the index of the corresponding navItem based on the href
          const index = navItem.findIndex(
            (item) => item.href === `#${currentSection.value}`
          );
          if (index !== -1) {
            active.value = index; // Set the active nav item based on section in view
          }

          const newUrl = `#${currentSection.value}`;
          if (window.location.hash !== newUrl) {
            history.pushState(null, null, newUrl);
          }
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Set up the event listener on mount, and clean it up on unmount
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
      'fixed top-0 w-full transition-all ease-in z-50',
    ]"
  >
    <nav
      class="flex justify-between py-7 md:px-32 px-4 items-center text-gray-800"
    >
      <div>
        <a href="/">
          <img width="80px" height="80px" :src="Logo" alt="Logo" />
        </a>
      </div>

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
        <div v-if="showMenu" class="fixed right-0 inset-y-0 w-64 z-50 p-2 bg-white">
          <div class="flex justify-end">
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              class="cursor-pointer"
              @click="closeMenu"
            />
          </div>
          <ul class="flex flex-col  items-center gap-5 mt-20 ">
            <li v-for="(item, index) in navItem" :key="index">
              <a
                :href="item.href"
                @click="updateActive(index)"
                class="font-semibold text-lg hover:underline decoration-green-500 decoration-2"
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
              class="font-semibold hover:underline decoration-green-500 decoration-2"
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
