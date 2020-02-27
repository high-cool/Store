<template>
  <div>
    <van-nav-bar :title="Tit"
                 fixed>
      <van-icon name="wap-home-o"
                slot="left"
                @click="toIndex" />
      <van-icon name="search"
                slot="right" />
      <van-icon name="shopping-cart-o"
                slot="right"
                @click="toCart" />
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
    props:["Tit"],
  
  methods: {
    toIndex() {
      this.$router.replace("/")
    },
    toCart(){
        this.$router.replace("/cart")
    }
  }
}
</script>
<style scoped>
.van-nav-bar{
  background: #eee;
}
.van-icon {
  color: #888;
  font-size: 0.80rem;
  margin: 0 0.2rem;
  color: #000;
}
</style>