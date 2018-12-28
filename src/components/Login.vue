<template>
    <div id="app">
      <form class="orders-login" onsubmit="return false">
        <h3>hehe订餐系统</h3>
        <input type="text" name="" v-model.trim="userName" placeholder="请输入账号">
        <input type="password" name="" v-model.trim="passWord" placeholder="请输入密码">
        <button @click="login_fn">登录</button>
      </form>
    </div>
</template>
<script>

export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  // computed: {
  //   userInfo() {
  //     return this.$store.state.userInfo
  //   }
  // },
  methods: {
    login_fn(){
      if (this.userName && this.passWord) {
        this.$store.commit('isLogin',this.userName);
        //提交表单 怎么调接口
        //跳转页面
        this.$router.go(-1);
      }
    }
  }
}

</script>

<style scoped>
  .orders-login{
    width: 30%;
    margin:  50px auto;
    text-align: center;
  }
  .orders-login input{
    width: 180px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-indent: 5px;
  }
  .orders-login button{
    width: 80px;
    height: 36px;
  }
</style>
