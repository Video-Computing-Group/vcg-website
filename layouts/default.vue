<template>
  <div>
    <Header/>
    <NavBar/>
    <nuxt/>
    <Footer/>
    
  </div>
</template>

<script>
import Header from '../components/HeaderAmit.vue'
import NavBar from '../components/NavAmit.vue'
import Footer from '../components/FooterAmit.vue'

export default {
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

