<script setup lang="ts">
import { ref, onMounted } from 'vue'

useHead({
  title: 'Saeed Ayman - Software Engineer - Coming Soon',
  meta: [
    { name: 'description', content: 'Saeed Ayman\'s portfolio is coming soon! Stay tuned for updates from this software engineer.' },
    { property: 'og:title', content: 'Saeed Ayman - Software Engineer - Coming Soon' },
    { property: 'og:description', content: 'Saeed Ayman\'s portfolio is coming soon! Stay tuned for updates from this software engineer.' },
    { property: 'og:image', content: '/assets/images/avatar.jpeg' }, // Assuming this path is publicly accessible
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Saeed Ayman - Software Engineer - Coming Soon' },
    { name: 'twitter:description', content: 'Saeed Ayman\'s portfolio is coming soon! Stay tuned for updates from this software engineer.' },
    { name: 'twitter:image', content: '/assets/images/avatar.jpeg' },
  ],
})

const remaining = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const isFinished = ref(false)

const countDownDate = new Date('2025-11-01T00:00:00').getTime()

function updateTimer(countDownDate: number) {
  const now = new Date().getTime()
  const distance = countDownDate - now

  if (distance <= 0) {
    isFinished.value = true
    return 0
  }

  remaining.value.days = Math.floor(distance / (1000 * 60 * 60 * 24))
  remaining.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  remaining.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  remaining.value.seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return distance
}

onMounted(() => {
  updateTimer(countDownDate)

  const interval = setInterval(() => {
    const distance = updateTimer(countDownDate)
    if (distance <= 0) clearInterval(interval)
  }, 1000)
})
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-screen text-white p-4">
    <!-- Intro Section -->
    <BlurReveal :delay="0.2" :duration="0.75" class="p-6 text-center max-w-2xl">
      <!-- Avatar -->
      <NuxtImg
        src="/assets/images/avatar.jpeg"
        alt="Saeed Ayman"
        class="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-lg shadow-blue-900/40"
        format="webp"
        quality="1"
        preload
      />

      <h2 class="text-2xl sm:text-4xl font-light tracking-wide">Hey there 👋</h2>

      <h1 class="text-5xl sm:text-7xl font-extrabold mb-2">
        I'm
        <span
          class="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Saeed Ayman
        </span>
      </h1>

      <h2 class="text-2xl sm:text-3xl font-medium mb-6">Software Engineer</h2>

      <p class="text-lg sm:text-xl text-gray-300">
        My portfolio is being cooked 🍳 — launching on:
      </p>
    </BlurReveal>

    <!-- Countdown -->
      <div
        v-if="!isFinished"
        delay="1000"
        v-motion="{
          initial: { opacity: 0 },
          enter: { opacity: 1, transition: { delay: 1000, duration: 800 } }
        }"
        class="flex space-x-4"
      >
        <div
          v-for="(value, label) in remaining"
          :key="label"
          class="flex flex-col items-center justify-center w-20 h-24 bg-white/10 backdrop-blur-md rounded-xl shadow-lg"
        >
          <span
            class="text-3xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            {{ value }}
          </span>
          <span class="text-sm uppercase tracking-wider text-gray-300">{{ label }}</span>
        </div>
      </div>

    <!-- Finished Message -->
    <div
      v-else
      v-motion="{
        initial: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0, transition: { duration: 800 } }
      }"
      class="mt-12 text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent animate-bounce"
    >
      🚀 It's Launch Day!
    </div>
  </main>
</template>
