<template>
  <div class="container">
    <HeaderAmit/>
    <NavBar/>
    <div class="inherit-height">
      <div id="home-body">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Page Not Found</h1>
          </div>
        </div>
      </div>
    </div>
    <FooterAmit/>
  </div>
</template>

<script>
import HeaderAmit from '../components/HeaderAmit.vue'
import NavBar from '../components/NavAmit.vue'
import FooterAmit from '../components/FooterAmit.vue'

export default {
  components: {
    HeaderAmit,
    NavBar,
    FooterAmit
  }
}
</script>

<style scoped>
h1 {
  margin-top: 20px !important;
  margin-bottom: 20px;
}
</style>
