// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/sitemap', {
      siteUrl: 'https://strong-elf-17e67e.netlify.app',
      exclude: ['/admin/**'],
      dynamicUrlsApiEndpoint: '/__sitemap-urls'
    }],
    ['nuxt-gtag', {
      id: 'G-99EPRPNRC6', // Google Analytics GA4 測量 ID
      config: {
        page_title: true,
        anonymize_ip: true,
        send_page_view: true
      },
      debug: process.env.NODE_ENV !== 'production' // 在開發模式下啟用調試
    }]
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: '精準法拍 - 專業法拍屋資訊平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '提供最即時、最精準的法拍屋資訊，結合專業知識與實用工具，讓您輕鬆掌握法拍市場動態。' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap' }
      ]
    }
  }
})
