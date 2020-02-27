<template>
  <div>
    <p>
      <NavBar :Tit="title"></NavBar>
    </p>
    <div class="content">
      <div class="logo">
        <img src="static/img/logo.png"
             alt="">
      </div>
      <div class="reg">
        <van-button type="danger" to="login" 
                    :hairline="true">
          <van-icon name="graphic"
                    size="20px"
                    />手机号快捷登陆
        </van-button>
        <br>
        <van-button color="red"
                    to="login"
                    plain>
          <van-icon name="envelop-o"
                    size="20px" />邮箱账号登陆
        </van-button>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from ".././components/Footer"
import NavBar from "./NavBar"
export default {
  data() {
    return {
      title: "开淘易网"
    }
  },
  components: {
    NavBar,
    Footer
  },
  created() {}
}
</script>
<style scoped>
.content {
  max-width: 12rem;
  height: calc(100vh - 100px);
  margin-top: 50px;
  background: #eee;
}
.content .logo {
  width: 100%;
  height: 6rem;
  position: relative;
}
.content .logo img {
  width: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -65px;
  margin-top: -20px;
}
button {
  width: 92%;
  margin-top: 15px;
}
.van-button--default {
  background: rgba(204, 187, 187, 0);
}
.van-icon {
  vertical-align: middle;
  margin-right: 10px;
}
</style>