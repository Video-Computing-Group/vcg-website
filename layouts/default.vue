<template>
  <div class="container">
    <HeaderAmit/>
    <NavBar/>
    <PromoImagesAmit></PromoImagesAmit>
    <transition name="fade" mode="out-in">
      <nuxt/>
    </transition>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
