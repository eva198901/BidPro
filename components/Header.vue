<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img src="/images/logo.svg" alt="精準法拍 Logo" class="h-10 w-auto mr-3">
          <span class="text-xl font-bold text-primary">精準法拍</span>
        </NuxtLink>
        
        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="text-primary hover:text-accent transition">首頁</NuxtLink>
          <NuxtLink to="/cases" class="text-primary hover:text-accent transition">法拍物件</NuxtLink>
          <NuxtLink to="/articles" class="text-primary hover:text-accent transition">法拍知識</NuxtLink>
          <NuxtLink to="/tools" class="text-primary hover:text-accent transition">實用工具</NuxtLink>
          <NuxtLink to="/events" class="text-primary hover:text-accent transition">活動講座</NuxtLink>
          <NuxtLink to="/about" class="text-primary hover:text-accent transition">關於我們</NuxtLink>
        </div>
        
        <!-- Mobile Menu Button (顯示在小螢幕) -->
        <button class="md:hidden flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template> 