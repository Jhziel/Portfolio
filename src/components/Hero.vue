<template>
  <section
    class="max-w-[1000px] mx-auto h-[100vh] flex flex-col justify-center gap-4 fade-in-up"
    id="home"
  >
    <h1 class="text-3xl text-green-600">Hello, I'm</h1>
    <p class="font-bold text-5xl">Don Jaziel Barnedo</p>
    <p class="font-bold text-5xl text-gray-700 animate-bounce">
      Web Developer.
    </p>
    <ul class="flex gap-3">
      <li>
        <a href="https://www.facebook.com/donjaziel" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" class="text-3xl" />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/don-jaziel-barnedo-0baa4b310/"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" class="text-3xl" />
        </a>
      </li>

      <li>
        <a href="https://github.com/Jhziel" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" class="text-3xl" />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/jhziel_/" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-3xl" />
        </a>
      </li>
    </ul>
  </section>
</template>
