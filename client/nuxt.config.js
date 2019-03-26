export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "stylearth",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "the power of movement" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  serverMiddleware: [
    '~/middleware/log.js'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  // css: [
  // ],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  // ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-buefy',
    // '@nuxtjs/apollo'
  ],
  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: 'https://eu1.prisma.sh/samuel-andert-d264c8/stylearth/dev/'
  //     }
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

