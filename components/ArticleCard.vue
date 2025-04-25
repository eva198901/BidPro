<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div class="aspect-video bg-gray-200 mb-4 rounded-md overflow-hidden">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>
    <h2 class="text-xl font-semibold text-primary mb-2">{{ title }}</h2>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-500">{{ date }}</span>
      <NuxtLink :to="`/articles/${id}`" class="text-primary hover:text-accent transition">
        閱讀更多
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  }
})
</script> 