// eslint-disable-next-line no-unused-vars
import path from 'path'
// eslint-disable-next-line no-unused-vars
import fs from 'fs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  server: {
    port: 5000
    // host: 'local.mydomain.dk'
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt'))
    // }
  },
  head: {
    title: 'METRO wines',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/nouislider/distribute/nouislider.css',
    '@/assets/styles/index.scss'
  ],
  // http: {
  //   proxy: true // Can be also an object with default options
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/html2canvas.js', ssr: false },
    { src: '~plugins/mask.js', ssr: false },
    { src: '~plugins/vuelidate.js', ssr: false },
    '~/plugins/vuePrototype.js',
    '~/plugins/bus.js'
    // '~/plugins/slider.js'
  ],

  router: {
    middleware: 'initProject'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
    ['nuxt-mail', {
      message: [
        { name: 'support', to: 'Irina.naumova01@metro-cc.ru' },
        { name: 'support', to: 'valeriya.morozova@metro-cc.ru' },
        { name: 'support', to: 'xsehywx@gmail.com' }
      ],
      smtp: {
        host: 'mail1.metro-cc.ru',
        port: 465,
        auth: {
          user: 'support@winelist.metro-cc.ru',
          pass: 'pLSG3x5JtF'
        }
      }
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   proxy: true,
  //   proxyHeaders: false
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // proxy: {
  //   '/api/v1': { target: 'https://api.metro-cc.ru', pathRewrite: { '^/api/v1': '' } }
  //
  //   // '/api/': { target: 'https://api.metro-cc.ru', pathRewrite: { '^/api/v1': '' }, changeOrigin: true }
  // },
  // ''

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader'
        ]
      })
    }
  }
}
