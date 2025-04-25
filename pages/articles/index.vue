<template>
  <main class="min-h-screen bg-background">
    <section class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-primary mb-6">法拍知識庫</h1>
      <p class="text-lg text-gray-700 mb-8">
        專業法拍知識與實用資訊，幫助您深入了解法拍市場，掌握投資先機。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 文章卡片將在這裡動態生成 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="aspect-video bg-gray-200 mb-4 rounded-md"></div>
          <h2 class="text-xl font-semibold text-primary mb-2">文章標題</h2>
          <p class="text-gray-600 mb-4">文章簡短描述...</p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">2024-04-22</span>
            <NuxtLink to="/articles/1" class="text-primary hover:text-accent transition">
              閱讀更多
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: '法拍知識庫 - 精準法拍',
  description: '專業法拍知識與實用資訊，幫助您深入了解法拍市場，掌握投資先機。'
})
</script>

<!-- 
Open Graph Meta Tags 位置註解
<meta property="og:title" content="法拍知識庫 - 精準法拍">
<meta property="og:description" content="專業法拍知識與實用資訊，幫助您深入了解法拍市場，掌握投資先機。">
<meta property="og:image" content="/articles-og-image.jpg">
--> 