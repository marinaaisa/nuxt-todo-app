
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
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
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      alwaysRedirect: true,
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
          file: 'en/index.js'
        },
        {
          code: 'es',
          iso: 'es-ES',
          name: 'Español',
          file: 'es/index.js'
        }
      ],
      lazy: true,
      langDir: '/locales/',
      defaultLocale: 'en'
    }],
    'nuxt-webfontloader'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/mq.scss',
      '@/assets/scss/variables.scss'
    ]
  },

  webfontloader: {
    custom: {
      families: ['SF Pro Text', 'SF Pro Display'],
      urls: ['/fonts/fonts.css']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
