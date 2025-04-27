<template>
  <main class="min-h-screen bg-background">
    <section class="container mx-auto px-4 py-16">
      <h1 class="page-title text-3xl sm:text-4xl mb-6">法拍知識庫</h1>
      <p class="page-subtitle text-base sm:text-lg text-gray-700 mb-8">
        專業法拍知識與實用資訊，幫助您深入了解法拍市場，掌握投資先機。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ArticleCard 
          v-for="article in articles" 
          :key="article.id"
          :id="article.id"
          :title="article.title"
          :description="article.excerpt"
          :date="article.date"
          :image="article.image"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { articles } from '~/data/articles';

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