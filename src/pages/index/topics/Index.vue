<template>
  <div class="padding-ver-6">
    <div class="fx-wrap-wrap bg-fff padding-ver-6">
      <router-link v-for="item in items" :key="item.id" :to="item.path" class="item fx-spc-btn txt-ctr">
        <img :src="item.src" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
  import img01 from '@/assets/topics/推荐课程.svg'
  import img02 from '@/assets/topics/加入vip.svg'
  import img03 from '@/assets/topics/促销课程.svg'
  import img04 from '@/assets/topics/完结课程.svg'

  export default {
    data() {
      return {
        items: [
          { src: img01, path:''},
          { src: img02, path:''},
          { src: img03, path:''},
          { src: img04, path:''}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    display: block;
    width: 50%;
    img {
      width: 100%;
    }
  }
</style>
