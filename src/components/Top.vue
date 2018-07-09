<template>
  <div class="top bg-fff fixed">
    <div class="fx-spc-btn fx-ver-ctr">
      <div class="padding-horz-6 fx-ver-ctr logo">
        <img src="./awq_logo.png" />
      </div>
      <div class="padding-horz-6 fx-ver-ctr" @click="modal1 = !modal1">
        <Badge dot class="item">
          <img src="./head.jpeg">
        </Badge>
      </div>
    </div>
    <Modal
      v-model="modal1"
      :styles="{top: '3rem'}"
      width="auto"
      :closable=false
    >
      <div class="fx-spc-btn fx-ver-ctr" slot="header" v-if="logined">
        <a href="" class="block">一坨大便</a>
        <div><Icon type="log-out"/>切换账号</div>
      </div>
      <div class="user-set-panel fx-spc-around fx-wrap-wrap">
        <a v-for="item in items" :href="item.href" :key="item.id" class="a-item">
          <Badge count="100">
            <img :src="item.src">
          </Badge>
          <p>{{ item.title }}</p>
        </a>
      </div>
      <div slot="footer">
        <div v-if="!logined" class="fx-horz-ctr flex fx-ver-ctr" @click="modal1 = false">
          <router-link to="/pass" class="sm-btn">登陆 / 注册</router-link>
        </div>
        <div v-else class="fx-spc-btn fx-ver-ctr">
          <div><Icon type="" />沃趣币：{{ xuebi }}</div>
          <div><input class="sm-btn" type="button" value="打卡" /></div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
  import img01 from '@/assets/userPanel/卡券.svg'
  import img02 from '@/assets/userPanel/收藏.svg'
  import img03 from '@/assets/userPanel/订单.svg'
  import img04 from '@/assets/userPanel/我的课程.svg'
  import img05 from '@/assets/userPanel/账户.svg'
  import img06 from '@/assets/userPanel/返利.svg'

  export default {
    data() {
      return {
        modal1: false,
        logined: true,
        xuebi: 0,
        items: [
          {
            src: img01,
            href: '#',
            title: '我的卡券',
          },
          {
            src: img02,
            href: '#',
            title: '我的收藏',
          },
          {
            src: img03,
            href: '#',
            title: '我的订单',
          },
          {
            src: img04,
            href: '#',
            title: '我的课程',
          },
          {
            src: img05,
            href: '#',
            title: '我的账户',
          },
          {
            src: img06,
            href: '#',
            title: '我的返利',
          },
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .top {
    height: 3.125rem;
    width: 100%;
    z-index: 2100;
    border-bottom: 1px solid  #e9eaea;
  }
  .logo{
    height: 3.125rem;
    img {
      height: 2.25rem;
    }
  }
  .item img {
    height: 1.5rem;
  }
  .user-set-panel {
    padding: 1.5rem 1rem 0;
    .a-item {
      display: inline-block;
      position: relative;
      width: 30%;
      text-align: center;
      margin-bottom: 1rem;
      img {
        width: 3.75rem;
      }
    }
  }
</style>
