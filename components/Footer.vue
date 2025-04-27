<template>
  <footer class="bg-primary text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Brief -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center mb-4">
            <img src="/images/logo.svg" alt="精準法拍 Logo" class="h-10 w-auto mr-2 bg-white rounded-md p-1">
            <span class="text-xl font-bold">精準法拍</span>
          </div>
          <p class="text-gray-300 text-sm">
            精準鎖定好標的，安心代標零煩惱
          </p>
        </div>
        
        <!-- Links -->
        <div class="hidden md:block">
          <h3 class="text-lg font-semibold mb-4">網站導覽</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-300 hover:text-accent transition">首頁</NuxtLink></li>
            <li><NuxtLink to="/cases" class="text-gray-300 hover:text-accent transition">法拍物件</NuxtLink></li>
            <li><NuxtLink to="/articles" class="text-gray-300 hover:text-accent transition">法拍知識</NuxtLink></li>
            <li><NuxtLink to="/tools" class="text-gray-300 hover:text-accent transition">實用工具</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold mb-4">聯絡資訊</h3>
          <ul class="space-y-2 text-gray-300">
            <li>電話：02-XXXX-XXXX</li>
            <li>Email：contact@bidpro.tw</li>
            <li>LINE：@bidprotw</li>
          </ul>
        </div>
        
        <!-- Subscribe -->
        <div>
          <h3 class="text-lg font-semibold mb-4">訂閱更新</h3>
          <form class="space-y-2">
            <input type="email" placeholder="您的 Email" class="w-full px-3 py-2 text-gray-800 rounded-md">
            <button type="submit" class="w-full bg-accent text-white px-3 py-2 rounded-md hover:bg-opacity-90 transition">
              訂閱
            </button>
          </form>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
        <p>&copy; 2024 精準法拍. 版權所有.</p>
        <div class="space-x-4 mt-2 md:mt-0">
          <NuxtLink to="/privacy" class="hover:text-gray-300">隱私權政策</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-gray-300">使用條款</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template> 