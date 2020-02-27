<template>
  <div>
    <div class="aside">
      <img src="static/img/cateimg01.png"
           style="width:7rem;margin:0.2rem 0.2rem ;"
           alt="">
      <van-grid :column-num="3"
      clickable=""
                :center="false">
        <van-grid-item v-for="(value,index) in ListArr"
        to="/"
                       :key="index">
          <img :src="value.src"
               alt="">
          <p>{{value.tit}}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ListArr: [
        { src: "static/img/cateimg1-1.png", tit: "精选好物15元起" },
        { src: "static/img/cateimg1-2.png", tit: "999+好评" },
        { src: "static/img/cateimg1-3.png", tit: "明星商品低至69元" },
        { src: "static/img/cateimg1-4.png", tit: "断货补单王39元起" },
        { src: "static/img/cateimg1-5.png", tit: "9.9元超值好物" },
        { src: "static/img/cateimg1-6.png", tit: "鲜疏潮食" },
        { src: "static/img/cateimg1-7.png", tit: "早春单品" },
        { src: "static/img/cateimg1-8.png", tit: "50元幸福好物" }
      ]
    }
  }
}
</script>
<style scoped>
.aside {
  height: 100%;
}
.van-grid{
    margin: 0 0.2rem;
}
.van-grid-item img {
  width: 1.6rem;
  margin: 0 auto;
}
.van-grid-item p {
  padding: 0;
  margin: 0;
  font-size: 0.32rem;
}
</style>