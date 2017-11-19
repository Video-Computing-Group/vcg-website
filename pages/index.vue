<template>
  <div class="inherit-height">
    <div id="home-body">
      <PromoImagesAmit></PromoImagesAmit>
      <AmitHomeBody></AmitHomeBody>
      <NewsAmit></NewsAmit>
      <Sponsors></Sponsors>
    </div>
  </div>
</template>

<script>
import AmitHomeBody from '~/components/HomeBodyAmit.vue'
import NewsAmit from '~/components/NewsAmitDev.vue'
import PromoImagesAmit from '~/components/PromoImagesAmit.vue'
import Sponsors from '~/components/SponsorsAmit.vue'

// Needed for SSR vue-awesome-swiper
import Vue from 'vue'

if (process.browser) {
  require('swiper/dist/css/swiper.css')
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}

export default {
  components: {
    'AmitHomeBody': AmitHomeBody,
    'NewsAmit': NewsAmit,
    'PromoImagesAmit': PromoImagesAmit,
    'Sponsors': Sponsors
  },
  name: 'AmitHeader'
}
</script>
