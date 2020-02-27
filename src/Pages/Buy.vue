<template>
  <div>
    <NavBar></NavBar>
    <div class="content">
      <div class="shadow"
           style="position:relative">
        <p style="position:absolute;top:0rem;left:0.5rem;fontSize:0.6rem;color:#fff;">值得买<span style="fontSize:0.4rem;marginLeft:0.2rem;">严选实物 用心生活</span></p>
      </div>
      <div class="main">
        <van-swipe class="my-swipe"
                   :width="88"
                   :loop="false"
                   indicator-color="red">
          <van-swipe-item v-for="(item,index) in swiperArr"
                          :key="index">
            <van-grid :column-num="1">
              <van-grid-item v-for="(value,ind) in item"
                             :key="ind">
                <img :src="value.src"
                     style="width:1.4rem;"
                     alt="">
                <h4>{{value.tit}}</h4>
                <span>{{value.subtit}}</span>
              </van-grid-item>
            </van-grid>
          </van-swipe-item>

        </van-swipe>
        <div class="more">
          <div v-for="(item,index) in moreArr"
               :key="index">
            <img :src="item.src"
                 style="width:100%">
            <h4 v-if="item.name"
                style="paddingRight:0.2rem;">{{item.tit | controlShow(20)}}</h4>
            <p v-if="item.name"
               style="textAlign:left;paddingLeft:0.2rem;position:relative;">
              <img :src="item.smallimg"
                   style="width:0.6rem;borderRadius:50%;verticalAlign:middle"> <span>{{item.name}}</span>
              <van-icon name="eye-o"
                        style="position:absolute;right:0.2rem;"> {{ (item.seen/1000)}}K</van-icon>
              <h4 v-if="item.intro"
                  style="position:relative;borderTop:0.01rem solid #999;padding:0.2rem 0;fontSize:0.28rem;">{{item.intro | controlShow(10)}} <span style="color:red;position:absolute;right:0.2rem;fontWeight:normal;">去购买<van-icon name="arrow"
                            style="verticalAlign:middle;"></van-icon> </span></h4>
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar"

export default {
  data() {
    return {
      swiperArr: [
        [
          {
            src: "static/img/buy_swiper1-1.gif",
            tit: "9.9超值",
            subtit: "定价直降"
          },
          {
            src: "static/img/buy_swiper1-5.png",
            tit: "明星商品",
            subtit: "百万粉丝之选"
          }
        ],
        [
          {
            src: "static/img/buy_swiper1-2.png",
            tit: "员工精选",
            subtit: "每天1款内部价"
          },
          {
            src: "static/img/buy_swiper1-6.png",
            tit: "晒单",
            subtit: "入选就有红包"
          }
        ],
        [
          {
            src: "static/img/buy_swiper1-3.png",
            tit: "好物大赏",
            subtit: "精选主题榜单"
          },
          {
            src: "static/img/buy_swiper1-7.gif",
            tit: "新品快报",
            subtit: "防疫物资上新"
          }
        ],
        [
          {
            src: "static/img/buy_swiper1-4.png",
            tit: "甄选家",
            subtit: "爆品免费试用"
          },
          {
            src: "static/img/buy_swiper1-8.png",
            tit: "好吃研究所",
            subtit: "时令美食抢先尝"
          }
        ],
        [
          {
            src: "static/img/buy_swiper2-1.png",
            tit: "特色系列",
            subtit: "发现格调好货"
          },
          {
            src: "static/img/buy_swiper2-5.png",
            tit: "选购指南",
            subtit: "破解选择困难"
          }
        ],
        [
          {
            src: "static/img/buy_swiper1-2.png",
            tit: "防疫手册",
            subtit: "超硬核防疫指南"
          },
          {
            src: "static/img/buy_swiper2-6.png",
            tit: "HOME",
            subtit: "实景家居专栏"
          }
        ],
        [
          {
            src: "static/img/buy_swiper1-2.png",
            tit: "每日穿搭",
            subtit: "时尚买手力荐"
          },
          {
            src: "static/img/buy_swiper2-7.png",
            tit: "工厂考察团",
            subtit: "探访严选工厂"
          }
        ],
        [
          {
            src: "static/img/buy_swiper1-2.png",
            tit: "全球好物",
            subtit: "0关税即到达"
          },
          {
            src: "static/img/buy_swiper2-8.png",
            tit: "乡间好物",
            subtit: "公益扶贫专区"
          }
        ]
      ],
      moreArr: [
        {
          src: "static/img/other03.png"
        },
        {
          src: "static/img/other04.jpg",
          tit: "早起、饮茶、好好吃饭！向你推荐5个春天的新提案~",
          smallimg: "static/img/smallimg.jpg",
          name: "选妹",
          seen: 140000
        },
        {
          src: "static/img/other05.jpg",
          tit: "冬春交替，你没想到的换季tips都在这里",
          smallimg: "static/img/smallimg.jpg",
          name: "选妹",
          seen: 75030
        },
        {
          src: "static/img/other06.jpg",
          tit: "宅家必囤刚需品大赏",
          smallimg: "static/img/smallimg.jpg",
          name: "选妹",
          seen: 162000
        },
        {
          src: "static/img/other07.jpg",
          tit: "口罩之外，做好防护你还需要医用级手套",
          smallimg: "static/img/smallimg.jpg",
          name: "网易有道：莉莉",
          seen: 26000,
          intro: "一次性医用PVC检查手套100只/盒"
        },
        {
          src: "static/img/other08.jpg",
          tit: "冬季衣物护理好帮手，让大衣羽绒服再多穿10年！",
          smallimg: "static/img/smallimg.jpg",
          name: "选购指南",
          seen: 72000
        },
        {
          src: "static/img/other09.jpg",
          tit: "你适合喝哪种养生茶？",
          smallimg: "static/img/smallimg.jpg",
          name: "选妹",
          seen: 13000
        },
        {
          src: "static/img/other10.jpg",
          tit: "亲子时光，呵护陪伴",
          smallimg: "static/img/smallimg.jpg",
          name: "选妹",
          seen: 30000
        },
        {
          src: "static/img/other11.jpg",
          tit: "网易严选陪你一起，等春来",
          smallimg: "static/img/smallimg.jpg",
          name: "选妹",
          seen: 26000
        },
        {
          src: "static/img/other11.jpg",
          tit: "网易严选陪你一起，等春来",
          smallimg: "static/img/smallimg.jpg",
          name: "选妹",
          seen: 26000
        }
      ]
    }
  },
  components: {
    NavBar
  }
}
</script>
<style scoped>
.content {
  width: 100%;
  height: calc(100vh - 100px);
  margin-top: 50px;
  overflow-y: scroll;
  background: #eee;
}
.shadow {
  width: 100%;
  height: 6rem;
  margin: 0 auto;
  background: -webkit-linear-gradient(rgb(231, 217, 136), #eee);
}
.main {
  width: 96%;
  margin: -4.3rem auto 0;
}
.my-swipe {
  border-radius: 0.5rem;
  margin-bottom: 0.4rem;
}
h4 {
  padding: 0 0 0 0.2rem;
  margin: 0.2rem auto;
  text-align: left;
}
.van-grid-item span {
  font-size: 0.28rem;
  color: #888;
}
.more {
  column-count: 2;
  column-gap: 0.1rem;
  padding-bottom: 0.5rem;
}
.more div {
  width: 98%;
  break-inside: avoid;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
  background: #fff;
}
</style>