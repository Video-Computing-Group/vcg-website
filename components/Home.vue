/**
** Created by John Pham
** www.johnpham.net
** This code is under MIT
**/

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
import AmitHomeBody from './HomeBodyAmit'
import NewsAmit from './NewsAmit'
import PromoImagesAmit from './PromoImagesAmit'
import Sponsors from './SponsorsAmit'

export default {
  components:{
    'AmitHomeBody': AmitHomeBody,
    'NewsAmit': NewsAmit,
    'PromoImagesAmit': PromoImagesAmit,
    'Sponsors': Sponsors,
  },
  name: 'AmitHeader'
}
</script>