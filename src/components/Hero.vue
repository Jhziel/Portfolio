
<template>
  <section
    id="home"
    class="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0d1117] px-6 sm:px-10"
  >
    <!-- Subtle Background Elements -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full border border-green-500/5"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full border border-green-500/5"
    ></div>

    <!-- Decorative Code -->
    <div
      class="pointer-events-none absolute left-5 top-1/3 hidden text-6xl font-bold text-gray-800/20 sm:block lg:left-16 lg:text-8xl"
    >
      &lt;/
    </div>

    <div
      class="pointer-events-none absolute bottom-1/4 right-5 hidden text-6xl font-bold text-gray-800/20 sm:block lg:right-16 lg:text-8xl"
    >
      /&gt;
    </div>

    <!-- Hero Content -->
    <div
      class="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
    >
      <!-- Status -->
      <div
        class="mb-7 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2"
      >
        <span class="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>

        <span class="text-sm font-medium text-green-400">
          Available for opportunities
        </span>
      </div>

      <!-- Greeting -->
      <p class="mb-3 text-lg font-medium text-green-500 sm:text-xl">
        Hello, I'm
      </p>

      <!-- Name -->
      <h1
        class="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Don Jaziel
        <span class="block text-gray-300"> Barnedo </span>
      </h1>

      <!-- Role -->
      <div
        class="mt-5 flex flex-wrap items-center justify-center gap-2 text-xl font-semibold sm:text-2xl md:text-3xl"
      >
        <span class="text-gray-500"> Full-Stack </span>

        <span class="text-green-500"> Web Developer </span>

        <span class="text-gray-600"> . </span>
      </div>

      <!-- Description -->
      <p
        class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
      >
        I build responsive and user-friendly web applications with modern
        technologies, turning ideas into functional digital experiences.
      </p>

      <!-- Buttons -->
      <div
        class="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
      >
        <a
          href="#projects"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-7 py-3 font-semibold text-[#0d1117] transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
        >
          View My Work

          <span
            class="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

        <a
          href="#contact"
          class="inline-flex items-center justify-center rounded-lg border border-gray-700 px-7 py-3 font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-400"
        >
          Contact Me
        </a>
      </div>

      <!-- Social Links -->
      <div class="mt-9 flex items-center gap-6">
        <a
          href="https://www.facebook.com/donjaziel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-blue-500"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" class="text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/don-jaziel-barnedo-0baa4b310/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl" />
        </a>

        <a
          href="https://github.com/Jhziel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-white"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />
        </a>

        <a
          href="https://www.instagram.com/jhziel_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:text-pink-400"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl" />
        </a>
      </div>
    </div>

  
    
  </section>
</template>

