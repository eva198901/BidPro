<template>
  <main class="min-h-screen bg-background">
    <div v-if="article" class="container mx-auto px-4 py-12">
      <div class="mb-6">
        <NuxtLink to="/articles" class="text-primary hover:text-accent transition inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          返回所有文章
        </NuxtLink>
      </div>

      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <!-- 文章封面圖 -->
        <div class="w-full h-64 md:h-80 bg-gray-200 relative overflow-hidden">
          <img :src="article.image" :alt="article.title" class="w-full h-full object-cover">
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div class="text-white">
              <div class="mb-2 flex items-center space-x-4">
                <span class="px-3 py-1 bg-primary rounded-full text-sm">
                  {{ article.category }}
                </span>
                <span class="text-sm">
                  {{ article.date }}
                </span>
              </div>
              <h1 class="text-2xl md:text-3xl font-bold">{{ article.title }}</h1>
            </div>
          </div>
        </div>

        <!-- 文章內容 -->
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-6 pb-4 border-b border-gray-100">
            <div class="flex items-center">
              <span class="font-medium text-primary">{{ article.author }}</span>
            </div>
          </div>

          <div class="prose prose-lg max-w-none">
            <p v-if="article.content" class="text-gray-700">
              {{ article.content }}
            </p>
            <p v-else class="text-gray-700">
              {{ article.excerpt }}
            </p>
          </div>

          <!-- 文章標籤 -->
          <div class="mt-8 pt-6 border-t border-gray-100">
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in article.tags" :key="tag" class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="container mx-auto px-4 py-12 text-center">
      <p class="text-xl text-gray-600">找不到該文章，請返回文章列表中選擇其他文章。</p>
      <NuxtLink to="/articles" class="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-accent transition">
        返回文章列表
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
import { articles } from '~/data/articles';

// 使用 Nuxt 的 Composables 在 setup 函數中
const route = useRoute();
const articleId = computed(() => route.params.id);

// 根據 ID 查找文章
const article = computed(() => articles.find(item => item.id === articleId.value));

// 設置頁面標題 - 這會在構建時使用，不能依賴運行時的值
useHead(() => ({
  title: article.value ? `${article.value.title} - 精準法拍` : '法拍知識庫 - 精準法拍'
}));
</script>

<script>
// 靜態頁面元資料
definePageMeta({
  title: '文章詳情 - 精準法拍',
  description: '專業法拍知識與實用資訊，幫助您深入了解法拍市場。'
});
</script> 