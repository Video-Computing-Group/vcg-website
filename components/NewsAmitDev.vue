<template>
  <div class="home-body">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="n in news" :key="n.name">
          <a v-if="n.link.length > 0" :href="'/publications/' + n.link">
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
          <a v-if="n.link.length > 0" :href="'/publications/' + n.link">
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
            name: 'NSF Grant in Smart and Autonomous Systems',
            link: '',
            externalLink: 'https://ucrtoday.ucr.edu/49421',
            image: 'Drone.jpg',
            source: 'NSF Grant 2017',
            type: ''
          },
          {
            name: 'Diversity-Aware Multi-Video Summarization',
            link: 'TIP_Rameswar.pdf',
            image: 'TIP.png',
            source: 'IEEE',
            type: 'TIP 2017'
          },
          {
            name: 'Camera Network Video Summarization',
            link: 'TMM_Rameswar.pdf',
            image: 'TMM.png',
            source: 'IEEE',
            type: 'TMM 2017'
          },
          {
            name: 'Prediction of Future Activities',
            link: 'ICCV_Tahmida.pdf',
            image: 'ICCV_1.png',
            source: 'ICCV 2017',
            type: ''
          },
          {
            name: 'Image Forensics',
            link: 'ICCV_Jawad.pdf',
            image: 'ICCV_2.png',
            source: 'ICCV 2017',
            type: ''
          },
          {
            name: 'Weakly Supervised Summarization',
            link: 'ICCV_Rameswar.pdf',
            image: 'ICCV_3.png',
            source: 'ICCV 2017',
            type: ''
          },
          {
            name: 'Reid in Dynamic Camera Networks',
            link: 'cvpr2017reid.pdf',
            image: 'CVPR_1.png',
            source: 'CVPR 2017',
            type: ''
          },
          {
            name: 'Collaborative Summarization',
            link: 'cvpr2017summ.pdf',
            image: 'CVPR_2.png',
            source: 'CVPR 2017',
            type: ''
          },
          {
            name: 'Active Learning with Non-Uniform Subset Selection',
            link: 'cvpr2017subset.pdf',
            image: 'CVPR_3.png',
            source: 'CVPR 2017',
            type: ''
          },
          {
            name: 'Typicality for Subset Selection',
            link: 'cvpr2017typicality.pdf',
            image: 'CVPR_4.png',
            source: 'CVPR 2017',
            type: ''
          },
          {
            name: 'Distributed Estimation for Tracking in Camera Networks',
            link: 'ICPR_Rameswar.pdf',
            image: 'TPAMI_1.png',
            source: 'IEEE',
            type: 'TPAMI 2016'
          },
          {
            name: 'Network Consistent Data Association',
            image: 'TPAMI_2.png',
            link: 'PAMI14-Reid.pdf',
            source: 'IEEE',
            type: 'TPAMI 2016'
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
              slidesPerView: 1
            },
            1000: {
              slidesPerView: 2
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
.swiper-container {
  height: 300px;
}
.banner {
  height: 5vh;
  width: 100%;
  opacity: 0.80;
  color: white;
  text-align: center;
  vertical-align: center;
  line-height: 5vh;
}
.news {
  height: 175px;
}
.swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
  bottom: 0px;
}
</style>