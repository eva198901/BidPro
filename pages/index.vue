<template>
  <main class="min-h-screen bg-background">
    <!-- Hero 主視覺區 -->
    <section class="bg-primary text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">精準鎖定好標的，安心代標零煩惱！</h1>
          <p class="text-lg md:text-xl mb-8">
            每週精選熱門案件、行情比較、風險提醒，從找案、代標到產權處理，專治各種法拍疑難雜症，陪你一路交屋無煩惱。
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#" class="bg-accent text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition text-lg">
              📬 立即免費索取《台中以北熱門法拍案件推播》
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 三大特色區 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="text-xl font-semibold text-primary mb-4">資訊透明化</h3>
            <p class="text-gray-600">每週精選＋價格行情＋風險提示</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl mb-4">🔁</div>
            <h3 class="text-xl font-semibold text-primary mb-4">流程全包式</h3>
            <p class="text-gray-600">找案→代標→產權→貸款→點交</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl mb-4">🌐</div>
            <h3 class="text-xl font-semibold text-primary mb-4">台中以北全區支援</h3>
            <p class="text-gray-600">線上代辦、全台五都覆蓋</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 精選案件展示區 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary mb-8 text-center">本週精選案件</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, index) in cases" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <div class="aspect-video bg-gray-200 mb-4 rounded-md"></div>
            <h3 class="text-xl font-semibold text-primary mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 mb-4">{{ item.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-accent font-bold">{{ item.price }}</span>
              <NuxtLink :to="`/cases/${item.id}`" class="text-primary hover:text-accent transition">
                查看詳情
              </NuxtLink>
            </div>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-8 text-center">資料彙整自司法院公告</p>
      </div>
    </section>

    <!-- 免費講座／推播訂閱區 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-primary mb-6">想更懂法拍？</h2>
          <p class="text-lg text-gray-700 mb-8">
            歡迎報名我們的免費線上說明會，或訂閱案件更新
          </p>
          <form class="space-y-4">
            <input type="text" placeholder="您的姓名" class="w-full px-4 py-2 border rounded-md">
            <input type="email" placeholder="您的 Email" class="w-full px-4 py-2 border rounded-md">
            <button type="submit" class="bg-accent text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition">
              我要訂閱精選推播
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- 成功案例分享區 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary mb-8 text-center">成功案例分享</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(story, index) in successStories" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <div class="aspect-video bg-gray-200 mb-4 rounded-md"></div>
            <h3 class="text-xl font-semibold text-primary mb-2">{{ story.title }}</h3>
            <p class="text-gray-600 mb-4">{{ story.description }}</p>
            <p class="text-sm text-gray-500">{{ story.quote }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 法拍知識區 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary mb-8 text-center">法拍知識庫</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(article, index) in articles" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-primary mb-2">{{ article.title }}</h3>
            <p class="text-gray-600 mb-4">{{ article.description }}</p>
            <NuxtLink :to="`/articles/${article.id}`" class="text-primary hover:text-accent transition">
              閱讀更多
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ 常見問題區 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-primary mb-8 text-center">常見問題</h2>
        <div class="max-w-2xl mx-auto space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold text-primary mb-2">{{ faq.question }}</h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: '精準法拍 - 專業法拍屋資訊平台',
  description: '提供最即時、最精準的法拍屋資訊，結合專業知識與實用工具，讓您輕鬆掌握法拍市場動態。'
})

// 模擬資料
const cases = [
  {
    id: 1,
    title: '台北市信義區 2房1廳',
    description: '近捷運站，生活機能完善',
    price: 'NT$ 1,280萬'
  },
  {
    id: 2,
    title: '新北市板橋區 3房2廳',
    description: '學區宅，採光通風佳',
    price: 'NT$ 980萬'
  },
  {
    id: 3,
    title: '台中市西屯區 4房2廳',
    description: '新成屋，格局方正',
    price: 'NT$ 1,580萬'
  }
]

const successStories = [
  {
    title: '小資女 30 萬買到新北兩房',
    description: '首購族成功案例',
    quote: '「感謝精準法拍的專業協助，讓我用有限的預算買到理想的房子。」'
  },
  {
    title: '工程師貸款買進台中法拍屋',
    description: '投資置產案例',
    quote: '「年租金報酬 5.6%，比定存好太多了！」'
  },
  {
    title: '退休族與兒子聯名入手竹北法拍',
    description: '家庭置產案例',
    quote: '「從找案到交屋，全程都有專業團隊協助，真的很放心。」'
  }
]

const articles = [
  {
    id: 1,
    title: '法拍新手攻略5步驟',
    description: '從零開始，帶你了解法拍屋購買流程'
  },
  {
    id: 2,
    title: '法拍屋能貸款嗎？怎麼貸？',
    description: '詳細解析法拍屋貸款條件與流程'
  },
  {
    id: 3,
    title: '法拍陷阱懶人包：這些要注意',
    description: '常見法拍陷阱與避險指南'
  }
]

const faqs = [
  {
    question: '我沒有買過法拍屋也可以嗎？',
    answer: '可以，我們會從挑標到交屋一步步協助。'
  },
  {
    question: '法拍屋能貸款嗎？',
    answer: '部分可以，視物件與屋況與客戶條件評估。'
  }
]
</script>

<!-- 
Open Graph Meta Tags 位置註解
<meta property="og:title" content="精準法拍 - 專業法拍屋資訊平台">
<meta property="og:description" content="提供最即時、最精準的法拍屋資訊，結合專業知識與實用工具，讓您輕鬆掌握法拍市場動態。">
<meta property="og:image" content="/og-image.jpg">
--> 