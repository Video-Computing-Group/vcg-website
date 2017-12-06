<template>
  <div class="container">
    <HeaderAmit/>
    <NavBar/>
    <PromoImagesAmit></PromoImagesAmit>
    <nuxt/>
    <FooterAmit/>
  </div>
</template>

<script>
import HeaderAmit from '../components/HeaderAmit.vue'
import NavBar from '../components/NavAmit.vue'
import FooterAmit from '../components/FooterAmit.vue'
import PromoImagesAmit from '../components/PromoImagesAmit.vue'

export default {
  components: {
    HeaderAmit,
    NavBar,
    FooterAmit,
    PromoImagesAmit
  }
}
</script>

