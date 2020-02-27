<template>
  <div class="hello">
    <van-tabbar v-model="active"
                route>
      <van-tabbar-item v-for="(item,index) in arr"
                       :key="index"
                       :icon="item.icon"
                       replace
                       :to="item.name">{{item.titl}}</van-tabbar-item>,
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { titl: "首页", icon: "home-o", name: "/" },
        { titl: "分类", icon: "search", name: "/cate" },
        { titl: "值得买", icon: "friends-o", name: "buy" },
        { titl: "购物车", icon: "friends-o", name: "cart" },
        { titl: "个人", icon: "setting-o", name: "my" }
      ],
      active: 0
    }
  },
  methods: {
    TabChange(e) {
      this.active = e
    }
  }
}
</script>

<style scoped>
.van-tabbar-item {
  font-size: 0.4rem;
}
</style>
