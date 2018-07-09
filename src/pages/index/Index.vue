<template>
  <div class="scope">
    <top></top>
    <div class="vessel">
      <!-- 轮播图 开始 -->
      <Swiper>
        <Slide v-for="(item,index) in images" :key="index">
          <img :src="item" width="100%">
        </Slide>
      </Swiper>
      <!-- 轮播图 结束 -->
      <!-- 巧克力导航 开始 -->
      <choco-nav></choco-nav>
      <!-- 巧克力导航 结束 -->
      <!-- 广告 开始 -->
      <div>
        <img src="./ad.png" width="100%" alt="">
      </div>
      <!-- 广告 结束 -->
      <!-- 主题 开始 -->
        <topics></topics>
      <!-- 主题 结束 -->
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import Top from '@/components/Top'
  import Bottom from '@/components/Bottom'
  import ChocoNav from './choco-nav/Index'
  import Topics from './topics/Index'

  import {Swiper, Slide} from 'vue-swiper-component'

  import img01 from '@/assets/img01.jpg'
  import img02 from '@/assets/img02.jpg'
  import img03 from '@/assets/img03.jpg'

  export default {
    components: {
      Top,
      Bottom,
      ChocoNav,
      Topics,
      Swiper,
      Slide
    },
    data() {
      return {
        images: [
          img01, img02, img03,
        ],
        adModal: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vessel {
    max-width: 1000px;
    min-height: 100%;
    margin-top: 3.125rem;
    z-index: 500;
  }
</style>
