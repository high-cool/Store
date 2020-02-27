<template>
  <div>
    <p>
      <van-nav-bar left-text="购物车"
                   right-text="领券"
                   @click-right="onClickRight" />
    </p>
    <div class="content">
      <div v-if="cartArr.length!==0">
        <van-swipe-cell v-for="(value,index) in cartArr"
                        :before-close="beforeClose"
                        :stop-propagation="true"
                        :key="index"
                        ref="index">
          <van-card num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    class="goods-card"
                    thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
          <template slot="right">
            <van-button square
                        class="delete-button"
                        type="danger"
                        text="删除" />
          </template>
        </van-swipe-cell>
      </div>
      <div v-else
           class="nocart">
        <img src="static/img/noCart.png"
             width="160px"
             alt=""><br>
        <van-button type="danger"
                    @click="login"
                    style="width: 90%;
  margin-top:10px; ">登陆</van-button>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from ".././components/Footer"
export default {
  components: { Footer },
  data() {
    return {
      cartArr: [
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "",
          desc: "",
          num: "",
          price: ""
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "",
          desc: "",
          num: "",
          price: ""
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "",
          desc: "",
          num: "",
          price: ""
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "",
          desc: "",
          num: "",
          price: ""
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "",
          desc: "",
          num: "",
          price: ""
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "",
          desc: "",
          num: "",
          price: ""
        },
        {
          url: "https://img.yzcdn.cn/vant/cat.jpeg",
          title: "",
          desc: "",
          num: "",
          price: ""
        }
      ]
    }
  },
  methods: {
    onClickRight() {
      this.$router.replace("/my")
    },
    beforeClose({ position, instance }) {
      let idx = instance.$vnode.data.key
      switch (position) {
        case "left":
        case "cell":
          instance.close()
          break
        case "outside":
          instance.close()
          break
        case "right":
          if (confirm("确定删除吗？")) {
            instance.close()
            this.cartArr.splice(idx, 1)
          } else {
            instance.close()
          }
          break
      }
    },
    login() {
      this.$router.push("/my")
    }
  }
}
</script>
<style scoped>
p {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.van-nav-bar__text {
  color: #000;
  font-size: 0.5rem;
}
.van-nav-bar__right .van-nav-bar__text {
  color: red;
  font-size: 0.38rem;
}
.content {
  max-width: 12rem;
  height: calc(100vh - 120px);
  overflow-y: scroll;
  padding-bottom: 10px;
  padding-top: 10px;
  background: #eee;
  margin: 50px auto 0;
}
.goods-card {
  text-align: left;
  margin: 10px 0.2rem 0;
  background-color: white;
  border-radius: 10px;
}

.delete-button {
  height: 100%;
}
.nocart {
  margin-top: 2.5rem;
}
</style>