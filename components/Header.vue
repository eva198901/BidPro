<template>
  <header class="bg-white shadow-md relative z-20">
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
        <button @click="toggleMobileMenu" class="md:hidden flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors">
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg absolute w-full">
      <div class="container mx-auto px-4 py-3">
        <div class="flex flex-col space-y-4 pb-4">
          <NuxtLink to="/" @click="closeMobileMenu" class="block px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition">首頁</NuxtLink>
          <NuxtLink to="/cases" @click="closeMobileMenu" class="block px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition">法拍物件</NuxtLink>
          <NuxtLink to="/articles" @click="closeMobileMenu" class="block px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition">法拍知識</NuxtLink>
          <NuxtLink to="/tools" @click="closeMobileMenu" class="block px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition">實用工具</NuxtLink>
          <NuxtLink to="/events" @click="closeMobileMenu" class="block px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition">活動講座</NuxtLink>
          <NuxtLink to="/about" @click="closeMobileMenu" class="block px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition">關於我們</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script> 