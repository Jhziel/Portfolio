<script setup>
import Logo from "@/assets/images/Logo/NavLogo.png";
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
  { name: "Projects", href: "#projects" },
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
            (item) => item.href === `#${currentSection.value}`,
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
    },
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
    class="fixed top-0 z-50 w-full transition-all duration-300"
    :class="
      isScrolled
        ? 'bg-[#0d1117]/95 shadow-lg shadow-black/20 backdrop-blur-md'
        : 'bg-[#0d1117]/80 backdrop-blur-sm'
    "
  >
    <nav
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
    >
      <!-- Logo -->
      <a href="#home" class="group flex items-center" @click="closeMenu">
        <img
          :src="Logo"
          alt="Don Jaziel Barnedo Logo"
          class="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      <!-- Desktop Navigation -->
      <div class="hidden lg:block">
        <ul class="flex items-center gap-2">
          <li v-for="(item, index) in navItem" :key="item.name">
            <a
              :href="item.href"
              class="relative block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
              :class="
                active === index
                  ? 'text-green-400'
                  : 'text-gray-400 hover:text-white'
              "
            >
              {{ item.name }}
              <!-- Active Indicator -->
              <span
                v-if="active === index"
                class="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-green-500"
              ></span>
            </a>
          </li>
        </ul>
      </div>
      <!-- Mobile Menu Button -->
      <button
        type="button"
        aria-label="Open navigation menu"
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 text-gray-300 transition-all duration-300 hover:border-green-500 hover:text-green-400 lg:hidden"
        @click="toggleMenu"
      >
        <font-awesome-icon :icon="['fas', 'bars']" class="text-lg" />
      </button>
    </nav>
  </header>
  <!-- Mobile Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="showMenu"
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
      @click="closeMenu"
    ></div>
  </Transition>
  <!-- Mobile Menu -->
  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <aside
      v-if="showMenu"
      class="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-gray-800 bg-[#0d1117] px-6 py-6 shadow-2xl lg:hidden"
    >
      <!-- Mobile Header -->
      <div class="flex items-center justify-between">
        <img :src="Logo" alt="Logo" class="h-10 w-auto" />
        <button
          type="button"
          aria-label="Close navigation menu"
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 text-gray-400 transition-all duration-300 hover:border-green-500 hover:text-green-400"
          @click="closeMenu"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" class="text-lg" />
        </button>
      </div>
      <!-- Mobile Links -->
      <ul class="mt-16 space-y-2">
        <li v-for="(item, index) in navItem" :key="item.name">
          <a
            :href="item.href"
            @click="closeMenu"
            class="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-300"
            :class="
              active === index
                ? 'bg-green-500/10 text-green-400'
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
            "
          >
            <span
              class="h-1.5 w-1.5 rounded-full transition-all duration-300"
              :class="active === index ? 'bg-green-500' : 'bg-gray-700'"
            ></span>
            {{ item.name }}
          </a>
        </li>
      </ul>
      <!-- Mobile Footer -->
      <div class="mt-auto border-t border-gray-800 pt-6">
        <p class="text-center text-xs text-gray-600">
          © 2026 Don Jaziel Barnedo
        </p>
      </div>
    </aside>
  </Transition>
</template>
