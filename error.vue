<template>
  <div class="min-h-screen bg-background flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-primary mb-4">{{ error.statusCode }}</h1>
      <p class="text-xl text-gray-700 mb-8">{{ error.message }}</p>
      <NuxtLink to="/" class="inline-block bg-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
        返回首頁
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
</script> 