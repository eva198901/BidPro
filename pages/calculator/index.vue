<template>
  <main class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-primary mb-2">法拍金流計算器</h1>
        <p class="text-gray-600">
          快速計算法拍過程中需要準備的資金，包含保證金、尾款及相關費用
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 輸入區域 -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-primary mb-4">基本資訊</h2>
            
            <div class="mb-6">
              <label class="block text-gray-700 mb-2" for="propertyType">
                物件類型
              </label>
              <div class="flex flex-wrap gap-4">
                <button 
                  @click="propertyType = '房屋'"
                  :class="[
                    'px-4 py-2 rounded-md border transition-colors', 
                    propertyType === '房屋' 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                  ]"
                >
                  房屋
                </button>
                <button 
                  @click="propertyType = '土地'"
                  :class="[
                    'px-4 py-2 rounded-md border transition-colors', 
                    propertyType === '土地' 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                  ]"
                >
                  土地
                </button>
                <button 
                  @click="propertyType = '停車位'"
                  :class="[
                    'px-4 py-2 rounded-md border transition-colors', 
                    propertyType === '停車位' 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                  ]"
                >
                  停車位
                </button>
              </div>
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 mb-2" for="evaluationPrice">
                鑑定價格 (新台幣)
              </label>
              <div class="relative">
                <input
                  id="evaluationPrice"
                  v-model="evaluationPrice"
                  type="number"
                  placeholder="請輸入鑑定價格"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span class="text-gray-500">元</span>
                </div>
              </div>
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 mb-2" for="auctionRound">
                拍賣次數
              </label>
              <div class="flex flex-wrap gap-4">
                <button 
                  v-for="round in 3" 
                  :key="round"
                  @click="auctionRound = round"
                  :class="[
                    'px-4 py-2 rounded-md border transition-colors', 
                    auctionRound === round 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                  ]"
                >
                  第 {{ round }} 拍
                </button>
              </div>
              <div class="mt-2 text-sm text-gray-500">
                <p>拍賣底價：{{ formattedReservePrice }}</p>
              </div>
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 mb-2" for="bidPrice">
                得標金額 (新台幣)
              </label>
              <div class="relative">
                <input
                  id="bidPrice"
                  v-model="bidPrice"
                  type="number"
                  placeholder="請輸入預計得標金額"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span class="text-gray-500">元</span>
                </div>
              </div>
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 mb-2">其他選項</label>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" v-model="needLoan" class="form-checkbox h-5 w-5 text-primary" />
                  <span class="ml-2 text-gray-700">需要辦理貸款</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" v-model="haveTenant" class="form-checkbox h-5 w-5 text-primary" />
                  <span class="ml-2 text-gray-700">屋內有占用戶</span>
                </label>
              </div>
            </div>

            <div v-if="needLoan" class="mb-6">
              <label class="block text-gray-700 mb-2" for="loanRatio">
                貸款成數 (%)
              </label>
              <div class="flex items-center">
                <input
                  id="loanRatio"
                  v-model="loanRatio"
                  type="range"
                  min="1"
                  max="80"
                  step="1"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span class="ml-3 text-gray-700 w-12 text-right">{{ loanRatio }}%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 結果顯示區域 -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 class="text-xl font-semibold text-primary mb-4">計算結果</h2>
            
            <div class="space-y-4">
              <div class="p-4 bg-gray-50 rounded-md">
                <h3 class="font-medium text-gray-700">投標前準備</h3>
                <div class="mt-2 space-y-1">
                  <div class="flex justify-between">
                    <span class="text-gray-600">投標保證金</span>
                    <span class="font-medium text-primary">{{ formattedDeposit }}</span>
                  </div>
                </div>
              </div>

              <div class="p-4 bg-gray-50 rounded-md">
                <h3 class="font-medium text-gray-700">得標後費用</h3>
                <div class="mt-2 space-y-1">
                  <div class="flex justify-between">
                    <span class="text-gray-600">尾款金額</span>
                    <span class="font-medium text-primary">{{ formattedRemainingPayment }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">代書費用</span>
                    <span class="font-medium text-primary">{{ formattedScrivenerFee }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">規費與稅金</span>
                    <span class="font-medium text-primary">{{ formattedLegalFees }}</span>
                  </div>
                  <div class="flex justify-between" v-if="haveTenant">
                    <span class="text-gray-600">騰空費用 (預估)</span>
                    <span class="font-medium text-primary">{{ formattedEvictionCost }}</span>
                  </div>
                </div>
              </div>

              <div class="p-4 bg-primary rounded-md text-white">
                <h3 class="font-medium">總計所需資金</h3>
                <div class="mt-2 space-y-1">
                  <div class="flex justify-between">
                    <span>自備款</span>
                    <span class="font-bold">{{ formattedOwnFunds }}</span>
                  </div>
                  <div class="flex justify-between" v-if="needLoan">
                    <span>貸款金額</span>
                    <span class="font-bold">{{ formattedLoanAmount }}</span>
                  </div>
                  <div class="border-t border-white/30 mt-2 pt-2 flex justify-between">
                    <span>總計金額</span>
                    <span class="font-bold">{{ formattedTotalAmount }}</span>
                  </div>
                </div>
              </div>

              <div class="p-4 border border-yellow-300 bg-yellow-50 rounded-md">
                <h3 class="font-medium text-yellow-800">注意事項</h3>
                <ul class="mt-2 text-sm text-yellow-700 list-disc list-inside space-y-1">
                  <li>本計算結果僅供參考，實際費用可能因地區、案件特性而有所不同</li>
                  <li>建議諮詢專業律師或代書確認實際所需費用</li>
                  <li>若物件有特殊狀況，可能產生額外費用</li>
                </ul>
              </div>

              <button class="w-full px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors">
                儲存計算結果
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

definePageMeta({
  title: '法拍金流計算器 - 精準法拍',
  description: '快速計算法拍所需資金與相關費用，包含保證金、尾款、規費等'
})

// 表單數據
const propertyType = ref('房屋')
const evaluationPrice = ref(10000000)
const auctionRound = ref(1)
const bidPrice = ref(8500000)
const needLoan = ref(false)
const haveTenant = ref(false)
const loanRatio = ref(60)

// 計算拍賣底價
const reservePrice = computed(() => {
  const rate = auctionRound.value === 1 ? 0.8 : 
               auctionRound.value === 2 ? 0.64 : 0.512
  return Math.round(evaluationPrice.value * rate)
})

// 計算保證金 (底價的10%)
const deposit = computed(() => {
  return Math.round(reservePrice.value * 0.1)
})

// 計算尾款金額
const remainingPayment = computed(() => {
  return bidPrice.value - deposit.value
})

// 計算代書費用
const scrivenerFee = computed(() => {
  if (propertyType.value === '房屋') {
    return 20000 + (bidPrice.value > 5000000 ? 10000 : 0)
  } else if (propertyType.value === '土地') {
    return 15000 + (bidPrice.value > 5000000 ? 8000 : 0)
  } else {
    return 10000
  }
})

// 計算規費與稅金
const legalFees = computed(() => {
  // 簡化計算，實際上還有印花稅、登記費等
  return Math.round(bidPrice.value * 0.015)
})

// 計算騰空費用
const evictionCost = computed(() => {
  if (!haveTenant.value) return 0
  
  // 這裡以物件價值的2%作為粗略估算
  return Math.round(bidPrice.value * 0.02)
})

// 計算貸款金額
const loanAmount = computed(() => {
  if (!needLoan.value) return 0
  
  return Math.round(bidPrice.value * (loanRatio.value / 100))
})

// 計算自備款
const ownFunds = computed(() => {
  const baseAmount = bidPrice.value + scrivenerFee.value + legalFees.value + evictionCost.value
  return needLoan.value ? baseAmount - loanAmount.value : baseAmount
})

// 計算總金額
const totalAmount = computed(() => {
  return bidPrice.value + scrivenerFee.value + legalFees.value + evictionCost.value
})

// 格式化金額顯示
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

// 格式化後的計算結果
const formattedReservePrice = computed(() => formatCurrency(reservePrice.value))
const formattedDeposit = computed(() => formatCurrency(deposit.value))
const formattedRemainingPayment = computed(() => formatCurrency(remainingPayment.value))
const formattedScrivenerFee = computed(() => formatCurrency(scrivenerFee.value))
const formattedLegalFees = computed(() => formatCurrency(legalFees.value))
const formattedEvictionCost = computed(() => formatCurrency(evictionCost.value))
const formattedLoanAmount = computed(() => formatCurrency(loanAmount.value))
const formattedOwnFunds = computed(() => formatCurrency(ownFunds.value))
const formattedTotalAmount = computed(() => formatCurrency(totalAmount.value))
</script>
