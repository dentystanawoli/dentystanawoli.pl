export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Dentysta na Woli',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  messages: {
    error_404: 'Nie znaleziono strony.',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/theme/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://google-fonts.nuxtjs.org
    '@nuxtjs/google-fonts',
    // https://github.com/robcresswell/nuxt-compress
    'nuxt-compress'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/nuxt-content-git
    'nuxt-content-git'
  ],

  // Disable Bootstrap and Bootstrap Vue CSS files.
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    components: [
      // Container, row and col
      'BContainer',
      'BRow',
      'BCol',
      // Navbar items
      'BNavbar',
      'BNavbarBrand',
      'BNavbarToggle',
      'BCollapse',
      'BNavbarNav',
      'BNavItem',
      'BNavItemDropdown',
      'BDropdownItem',
      // Nav
      'BNav',
      // Icons
      'BIcon',
      'BIconFacebook',
      'BIconTelephoneFill',
      'BIconMapFill',
      'BIconEnvelopeFill',
      'BIconClock'
    ]
  },

  // Google Fonts.
  googleFonts: {
    display: 'swap',
    families: {
      'Open+Sans': true
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      babelrc: true
    }
  },

  generate: {
    dir: 'public',
    fallback: '404.html'
  }
}
