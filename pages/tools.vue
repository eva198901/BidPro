<template>
  <main class="min-h-screen bg-background">
    <section class="container mx-auto px-4 py-16">
      <h1 class="page-title text-3xl sm:text-4xl mb-6">法拍小工具</h1>
      <p class="page-subtitle text-base sm:text-lg text-gray-700 mb-8">
        實用的法拍工具，幫助您快速計算、分析與評估法拍物件。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 工具卡片 -->
        <NuxtLink to="/property-calculator" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-primary mb-2">不動產共有物處分計算機</h2>
          <p class="text-gray-600 mb-4">計算不動產處分條件是否符合土地法第34-1條規定</p>
          <span class="text-primary hover:text-accent transition font-medium">
            開始使用 →
          </span>
        </NuxtLink>
        
        <NuxtLink to="/calculator" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-primary mb-2">法拍金流計算器</h2>
          <p class="text-gray-600 mb-4">快速計算法拍所需資金與相關費用，包含保證金、尾款、規費等</p>
          <span class="text-primary hover:text-accent transition font-medium">
            開始使用 →
          </span>
        </NuxtLink>
        
        <NuxtLink to="/tools/roi-analyzer" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-primary mb-2">投報率分析器</h2>
          <p class="text-gray-600 mb-4">評估法拍屋的投資回報率，考量租金收入、持有成本與增值潛力</p>
          <span class="text-primary hover:text-accent transition font-medium">
            開始使用 →
          </span>
        </NuxtLink>
        
        <NuxtLink to="/tools/loan-calculator" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-primary mb-2">貸款試算</h2>
          <p class="text-gray-600 mb-4">計算法拍房貸款方案，比較不同貸款期限與利率下的每月還款金額</p>
          <span class="text-primary hover:text-accent transition font-medium">
            開始使用 →
          </span>
        </NuxtLink>
        
        <NuxtLink to="/tools/reminder" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-primary mb-2">法拍時程提醒</h2>
          <p class="text-gray-600 mb-4">設定法拍案件的重要日期提醒，避免錯過投標、繳款等關鍵時間點</p>
          <span class="text-primary hover:text-accent transition font-medium">
            開始使用 →
          </span>
        </NuxtLink>
        
        <NuxtLink to="/tools/handover-checklist" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-primary mb-2">點交核對清單</h2>
          <p class="text-gray-600 mb-4">法拍屋點交流程完整檢查表，確保產權交接過程順利無虞</p>
          <span class="text-primary hover:text-accent transition font-medium">
            開始使用 →
          </span>
        </NuxtLink>
        
        <NuxtLink to="/tools/market-compare" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
          <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-primary mb-2">行情比較器</h2>
          <p class="text-gray-600 mb-4">比較法拍屋與周邊實價登錄行情，評估物件折價幅度與潛在增值空間</p>
          <span class="text-primary hover:text-accent transition font-medium">
            開始使用 →
          </span>
        </NuxtLink>
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