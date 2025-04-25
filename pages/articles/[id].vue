<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-primary mb-6">文章詳情</h1>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-primary mb-4">{{ articleData.title }}</h2>
      <div class="prose max-w-none">
        <p class="text-gray-600">{{ articleData.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const articleData = {
  id: route.params.id,
  title: '文章標題',
  content: '文章內容...'
}
</script> 