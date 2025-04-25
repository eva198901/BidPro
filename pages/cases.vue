<template>
  <main class="min-h-screen bg-background">
    <section class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-primary mb-6">熱門法拍物件</h1>
      <p class="text-lg text-gray-700 mb-8">
        精選優質法拍物件，提供完整資訊與專業分析，助您找到理想標的。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 物件卡片將在這裡動態生成 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="aspect-video bg-gray-200 mb-4 rounded-md"></div>
          <h2 class="text-xl font-semibold text-primary mb-2">物件標題</h2>
          <p class="text-gray-600 mb-4">物件簡短描述...</p>
          <div class="flex justify-between items-center">
            <span class="text-accent font-bold">NT$ 1,000,000</span>
            <NuxtLink to="/cases/1" class="text-primary hover:text-accent transition">
              查看詳情
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: '熱門法拍物件 - 精準法拍',
  description: '精選優質法拍物件，提供完整資訊與專業分析，助您找到理想標的。'
})
</script>

<!-- 
Open Graph Meta Tags 位置註解
<meta property="og:title" content="熱門法拍物件 - 精準法拍">
<meta property="og:description" content="精選優質法拍物件，提供完整資訊與專業分析，助您找到理想標的。">
<meta property="og:image" content="/cases-og-image.jpg">
--> 