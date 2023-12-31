export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'indicators',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { action: 'read', subject: 'Auth' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://localhost:7100/api'
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'actividad-id',
        path: '/public/Actividad/:id',
        component: resolve(__dirname, 'pages/public/Actividad/[id].vue')
      });
      routes.push({
        name: 'services-id',
        path: '/public/services/:id',
        component: resolve(__dirname, 'pages/public/services/[id].vue')
      });
      routes.push({
        name: 'cumplimiento-id',
        path: '/public/Cumplimiento/:id',
        component: resolve(__dirname, 'pages/public/Cumplimiento/[id].vue')
      });
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/Login/authentication', method: 'post', propertyName: 'token' },
          //logout: {url: '/auth/logout', method: 'post'},
          user: { url: '/Users/1', method: 'get', propertyName: 'nombre' }
        },

        tokenType: ''
      }
    }
  }
}
