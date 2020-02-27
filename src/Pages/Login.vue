<template>
  <div>
    <p>
      <NavBar :Tit="title"></NavBar>
    </p>
    <div class="content">
      <div class="logo">
        <img src="static/img/logo.png"
             width="140px"
             alt="">
      </div>
      <form action="">
        <van-cell-group>
          <van-field v-model="FormData.username"
                     right-icon="warning-o"
                     clearable
                     placeholder="请输入手机号" />
          <van-field v-model="FormData.message"
                     center
                     clearable
                     placeholder="请输入短信验证码">
            <van-button slot="button"
                        size="small"
                        type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <p style="overflow:hidden"><span style="float:left;marginLeft:16px;">遇到问题?</span><b style="float:right;marginRight:16px;cursor:point;">使用密码验证登陆</b></p>
        <van-button type="danger" style="width:92%">登陆</van-button>
        <van-checkbox v-model="FormData.checked" :bind-group="false" style="margin:10px 16px 10px ;">我同意<a href="">《服务条款》</a>和 <a href="">《网易隐私政策》</a></van-checkbox>
        <p style="fontSize:15px;margin:30px auto;width:200px;">其他登录方式<van-icon name="arrow" style="verticalAlign:middle;"></van-icon></p>
      </form>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar"
export default {
  data() {
    return {
      title: "登陆",
      FormData: { username: "", password: "", message: "",checked:true }
    }
  },
  components: {
    NavBar
  }
}
</script>
<style scoped>
.content {
  max-width: 12rem;
  height: calc(100vh - 100px);
  margin-top: 100px;
}
.content .logo {
  margin: 40px auto;
}
</style>