<template>
  <div class="home-body">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="n in news" :key="n.name">
          <a v-if="n.link.length > 0" :href="'../../static/publications/' + n.link">
            <div v-if="n.source" class="banner" :style="convertToHex(n.source)">
              <strong>{{ n.source }} <span v-if="n.type">- {{ n.type }}</span></strong>
            </div>
            <img class="news" :src="'/img/featured_news/' + n.image" :alt="n.name">
          </a>
          <a v-else :href="n.externalLink">
            <div v-if="n.source" class="banner" :style="convertToHex(n.source)">
              <strong>{{ n.source }} <span v-if="n.type">- {{ n.type }}</span></strong>
            </div>
            <img class="news" :src="'/img/featured_news/' + n.image" :alt="n.name">
          </a>
          <a v-if="n.link.length > 0" :href="'../../static/publications/' + n.link">
            {{ n.name }} 
          </a>
          <a v-else :href="n.externalLink">
            {{ n.name }}
          </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
      <div class="swiper-pagination"  slot="pagination"></div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      convertToHex: function (typeName) {
        let hash = 0
        for (let i = 0; i < typeName.length; i++) {
          hash = typeName.charCodeAt(i) + ((hash << 5) - hash)
        }
        let c = (hash & 0x00FFFFFF)
          .toString(16)
          .toUpperCase()

        let styleObject = { backgroundColor: '#' + '00000'.substring(0, 6 - c.length) + c }

        return styleObject
      }
    },
    data () {
      return {
        news: [
          {
            name: 'Drones to Grow Mind of Their Own',
            link: '',
            externalLink: 'https://ucrtoday.ucr.edu/49421',
            image: 'Drone.jpg',
            source: 'NSF Grant 2017',
            type: ''
          },
          {
            name: 'Joint Prediction of Activity Labels and Starting Times in Untrimmed Videos',
            link: 'ICCV_Tahmida.pdf',
            image: 'iccv1.png',
            source: 'ICCV 2017',
            type: ''
          },
          {
            name: 'Exploiting Spatial Structure for Localizing Manipulated Image Regions',
            link: 'ICCV_Jawad.pdf',
            image: 'iccv2.png',
            source: 'ICCV 2017',
            type: ''
          },
          {
            name: 'Weakly Supervised Summarization of Web Videos',
            link: 'ICCV_Rameswar.pdf',
            image: 'iccv3.png',
            source: 'ICCV 2017',
            type: ''
          },
          {
            name: 'Unsupervised Adaptive Re-identification in Open World Dynamic Camera Networks',
            link: 'cvpr2017reid.pdf',
            image: 'cvpr.png',
            source: 'CVPR 2017',
            type: ''
          },
          {
            name: 'Collaborative Summarization of Topic-Related Videos',
            link: 'cvpr2017summ.pdf',
            image: 'cvpr2017summ.png',
            source: 'CVPR 2017',
            type: ''
          },
          {
            name: 'Non-Uniform Subset Selection for Active Learning in Structured Data',
            link: 'cvpr2017subset.pdf',
            image: 'cvpr2017typical.png',
            source: 'CVPR 2017',
            type: ''
          },
          {
            name: 'The Impact of Typicality for Informative Representative Selection',
            link: 'cvpr2017typicality.pdf',
            image: 'cvpr2017typicality.png',
            source: 'CVPR 2017',
            type: ''
          },
          {
            name: 'Distributed Multi-target Tracking and Data Association in Vision Networks ',
            link: 'eccv2016_jawad.pdf',
            image: 'eccv2016_jawad.png',
            source: 'IEEE',
            type: 'TPAMI 2017'
          },
          {
            name: 'Re-Identification in the Function Space of Feature Warps',
            image: 'tpami.png',
            link: 'PAMI14-Reid.pdf',
            source: 'IEEE',
            type: 'TPAMI 2017'
          },
          {
            name: 'Diversity-aware Multi-Video Summarization',
            link: 'TIP_Rameswar.pdf',
            image: 'tip.png',
            source: 'IEEE',
            type: 'TIP 2017'
          },
          {
            name: 'Multi-View Surveillance Video Summarization via Joint Embedding and Sparse Optimization',
            link: 'TMM_Rameswar.pdf',
            image: 'tmm.png',
            source: 'IEEE',
            type: 'TMM 2017'
          }
        ],
        swiperOption: {
          paginationClickable: true,
          autoplay: 2000,
          slidesPerView: 4,
          spaceBetween: 30,
          grabCursor: true,
          watchSlidesProgress: true,
          watchSlidesVisibility: true,
          disableOnInteraction: true,
          pagination: '.swiper-pagination',
          breakpoints: {
            800: {
              slidesPerView: 1,
              autoplay: 500
            },
            1000: {
              slidesPerView: 2,
              autoplay: 1000
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
.banner {
  height: 5vh;
  width: 100%;
  /* background-color: #ffc800; */
  opacity: 0.80;
  color: white;
  text-align: center;
  vertical-align: center;
  line-height: 5vh;
  /* position: absolute; */
  /* z-index: 1; */
}
.news {
  height: 100%;
}
</style>