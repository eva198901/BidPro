<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-primary mb-6">案件詳情</h1>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="aspect-video bg-gray-200 mb-4 rounded-md"></div>
      <h2 class="text-2xl font-semibold text-primary mb-4">{{ caseData.title }}</h2>
      <p class="text-gray-600 mb-4">{{ caseData.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-accent font-bold text-xl">{{ caseData.price }}</span>
        <button class="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
          預約諮詢
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const caseData = {
  id: route.params.id,
  title: '案件標題',
  description: '案件描述',
  price: 'NT$ 1,280萬'
}
</script> 