<template>
  <main class="min-h-screen bg-background">
    <section class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-primary mb-6">法拍小工具</h1>
      <p class="text-lg text-gray-700 mb-8">
        實用的法拍工具，幫助您快速計算、分析與評估法拍物件。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 工具卡片將在這裡動態生成 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
            <span class="text-white text-xl">1</span>
          </div>
          <h2 class="text-xl font-semibold text-primary mb-2">法拍金流計算器</h2>
          <p class="text-gray-600 mb-4">快速計算法拍所需資金與相關費用</p>
          <NuxtLink to="/tools/calculator" class="text-primary hover:text-accent transition">
            開始使用
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: '法拍小工具 - 精準法拍',
  description: '實用的法拍工具，幫助您快速計算、分析與評估法拍物件。'
})
</script>

<!-- 
Open Graph Meta Tags 位置註解
<meta property="og:title" content="法拍小工具 - 精準法拍">
<meta property="og:description" content="實用的法拍工具，幫助您快速計算、分析與評估法拍物件。">
<meta property="og:image" content="/tools-og-image.jpg">
--> 