<template>
  <div>
    <div class="title">
      <!-- 头部信息 -->
      <van-row class="header">
        <van-col span="6">
          <p>网易严选</p>
        </van-col>
        <van-col span="14">
          <van-search v-model="value"
                      background="#4fc08d"
                      placeholder="搜索商品，共22042款好物" />
        </van-col>
        <van-col span="4">
          <span>登陆</span>
        </van-col>
      </van-row>
      <!-- 标题分类栏 -->
      <van-tabs swipeable>
        <van-tab v-for="(item,index) in cateArr "
                 :title="item"
                 :key="index"
                 title-style="fontSize:0.4rem;">

        </van-tab>
      </van-tabs>
    </div>
    <div class="content"
         ref="cont">
      <!-- 轮播 -->
      <van-swipe :autoplay="3000"
                 height="2rem"
                 width="100%">
        <van-swipe-item v-for="(image, index) in swiper"
                        :key="index">
          <img src="../.././static/img/swiper_01.jpg"
               alt=""
               style="width:100%">
        </van-swipe-item>
      </van-swipe>
      <!-- 商品分类 -->
      <van-grid icon-size="56px"
                :border=false
                style="backgroundColor:#fff;"
                clickable
                :column-num="5">
        <van-grid-item v-for="(value,index) in cateTit"
                       :key="index"
                       :icon="value.src"
                       :text="value.tit" />
      </van-grid>
      <!-- 广告位1 -->
      <div class="ad1">
      </div>
      <div class="ad2">
        <!-- 广告位2 -->
        <van-grid :column-num="3"
                  clickable
                  :square="true"
                  :gutter="5">
          <van-grid-item v-for="(value,index) in adArr"
                         :key="index">
            <h4 style="fontSize:0.3rem;">{{value.MainTit}}</h4>
            <span style="color:green;fontSize:0.2rem;lineHeight:0.6rem;">{{value.subtitle}}</span>
            <img :src="value.src"
                 style="width:60px;"
                 alt="">
          </van-grid-item>

        </van-grid>
      </div>
      <!-- 新人专属 -->
      <div class="toNew">
        <van-divider>新人专属礼</van-divider>
        <div class="toNewLeft">
          <h4>新人专属礼包</h4>
          <img src="../.././static/img/cut1.png"
               alt="">
        </div>
        <div class="toNewRight">
          <div class="toNewRight_01">
            <h4>新人拼团</h4>
            <p>1元起包邮</p>
          </div>
          <div class="toNewRight_02">
            <h4>福利社</h4>
            <p>今日特价</p>
          </div>
        </div>

      </div>
      <!-- 类目热销榜 -->
      <div class="hotsale">
        <p>类目热销榜</p>
        <div class="hot_sale">
          <span>热销榜</span>
          <img src="../.././static/img/image02.png"
               alt="">
        </div>
        <div class="good_mark">
          <span>好评榜</span>
          <img src="../.././static/img/image03.png"
               alt="">
        </div>
        <van-grid :gutter="5"
                  :column-num="4"
                  style="margin:0 0.3rem;"
                  clickable>
          <van-grid-item v-for="(value,index) in hotSaleArr"
                         :key="index">
            <span style="fontSize:0.3rem;marginBottom:0.1rem;">{{value.tit}}</span>
            <img :src="value.src"
                 style="width:60px;"
                 alt="">
          </van-grid-item>

        </van-grid>
      </div>
      <!-- 限时购 -->
      <div class="hotsale New_first">
        <p>限时购
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span class="item">{{ timeData.hours }}</span>
              <span class="item">{{ timeData.minutes }}</span>
              <span class="item">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </p>
        <van-grid :gutter="6"
                  :column-num="3"
                  clickable>
          <van-grid-item v-for="(value,index) in LimitArr"
                         :key="index">
            <img :src="value.img"
                 style="width:80px;"
                 alt="">
            <span>{{value.newPrice}} <i>{{value.oldPrice}}</i></span>
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 新品首发 -->
      <div class="hotsale New_first">
        <p>新品首发</p>
        <van-grid :column-num="3"
                  clickable>
          <van-grid-item v-for="(value,index) in NewFirstArr"
                         :key="index">
            <img :src="value.src"
                 style="width:80px;"
                 alt="">
            <span style="fontSize:0.3rem;color:#000;">{{value.tit | controlShow(17)}}</span>
            <span>{{value.price}}</span>
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 其他服务 -->
      <div class="hotsale other">
        <van-grid :gutter="4"
                  :center="false"
                  :column-num="2"
                  clickable>
          <van-grid-item v-for="(value,index) in OtherArr"
                         :key="index">
            <h4>{{value.tit}}</h4>
            <p>{{value.subtit}}</p>
            <p>
              <img :src="value.src_left"
                   alt=""
                   style="width:50%;">
              <img :src="value.src_right"
                   alt=""
                   style="width:50%;">
            </p>

          </van-grid-item>
        </van-grid>
      </div>
      <!-- 下载区域及版权信息 -->
      <div class="LoadAndBrand">
        <p>
          <van-button size="small">下载App</van-button>
          <van-button size="small">电脑版</van-button>
        </p>
        <span>网易公司版权所有 © 1997-2020</span>
        <span>食品经营许可证：JY13301080111719撒</span>
      </div>
      <!-- 区域置顶 -->
      <span class="toUp"
            @click="toUp"
            v-if="toUpShow">↑</span>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      toUpShow: false,
      value: "",
      cateArr: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洗",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ],
      swiper: [
        "../.././static/img/swiper_01.jpg",
        "../.././static/img/swiper_01.jpg",
        "../.././static/img/swiper_01.jpg",
        "../.././static/img/swiper_01.jpg"
      ],
      adArr: [
        {
          MainTit: "超值特卖",
          subtitle: "低至2折",
          src: "../.././static/img/ad01.png"
        },
        {
          MainTit: "防疫专区",
          subtitle: "防疫日用",
          src: "../.././static/img/ad02.png"
        },
        {
          MainTit: "春日物语",
          subtitle: "新品上新",
          src: "../.././static/img/ad03.png"
        }
      ],
      cateTit: [
        { tit: "新品首发", src: "../.././static/img/goodimg_01.png" },
        { tit: "居家生活", src: "../.././static/img/goodimg_02.png" },
        { tit: "服饰鞋包", src: "../.././static/img/goodimg_03.png" },
        { tit: "美食酒水", src: "../.././static/img/goodimg_04.png" },
        { tit: "个户清理", src: "../.././static/img/goodimg_05.png" },
        { tit: "母婴亲子", src: "../.././static/img/goodimg_06.png" },
        { tit: "运动旅行", src: "../.././static/img/goodimg_07.png" },
        { tit: "数码家电", src: "../.././static/img/goodimg_08.png" },
        { tit: "全球特色", src: "../.././static/img/goodimg_09.png" },
        { tit: "好货抄底", src: "../.././static/img/goodimg_10.gif" }
      ],
      hotSaleArr: [
        { tit: "居家生活榜", src: "../.././static/img/hot01.png" },
        { tit: "美食酒水榜", src: "../.././static/img/hot02.png" },
        { tit: "个护清洁榜", src: "../.././static/img/hot03.png" },
        { tit: "数码家电榜", src: "../.././static/img/hot04.png" },
        { tit: "全球特色榜", src: "../.././static/img/hot05.png" },
        { tit: "服饰鞋包榜", src: "../.././static/img/hot06.png" },
        { tit: "运动旅行榜", src: "../.././static/img/hot07.png" },
        { tit: "母婴亲子榜", src: "../.././static/img/hot08.png" }
      ],
      LimitArr: [
        {
          img: "../.././static/img/image04.png",
          newPrice: "￥175",
          oldPrice: "￥199"
        },
        {
          img: "../.././static/img/image05.png",
          newPrice: "￥298",
          oldPrice: "￥328"
        },
        {
          img: "../.././static/img/image06.png",
          newPrice: "￥269",
          oldPrice: "￥299"
        },
        {
          img: "../.././static/img/image07.png",
          newPrice: "￥39",
          oldPrice: "￥49"
        },
        {
          img: "../.././static/img/image08.png",
          newPrice: "￥284",
          oldPrice: "￥369"
        },
        {
          img: "../.././static/img/image09.png",
          newPrice: "￥149",
          oldPrice: "￥199"
        }
      ],
      time: 24 * 60 * 60 * 1000,
      NewFirstArr: [
        {
          src: "static/img/new1.png",
          tit: "复工装备随身防护 日本空气净化除菌卡",
          price: "￥79"
        },
        {
          src: "static/img/new02.png",
          tit: "18小时持续抑菌，口罩抗菌抑菌喷雾",
          price: "￥45"
        },
        {
          src: "static/img/new03.png",
          tit: "母婴可用，给口罩套件防护马甲",
          price: "￥89.9"
        },
        {
          src: "static/img/new04.png",
          tit: "可调式鼻腔清洗器",
          price: "￥89.9"
        },
        {
          src: "static/img/new05.png",
          tit: "安心出行高效防护- 防飞沫多功能护目镜",
          price: "￥89.9"
        },
        {
          src: "static/img/new06.png",
          tit: "防止唾沫飞溅入眼，保护眼睛安全。",
          price: "￥89.9"
        }
      ],
      OtherArr: [
        {
          tit: "断货补单王",
          subtit: "补仓疯抢中",
          src_left: "static/img/other01.png",
          src_right: "static/img/other02.png"
        },
        {
          tit: "回购榜单",
          subtit: "口碑超值价",
          src_left: "static/img/other01.png",
          src_right: "static/img/other02.png"
        },
        {
          tit: "员工精选",
          subtit: "山核桃9折",
          src_left: "static/img/other01.png",
          src_right: "static/img/other02.png"
        },
        {
          tit: "应季尖货",
          subtit: "2月拔草清单",
          src_left: "static/img/other01.png",
          src_right: "static/img/other02.png"
        }
      ]
    }
  },
  created() {
    
  },
  watch:{
    
  },
  methods: {
    toUp() {
      let s = this.$refs.cont.getBoundingClientRect().top
      for (let i = window.scrollY; i > 0; i--) {
        setTimeout(function() {
          window.scrollTo(0, i)
        }, 0)
      }
      
    },
    
  }
}
</script>
<style scoped>
.header {
  margin-top: 0.2rem;
  padding-top: 0.2rem;
}
.van-col {
  line-height: 0.8rem;
}
p {
  font-size: 0.5rem;
  margin: 0;
  padding: 0 0.05rem;
  font-weight: lighter;
}
.van-search {
  width: 5.8rem;
  padding: 0;
  margin: 0 auto;
  background: #666;
  border-radius: 0.1rem;
  border: none;
}

.header span {
  padding: 0.2rem 0.3rem;
  border: 0.01rem solid red;
  border-radius: 0.1rem;
  color: red;
}
.content {
  max-width: 12rem;
  margin: 0 auto 50px;
  overflow-y: inherit;
  background: #ddd;
}
.ad1 {
  width: 100%;
  height: 3rem;
  background: url("../.././static/img/ad1.gif") no-repeat top;
  background-size: 100%;
}
.ad2 {
  width: 100%;
  height: auto;
  background: rgb(36, 170, 65);
}
.ad2::before {
  content: "";
  display: block;
  height: 2.5rem;
  width: 100%;
  background: #000;
  background: url("../.././static/img/ad2.gif") no-repeat 50%;
  background-size: 94% 80%;
}
.ad2 .van-grid {
  width: 94%;
  margin: 0 auto;
}
.ad2 h4 {
  padding: 0;
  margin: 0;
}
.toNew {
  width: 100%;
  height: 7rem;
  background: #fff;
  margin: 0.2rem 0;
}
.van-divider {
  line-height: 1rem;
  margin: 0;
  font-size: 0.4rem;
  color: #000;
  letter-spacing: 0.1rem;
  padding: 0 2.8rem;
}
.van-divider::before,
.van-divider::after {
  border-width: 0.07rem;
  border-color: #666;
}
.toNew .toNewLeft {
  float: left;
  width: 46%;
  height: 80%;
  background: rgb(245, 230, 199);
  margin-left: 0.4rem;
}
.toNew .toNewLeft img {
  width: 60%;
  margin: 0.5rem auto 0;
}
.toNew .toNewRight {
  width: 46%;
  height: 80%;
  float: right;
  margin-right: 0.4rem;
}
.toNew .toNewRight .toNewRight_01,
.toNewRight_02 {
  width: 100%;
  height: 50%;
}
.toNew .toNewRight .toNewRight_01 {
  background: url("../.././static/img/image01.png") no-repeat right;
  background-size: 50%;
}
.toNew p,
h4 {
  margin: 0;
  padding: 0.3rem 0 0.2rem 0.2rem;
  text-align: left;
  font-size: 0.4rem;
}
.toNew p {
  color: #666;
  font-size: 0.35rem;
}
.toNewRight_02 {
  background: rgb(238, 236, 143);
}
.toNewRight_02 p {
  display: inline;
  background: #ddd;
  margin-left: -2.6rem;
  padding: 0;
}
.hotsale {
  width: 100%;
  background: #fff;
  text-align: left;
  overflow: hidden;
  font-size: 0;
  margin: 0 auto;
}
.hotsale p {
  line-height: 1.2rem;
  margin-left: 0.4rem;
  font-size: 0.4rem;
  color: #000;
}
.hotsale .hot_sale,
.hotsale .good_mark {
  width: 46%;
  height: 2.6rem;
  display: inline-block;
}
.hotsale .hot_sale {
  background: rgb(243, 226, 226);
  margin-left: 0.4rem;
}
.hotsale .good_mark {
  background: rgb(216, 245, 238);
  margin-right: 0.4rem;
}
.hotsale .hot_sale span,
.hotsale .good_mark span {
  display: inline-block;
  line-height: 1rem;
  font-size: 0.45rem;
  margin-left: 0.4rem;
  position: relative;
}
.hotsale .hot_sale span::after,
.hotsale .good_mark span::after {
  display: block;
  content: "";
  width: 0.8rem;
  border: 0.02rem solid #000;
  position: absolute;
  left: 0;
  bottom: 0;
}
.hotsale .hot_sale img,
.hotsale .good_mark img {
  width: 58%;
  max-height: 100%;
  vertical-align: middle;
}
.hotsale .van-grid {
  margin: 0 0.3rem;
}

.New_first span {
  color: red;
  font-size: 0.4rem;
  font-style: normal;
}
.New_first span i {
  color: #666;
  font-size: 0.3rem;
  text-decoration: line-through;
}
.van-count-down {
  display: inline-block;
  margin-left: 0.4rem;
  font-size: 0.35rem;
}
.van-count-down .item {
  background: #000;
  color: #fff;
  padding: 0 0.1rem;
}
.other h4 {
  font-size: 0.45rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
}
.other p {
  margin: 0;
  padding: 0;
  line-height: 0.5rem;
  font-size: 0.34rem;
}
.other img {
  width: 50%;
  float: left;
}
.LoadAndBrand {
  background: #444;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}
.LoadAndBrand button {
  padding: 0 0.5rem;
  background: #444;
  margin-bottom: 0.5rem;
}
.LoadAndBrand span {
  display: block;
  font-size: 0.3rem;
  color: #999;
}
.toUp {
  display: block;
  width: 1rem;
  line-height: 1rem;
  background: rgba(206, 206, 243, 0.5);
  position: fixed;
  bottom: 2rem;
  right: 0.4rem;
  border-radius: 50%;
}
</style>