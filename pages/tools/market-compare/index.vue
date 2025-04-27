<template>
  <main class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h1 class="page-title">法拍行情比較器</h1>
        <p class="page-subtitle">
          比較法拍屋與周邊實價登錄行情，評估物件折價幅度與潛在增值空間
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold text-primary mb-4">輸入查詢條件</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 mb-2" for="area">地區</label>
            <div class="grid grid-cols-2 gap-4">
              <select
                id="city"
                v-model="city"
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">請選擇縣市</option>
                <option value="台北市">台北市</option>
                <option value="新北市">新北市</option>
                <option value="桃園市">桃園市</option>
                <option value="台中市">台中市</option>
                <option value="高雄市">高雄市</option>
              </select>
              
              <select
                id="district"
                v-model="district"
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                :disabled="!city"
              >
                <option value="">請選擇區域</option>
                <option v-if="city === '台北市'" value="大安區">大安區</option>
                <option v-if="city === '台北市'" value="信義區">信義區</option>
                <option v-if="city === '台北市'" value="松山區">松山區</option>
                <option v-if="city === '新北市'" value="板橋區">板橋區</option>
                <option v-if="city === '新北市'" value="三重區">三重區</option>
                <option v-if="city === '新北市'" value="中和區">中和區</option>
              </select>
            </div>
          </div>
          
          <div>
            <label class="block text-gray-700 mb-2" for="propertyType">物件類型</label>
            <div class="flex flex-wrap gap-3">
              <button 
                @click="propertyType = '住宅'"
                :class="[
                  'px-4 py-2 rounded-md border transition-colors', 
                  propertyType === '住宅' 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                ]"
              >
                住宅
              </button>
              <button 
                @click="propertyType = '商辦'"
                :class="[
                  'px-4 py-2 rounded-md border transition-colors', 
                  propertyType === '商辦' 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                ]"
              >
                商辦
              </button>
              <button 
                @click="propertyType = '店面'"
                :class="[
                  'px-4 py-2 rounded-md border transition-colors', 
                  propertyType === '店面' 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                ]"
              >
                店面
              </button>
            </div>
          </div>
          
          <div>
            <label class="block text-gray-700 mb-2" for="address">物件地址</label>
            <input
              id="address"
              v-model="address"
              type="text"
              placeholder="請輸入完整地址"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label class="block text-gray-700 mb-2" for="size">坪數範圍</label>
            <div class="flex items-center">
              <input
                id="minSize"
                v-model="minSize"
                type="number"
                placeholder="最小"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <span class="mx-2">～</span>
              <input
                id="maxSize"
                v-model="maxSize"
                type="number"
                placeholder="最大"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <span class="ml-2">坪</span>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <button class="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
            查詢比較資料
          </button>
          <button class="ml-4 px-6 py-3 bg-white text-gray-700 border border-gray-300 font-medium rounded-md hover:border-primary hover:text-primary transition-colors">
            重設條件
          </button>
        </div>
      </div>

      <div v-if="hasSearched" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 法拍案件資訊 -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-primary mb-4">法拍案件資訊</h2>
          
          <div class="space-y-5">
            <div class="flex justify-between items-center">
              <span class="text-gray-600">案號</span>
              <span class="font-medium">109年度司執字第42351號</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600">拍賣底價</span>
              <span class="font-medium text-red-600">NT$ 8,500,000</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600">單價</span>
              <span class="font-medium">NT$ 24.8萬/坪</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600">總坪數</span>
              <span class="font-medium">34.3坪</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600">屋齡</span>
              <span class="font-medium">18年</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600">樓層</span>
              <span class="font-medium">9樓/15樓</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600">朝向</span>
              <span class="font-medium">坐南朝北</span>
            </div>
          </div>
        </div>

        <!-- 周邊實價登錄 -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-primary mb-4">周邊實價登錄行情</h2>
          
          <div class="space-y-4">
            <div class="bg-gray-50 p-4 rounded-md">
              <div class="flex justify-between items-center mb-2">
                <span class="font-medium">同社區近期成交</span>
                <span class="text-xs text-gray-500">過去1年</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div class="text-gray-600">平均單價</div>
                <div class="text-right font-medium">NT$ 31.5萬/坪</div>
                <div class="text-gray-600">交易數量</div>
                <div class="text-right font-medium">8筆</div>
                <div class="text-gray-600">價格區間</div>
                <div class="text-right font-medium">NT$ 29.8萬 ~ 32.6萬/坪</div>
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-md">
              <div class="flex justify-between items-center mb-2">
                <span class="font-medium">方圓500公尺成交</span>
                <span class="text-xs text-gray-500">過去6個月</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div class="text-gray-600">平均單價</div>
                <div class="text-right font-medium">NT$ 30.2萬/坪</div>
                <div class="text-gray-600">交易數量</div>
                <div class="text-right font-medium">23筆</div>
                <div class="text-gray-600">價格區間</div>
                <div class="text-right font-medium">NT$ 26.4萬 ~ 35.1萬/坪</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 價格分析 -->
        <div class="bg-white rounded-lg shadow-md p-6 md:col-span-2">
          <h2 class="text-xl font-semibold text-primary mb-4">價格分析</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-medium mb-3">折價比例</h3>
              <div class="flex items-center">
                <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-400 to-green-600" style="width: 21.3%"></div>
                </div>
                <span class="ml-3 text-lg font-bold text-green-600">21.3%</span>
              </div>
              <p class="mt-2 text-sm text-gray-600">相較於周邊房屋平均單價，此法拍物件折價約21.3%</p>
            </div>
            
            <div>
              <h3 class="font-medium mb-3">增值空間</h3>
              <div class="bg-gray-50 p-4 rounded-md">
                <div class="grid grid-cols-2 gap-2">
                  <div class="text-gray-600">預估市值</div>
                  <div class="text-right font-medium">NT$ 10,800,000</div>
                  <div class="text-gray-600">和底價差額</div>
                  <div class="text-right font-medium text-green-600">+ NT$ 2,300,000</div>
                  <div class="text-gray-600">增值比例</div>
                  <div class="text-right font-medium text-green-600">+ 27.1%</div>
                </div>
              </div>
            </div>
            
            <div class="md:col-span-2">
              <h3 class="font-medium mb-3">價格趨勢（過去兩年）</h3>
              <div class="bg-gray-50 p-4 rounded-md h-64 flex items-center justify-center">
                <!-- 這裡可放入價格趨勢圖表 -->
                <p class="text-gray-500">價格趨勢圖表將在這裡展示</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!hasSearched" class="bg-gray-50 rounded-lg p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-medium text-gray-700 mb-2">尚未有搜尋結果</h3>
        <p class="text-gray-500">
          請輸入物件地址或選擇區域進行搜尋，以便查看法拍物件與市場行情比較
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  title: '法拍行情比較器 - 精準法拍',
  description: '比較法拍屋與周邊實價登錄行情，評估物件折價幅度與潛在增值空間'
})

// 表單數據
const city = ref('')
const district = ref('')
const propertyType = ref('住宅')
const address = ref('')
const minSize = ref('')
const maxSize = ref('')

// 搜尋狀態（實際應用中可根據 API 回傳修改）
const hasSearched = ref(false)
</script>
