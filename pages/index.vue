<template>
  <div class="inherit-height">
    <div id="home-body">
      <PromoImagesAmit></PromoImagesAmit>
      <AmitHomeBody></AmitHomeBody>
      <!-- <NewsAmit></NewsAmit> -->
      <Sponsors></Sponsors>
    </div>
  </div>
</template>

<script>
import AmitHomeBody from '~/components/HomeBodyAmit.vue'
// import NewsAmit from '~/components/NewsAmit.vue'
import PromoImagesAmit from '~/components/PromoImagesAmit.vue'
import Sponsors from '~/components/SponsorsAmit.vue'

export default {
  components: {
    'AmitHomeBody': AmitHomeBody,
    // 'NewsAmit': NewsAmit,
    'PromoImagesAmit': PromoImagesAmit,
    'Sponsors': Sponsors
  },
  name: 'AmitHeader'
}
</script>
