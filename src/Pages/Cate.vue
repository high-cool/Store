<template>
  <div>
    <p class="searchInp">
      <van-search placeholder="搜索商品，共22526款商品"
                  clearable
                  input-align="center"></van-search>
    </p>
    <div class="content">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(value,index) in asideList"
                          :key="index"
                          :to="'/cate?id='+index"
                          :title="value" />
      </van-sidebar>
      <!-- 侧边栏 -->
    <Aside></Aside>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from ".././components/Footer"
import Aside from "./Aside"
export default {
  components:{
    Aside,Footer
  },
  data() {
    return {
      activeKey: 0,
      asideList: [
        "推荐专区",
        "宅家防护",
        "爆品专区",
        "新品专区",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个户清理",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色",
        "sadasasd"
      ]
    }
  }
}
</script>
<style scoped>
.searchInp {
  width: 100%;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #000;
  position: fixed;
  top: 0;
  left: 0;
}
.content {
  max-width: 12rem;
  height: calc(100vh - 3.2rem);
  overflow: hidden;
  display: flex;
  margin: 1.6rem auto 0;
}
.van-sidebar {
  width: 2.5rem;
  height: 100%;
  overflow: auto;
  padding-bottom: 2.6rem;
  flex-shrink: 0;
}
.van-sidebar-item {
  padding: 0.2rem 0;
  margin-bottom: 0.2rem;
  background-color: #fff;
}
.van-sidebar-item--select{
  color: red;
}
</style>