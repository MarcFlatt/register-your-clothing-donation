<script>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router'
import HeaderMenu from '@/components/navigation/headerMenu.vue'
import HeaderBar from '@/components/navigation/headerBar.vue'
import FooterBar from '@/components/navigation/footerBar.vue'

export default {
  name: 'AppView',
  data() {
    return {
      isDesktop: false,
      isTablet: false,
      isPhone: false
    }
  },
  components: {
    RouterView,
    HeaderMenu,
    HeaderBar,
    FooterBar
  },
  computed: {
    headerRoutes () {
      //get all header routes
      return this.$router.options.routes.filter((route) => route.navigationPart === 'header')
    },
    footerRoutes() {
      //get all footer routes
      return this.$router.options.routes.filter((route) => route.navigationPart === 'footer')
    },
    allRoutes() {
      //concat all selected routes
      return [].concat(this.headerRoutes, this.footerRoutes)
    }
  },
  methods: {
    /**
     * set vars based on the window size 
     * 
     * @return {void}
     */
    setDisplayParameter() {
      this.isDesktop = window.innerWidth >= 1024
      this.isTablet = window.innerWidth <= 1023 && window.innerWidth >= 768
      this.isPhone = window.innerWidth <= 767
    }
  },
  created() {
    this.setDisplayParameter()
    window.addEventListener('resize', this.setDisplayParameter)
  },
  unmount() {
    window.removeEventListener('resize', this.setDisplayParameter())
  }
}
</script>

<template>
  <HeaderMenu :routes="this.allRoutes" v-if="isTablet || this.isPhone" />
  <HeaderBar :routes="this.headerRoutes" v-if="isDesktop" />

  <RouterView />

  <FooterBar :routes="this.footerRoutes" v-if="isDesktop" />
</template>

<style>
  #app {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
