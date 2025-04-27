<template>
  <main class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h1 class="page-title">不動產共有物處分計算機</h1>
        <p class="page-subtitle flex items-center">
          計算不動產處分條件是否符合土地法第34-1條規定
          <button @click="showRulesModal = true" class="ml-2 text-primary hover:text-accent focus:outline-none" title="詳細規則">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
            </svg>
          </button>
        </p>
      </div>
      
      <!-- 詳細規則Modal -->
      <div v-if="showRulesModal" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- 背景遮罩 -->
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showRulesModal = false"></div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          
          <!-- Modal內容 -->
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-left w-full">
                  <h3 class="text-xl font-semibold text-primary mb-4" id="modal-title">土地法第34-1條處分條件說明</h3>
                  <div class="space-y-4">
                    <div>
                      <h4 class="font-medium text-lg text-primary mb-2">處分條件（符合下列任一條件即可）</h4>
                      <ul class="list-disc pl-5 space-y-2">
                        <li>條件一：同意處分之共有人數超過共有人總數 1/2，且其應有部分合計超過共有部分 1/2</li>
                        <li>條件二：同意處分之應有部分合計超過共有部分 2/3</li>
                      </ul>
                      <div class="mt-2 text-sm text-gray-600">
                        參照：<a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0060001&flno=34-1" target="_blank"
                          class="text-primary hover:underline">土地法第34-1條</a>
                      </div>
                    </div>

                    <div>
                      <h4 class="font-medium text-lg text-primary mb-2">公同共有特別規定</h4>
                      <ul class="list-disc pl-5 space-y-2">
                        <li>每個公同共有群組需先符合以下任一條件，才視為該群組同意處分：
                          <ul class="list-circle pl-5 mt-2 space-y-1">
                            <li>同意處分之共有人數超過該群組共有人總數 1/2，且其應有部分合計超過該群組共有部分 1/2</li>
                            <li>同意處分之應有部分合計超過該群組共有部分 2/3</li>
                          </ul>
                        </li>
                        <li>當公同共有群組同意處分時：
                          <ul class="list-circle pl-5 mt-2 space-y-1">
                            <li>人數計算：只計入實際同意的成員人數</li>
                            <li>面積計算：依實際同意成員的持分比例計算</li>
                          </ul>
                        </li>
                        <li>當公同共有群組不同意處分時：
                          <ul class="list-circle pl-5 mt-2 space-y-1">
                            <li>人數及面積均不計入總計算</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="showRulesModal = false">
                關閉
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 左側輸入區域 -->
        <div class="lg:col-span-2">
          <!-- 所有權人列表 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-primary mb-6">所有權人資訊</h2>
            <div class="space-y-6">
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <div class="flex justify-between items-center">
                  <div class="font-medium">
                    <span class="text-gray-700">目前總持分：</span>
                    <span class="text-primary font-semibold">{{ formatShare(calculateTotalShare()) }}</span>
                  </div>
                  <div v-if="calculateTotalShare() === 1" class="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-md">總持分已達 1/1</div>
                </div>
                <div v-if="totalShareWarning" class="text-yellow-600 text-sm mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  {{ totalShareWarning }}
                </div>
              </div>
              <div v-for="(owner, index) in owners" :key="index"
                class="border border-gray-200 p-5 pr-10 rounded-lg bg-white shadow-sm hover:shadow transition-shadow overflow-hidden relative">
                <div class="flex flex-col space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4 flex-wrap gap-y-3">
                      <select v-model="owner.type" class="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition">
                        <option value="separate">分別共有</option>
                        <option value="joint">公同共有</option>
                      </select>
                      <div class="flex items-center space-x-2">
                        <input v-model.number="owner.numerator" type="number" placeholder="分子"
                          class="border border-gray-300 rounded-md px-3 py-2 w-16 md:w-20 focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                        <span class="text-gray-500 font-medium">/</span>
                        <input v-model.number="owner.denominator" type="number" placeholder="分母"
                          class="border border-gray-300 rounded-md px-3 py-2 w-16 md:w-20 focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                      </div>
                    </div>
                  </div>
                  
                  <!-- 分別共有 -->
                  <div v-if="owner.type === 'separate'" class="flex items-center justify-between mt-2 border-t border-gray-100 pt-3">
                    <input v-model="owner.name" type="text" placeholder="所有權人姓名"
                      class="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                    <label class="flex items-center space-x-3 ml-4">
                      <span class="text-gray-700">同意處分</span>
                      <input v-model="owner.agree" type="checkbox" class="form-checkbox h-5 w-5 text-primary rounded" />
                    </label>
                  </div>

                  <button @click="removeOwner(index)"
                    class="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <!-- 公同共有 -->
                <div v-if="owner.type === 'joint'" class="border-t border-gray-100 pt-4 mt-2">
                  <div class="mb-3 flex items-center justify-between">
                    <h3 class="text-sm font-medium text-gray-700">公同共有成員</h3>
                    <button @click="addJointMember(owner)" class="flex items-center text-sm text-primary hover:text-accent transition-colors px-2 py-1 rounded-md hover:bg-primary/5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                      </svg>
                      新增成員
                    </button>
                  </div>
                  <div class="grid gap-2">
                    <div v-for="(member, memberIndex) in owner.members" :key="memberIndex"
                      class="bg-gray-50 p-3 pr-10 rounded-md relative overflow-hidden border border-gray-200">
                      <div class="grid gap-3 md:flex md:items-center">
                        <input v-model="member.name" type="text" placeholder="成員姓名"
                          class="border border-gray-300 rounded-md px-3 py-2 w-full md:w-28 focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                        <div class="flex items-center space-x-2">
                          <input v-model.number="member.numerator" type="number" placeholder="分子"
                            class="border border-gray-300 rounded-md px-3 py-2 w-16 focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                          <span class="text-gray-500 font-medium">/</span>
                          <input v-model.number="member.denominator" type="number" placeholder="分母"
                            class="border border-gray-300 rounded-md px-3 py-2 w-16 focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
                        </div>
                        <label class="flex items-center space-x-3">
                          <span class="text-gray-700">同意處分</span>
                          <input v-model="member.agree" type="checkbox" class="form-checkbox h-5 w-5 text-primary rounded" />
                        </label>
                      </div>
                      <button @click="removeJointMember(owner, memberIndex)"
                        class="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div v-if="getJointGroupShareError(owner)" class="mt-3 bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                    <ul class="text-yellow-700 text-sm space-y-1">
                      <li v-for="(error, index) in getJointGroupShareError(owner)" :key="index" class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        {{ error }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-8 border-t border-gray-200 pt-6">
              <div v-if="totalShareError" class="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <div>{{ totalShareError }}</div>
              </div>
              
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <button @click="addOwner" class="flex items-center justify-center px-4 py-2.5 rounded-lg font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                  新增所有權人
                </button>
                
                <button @click="calculateResult"
                  class="flex items-center justify-center px-6 py-2.5 rounded-lg font-medium shadow-sm bg-primary text-white hover:bg-primary/90 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  計算結果
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 右側結果區域 -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 class="text-xl font-semibold text-primary mb-6">計算結果</h2>
            
            <div v-if="result.message" class="space-y-5">
              <div class="p-4 rounded-lg border" :class="{'bg-green-50 border-green-200': result.success, 'bg-red-50 border-red-200': !result.success}">
                <div class="flex items-start">
                  <div v-if="result.success" class="mr-3 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a8 8 0 11-16 0 8 8 0 0116 0z" />
                    </svg>
                  </div>
                  <div v-else class="mr-3 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="text-lg font-semibold" :class="{'text-green-700': result.success, 'text-red-700': !result.success}" v-html="result.message.split('<br>')[0]"></div>
                </div>
              </div>
              
              <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 class="font-medium text-gray-800 mb-3">詳細資訊</h3>
                <div class="space-y-2" v-html="result.message.split('<br>').slice(1).join('<br>')"></div>
              </div>
              
              <div class="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                <h3 class="font-medium text-yellow-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
                  </svg>
                  注意事項
                </h3>
                <ul class="mt-3 text-sm text-yellow-700 space-y-2">
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    本計算結果僅依您輸入的資料作為判斷依據
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    建議請洽詢專業律師或地政事務所確認實際要件
                  </li>
                </ul>
              </div>
              
              <button class="w-full px-6 py-3 flex items-center justify-center bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                列印計算結果
              </button>
            </div>
            
            <div v-else class="text-center py-12 border border-dashed border-gray-300 rounded-lg bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p class="text-gray-500">請填寫相關持分資料後點擊「計算結果」按鈕</p>
              <p class="text-gray-400 text-sm mt-1">結果將在此處顯示</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'

definePageMeta({
  title: '不動產共有物處分計算機 - 精準法拍',
  description: '計算不動產處分條件是否符合土地法第34-1條規定'
})

const showRulesModal = ref(false)

const owners = ref([
  {
    type: 'separate',
    numerator: null,
    denominator: null,
    name: '',
    agree: false,
    members: []
  }
])

const result = ref({ message: '', success: false })
const totalShareError = ref('')
const totalShareWarning = ref('')

function addOwner() {
  owners.value.push({
    type: 'separate',
    numerator: null,
    denominator: null,
    name: '',
    agree: false,
    members: []
  })
}

function removeOwner(index) {
  owners.value.splice(index, 1)
}

function addJointMember(owner) {
  const totalMembers = owner.members.length + 1
  owner.members.push({
    name: '',
    numerator: 1,
    denominator: totalMembers,
    agree: false
  })
  
  // 更新所有現有成員的持分比例
  owner.members.forEach(member => {
    member.numerator = 1
    member.denominator = totalMembers
  })
}

function removeJointMember(owner, memberIndex) {
  owner.members.splice(memberIndex, 1)
  
  // 更新剩餘成員的持分比例
  const remainingMembers = owner.members.length
  if (remainingMembers > 0) {
    owner.members.forEach(member => {
      member.numerator = 1
      member.denominator = remainingMembers
    })
  }
}

function getJointGroupShareError(group) {
  if (!group.members || group.members.length === 0) return null

  const errors = []

  if (group.members.length < 2) {
    errors.push('⚠️ 注意：公同共有至少需要2名成員')
  }

  const totalShare = group.members.reduce((sum, m) => {
    if (m.denominator === 0) return sum
    return sum + (m.numerator / m.denominator)
  }, 0)

  // 檢查每個成員的持分
  group.members.forEach((member, index) => {
    if (member.numerator === 0 || member.denominator === 0) {
      errors.push(`⚠️ 注意：第 ${index + 1} 位成員的持分比例不得為0`)
    }
  })

  if (totalShare > 1) {
    errors.push(`⚠️ 注意：此群組總持分 ${totalShare.toFixed(4)} 超過 1/1`)
  } else if (totalShare < 1) {
    errors.push(`⚠️ 注意：此群組總持分 ${totalShare.toFixed(4)} 尚未達到 1/1`)
  }

  return errors.length > 0 ? errors : null
}

function checkJointGroupConsent(group) {
  const totalMembers = group.members.length
  if (totalMembers < 2) {
    return {
      passed: false,
      agreeShare: 0,
      totalShare: 0,
      error: null
    }
  }

  let totalShare = 0
  let agreeShare = 0
  let validMembers = 0

  group.members.forEach(member => {
    if (member.denominator === 0 || member.numerator === 0) return
    const share = member.numerator / member.denominator
    totalShare += share
    if (member.agree) {
      agreeShare += share
    }
    validMembers++
  })

  // 如果群組內部持分不等於 1，視為無效
  if (Math.abs(totalShare - 1) > 0.0001) {
    return {
      passed: false,
      agreeShare: 0,
      totalShare: 0,
      error: `群組內部持分必須等於 1/1（目前：${totalShare.toFixed(4)}）`
    }
  }

  if (totalShare === 0 || validMembers === 0) return {
    passed: false,
    agreeShare: 0,
    totalShare: 0,
    error: '群組內無有效成員'
  }

  const agreeMembers = group.members.filter(m => m.agree).length

  const rule1 = agreeMembers > validMembers / 2 && agreeShare > totalShare / 2
  const rule2 = agreeShare > totalShare * (2 / 3)

  return {
    passed: rule1 || rule2,
    agreeShare,
    totalShare,
    error: null
  }
}

function formatShare(share) {
  if (typeof share !== 'number') return '0'
  return share.toFixed(4)
}

const calculateTotalShare = () => {
  const total = owners.value.reduce((sum, o) => {
    if (o.denominator === 0 || !o.denominator || !o.numerator) return sum
    return sum + (o.numerator / o.denominator)
  }, 0)
  return isNaN(total) ? 0 : total
}

const validateTotalShare = () => {
  const total = calculateTotalShare()
  const errors = []
  if (total > 1) {
    errors.push(`注意：總持分面積 ${total.toFixed(4)} 超過 1/1`)
    totalShareError.value = errors
    totalShareWarning.value = ''
  } else if (total < 1) {
    totalShareError.value = ''
    totalShareWarning.value = `注意：總持分面積 ${total.toFixed(4)} 尚未達到 1/1`
  } else {
    totalShareError.value = ''
    totalShareWarning.value = ''
  }
}

watch(owners, () => {
  validateTotalShare()
}, { deep: true })

const calculateResult = () => {
  const total = calculateTotalShare()
  if (total > 1) {
    result.value = {
      message: '❌ 無法計算：總持分面積超過 1/1',
      success: false
    }
    return
  }

  if (total < 1) {
    result.value = {
      message: '❌ 無法計算：總持分面積尚未達到 1/1（目前：' + total.toFixed(4) + '）',
      success: false
    }
    return
  }

  let totalAgreeShare = 0
  let totalAgreeCount = 0
  let totalOwnerCount = 0
  let errors = []

  owners.value.forEach(owner => {
    if (owner.type === 'joint') {
      const validMembers = owner.members.filter(m => m.denominator !== 0).length
      totalOwnerCount += validMembers

      const groupConsent = checkJointGroupConsent(owner)

      if (groupConsent.error) {
        errors.push(`公同共有群組錯誤：${groupConsent.error}`)
      } else if (groupConsent.passed) {
        const agreeMembers = owner.members.filter(m => m.agree).length
        totalAgreeCount += agreeMembers
        const groupAgreeShare = groupConsent.agreeShare / groupConsent.totalShare
        totalAgreeShare += (owner.numerator / owner.denominator) * groupAgreeShare
      }
    } else {
      totalOwnerCount++
      if (owner.agree) {
        totalAgreeCount++
        totalAgreeShare += (owner.numerator / owner.denominator)
      }
    }
  })

  if (errors.length > 0) {
    result.value = {
      message: '❌ 無法計算：<br>' + errors.join('<br>'),
      success: false
    }
    return
  }

  const rule1 = totalAgreeCount > totalOwnerCount / 2 && totalAgreeShare > total / 2
  const rule2 = totalAgreeShare > total * (2 / 3)

  let message = ''
  const success = rule1 || rule2

  if (rule1 && rule2) {
    message = '✅ 通過處分條件（條件一和條件二均成立）：<br>'
  } else if (rule1) {
    message = '✅ 通過處分條件（條件一成立）：<br>'
  } else if (rule2) {
    message = '✅ 通過處分條件（條件二成立）：<br>'
  } else {
    message = '❌ 不符合處分條件：<br>'
  }

  message += `- 總人數：${totalOwnerCount} 人（包含分別共有及公同共有成員）<br>`
  message += `- 同意人數：${totalAgreeCount} 人<br>`
  message += `- 同意人數比例：${totalAgreeCount}/${totalOwnerCount} (${(totalAgreeCount / totalOwnerCount * 100).toFixed(2)}%)<br>`
  message += `- 同意面積比例：${(totalAgreeShare / total * 100).toFixed(2)}%`

  result.value = { message, success }
}
</script>

<style scoped>
.list-circle {
  list-style-type: circle;
}
</style>
