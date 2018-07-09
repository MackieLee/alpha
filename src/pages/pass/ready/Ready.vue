<template>
  <div class="ready padding-15">
    <div class="txt-ctr">
      <Icon type="checkmark-circled" color="green" size="120"></Icon>
      <p class="padding-15">{{ sec }}秒后跳转到首页</p>
    </div>
  </div>
</template>

<script>
  import { ifAllowed } from '@/public/index'
  export default {
    data() {
      return {
        sec: '5'
      }
    },
    beforeMount() {
      ifAllowed(this)
      let _self = this
      let sec = 5
      let interval = window.setInterval(function() {
        if(sec === 0) {
          // 保存用户到store中
          window.clearInterval(interval)
          _self.$router.push({path: '/'})
        } else {
          _self.sec = sec
          sec--
        }
      }, 1000)
    }
  }
</script>

<style lang="scss" scoped>

</style>
