module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Video Computing Group at UC Riverside',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Video Computing Group at UC Riverside' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/UCRlogo.png' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/amitrc.min.css' },
      { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,900' }
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/bootstrap.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-110850078-1'
    }]
  ]
}
