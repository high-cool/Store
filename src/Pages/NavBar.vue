<template>
  <div>
    <van-nav-bar title="值得买"
                 fixed>
      <van-icon name="wap-home-o"
                slot="left"
                @click="toIndex" />
      <van-icon name="search"
                slot="right" />
      <van-icon name="shopping-cart-o"
                slot="right" @click="toCart"/>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
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
.van-icon {
  color: #888;
  font-size: 0.68rem;
  margin: 0 0.2rem;
}
</style>