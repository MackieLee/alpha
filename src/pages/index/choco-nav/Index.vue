<template>
  <div class="padding-ver-6">
    <div class="fx-wrap-wrap bg-fff padding-ver-6">
      <router-link v-for="item in items" :key="item.id" :to="item.path" class="item txt-ctr">
        <img :src="item.src" alt="" width="70%">
        <p class="item-title">{{ item.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import img1 from '@/assets/choco-nav/发音.svg'
  import img2 from '@/assets/choco-nav/周边店.svg'
  import img3 from '@/assets/choco-nav/咨询.svg'
  import img4 from '@/assets/choco-nav/游学.svg'
  import img5 from '@/assets/choco-nav/直播.svg'
  import img6 from '@/assets/choco-nav/讲师.svg'
  import img7 from '@/assets/choco-nav/课程.svg'
  import img8 from '@/assets/choco-nav/题库.svg'

  export default {
    data() {
      return {
        items: [
          {src: img1, title: '发音', path: '/'},
          {src: img2, title: '周边店', path: '/'},
          {src: img3, title: '咨询', path: '/'},
          {src: img4, title: '游学', path: '/'},
          {src: img5, title: '直播', path: '/'},
          {src: img6, title: '讲师', path: '/'},
          {src: img7, title: '课程', path: '/'},
          {src: img8, title: '题库', path: '/'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    width: 25%;
  }
</style>
