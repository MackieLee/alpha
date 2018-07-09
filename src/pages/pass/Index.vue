<template>
  <div class="pass">
    <div class="top-bar fx-spc-btn fx-ver-ctr padding-6">
      <Icon size="24 " class="icon-back" type="ios-arrow-back" @click="$router.go(-1)" />
      <span>{{ head.title + '爱沃趣' }}</span>
      <router-link :to="head.to">{{ head.obj }}</router-link>
    </div>
    <p class="logo txt-ctr">
      <span>爱沃趣</span>
    </p>
    <img class="pass-img top" src="./背景.png" width="100%" />
    <router-view></router-view>
    <img class="pass-img btm" src="./fuji.png" width="100%" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        head: {
          title: '',
          to: '',
          obj: '',
        }
      }
    },
    methods: {
      lockPage: function() {
        let path = this.$route.path
        if(path === '/login' || path === '/pass/login') {
          this.head = {
            title: '登陆',
            to: '/register',
            obj: '注册'
          }
        } else if(path === '/register' || path === '/pass/rigister') {
          this.head = {
            title: '注册',
            to: '/login',
            obj: '注册'
          }
        } else {
          this.head = {
            title: '',to: '',obj: ''
          }
        }
      }
    },
    watch: {
      $route() {
        this.lockPage()
      }
    },
    mounted() {
      this.lockPage()
    }

  }
</script>

<style lang="scss" scoped>
  .pass {
    background: #fff;
    height: 100%;
    width: 100%;
    overflow: scroll;
    position: absolute;
  }
  .top-bar {
    background: #f7f7f7;
  }
  .top {
    width: 60%;
    position: absolute;
    top: 2.5rem;
    right: 0;
  }
  .btm {
    position: absolute;
    bottom: 0;
  }
  .logo {
    padding-top: 1rem;
    span {
      width: 70%;
      content: url('./aiwoqu.svg');
    }
  }
  @media screen and (min-width: 500px) and (max-width: 767px), (min-width: 1024px) {
    .pass-img {
      display: none;
    }
  }
</style>
