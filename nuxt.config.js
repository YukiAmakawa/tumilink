
require('dotenv').config()
const { LIFF_ID } = process.env

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    script: [{ src: 'https://static.line-scdn.net/liff/edge/2/sdk.js' }],
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    LIFF_ID
  },
  generate: {
    dir: 'public'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/common.scss',
    '@/assets/css/reset.css',
    '@/assets/css/globals.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebase.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      })
    }
  }
}
