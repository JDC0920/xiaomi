<template>
  <div>
    <!--手机验证登录-->
    <form v-if="!show">
      <div class="loginPhone">
        <el-row style="border-bottom: 1px solid #eee">
          <el-col :span="4" class="login-span">
            <span>+86</span>
          </el-col>
          <el-col :span="20" class="login-input">
            <input type="text" placeholder="手机号码">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16"  class="login-input" style="border-right: 1px solid #eee">
            <input type="text" placeholder="短信验证">
          </el-col>
          <el-col :span="8" class="login-span1">
            <a href="javascript:" style="color: #003ab5;">获取验证码</a>
          </el-col>
        </el-row>
      </div>
      <!--按钮-->
      <div style="margin-top: 2rem;">
        <div class="login-button">
          <router-link to="">
            <input type="submit" value="登录/注册">
          </router-link>
        </div>
        <div class="login-button1">
          <div @click="show=!show">
            <input type="submit" value="用户密码登录">
          </div>
        </div>
      </div>
    </form>
    <!--用户名密码登录-->
    <div v-if="show">
      <!--输入框-->
      <form action="" class="">
        <div class="login-form">
          <el-row style="border-bottom: 1px solid #eee">
            <el-col :span="24" class="login-input">
              <input type="text" placeholder="手机号码/小米ID/邮箱">
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="login-input">
              <input type="password" placeholder="密码">
            </el-col>
          </el-row>
        </div>
        <div style="margin-top: 2.1rem;">
          <div class="login-button">
            <router-link to="">
              <input type="submit" value="登录">
            </router-link>
          </div>
          <div class="login-button1">
            <div  @click="show=!show">
              <input type="submit" value="手机号码登录">
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--其他方式登录-->
    <div style="width: 90%;text-align: center;margin:1.8rem auto;position: relative;border-top: 1px dashed #bdbdbd">
      <span style="position: absolute;top: -11px;left: 37%;color: #bdbdbd;font-size: .9rem">其他方式登录</span>
    </div>
    <div style="width: 90%;margin: 0 auto">
      <el-row class="icon">
        <el-col :span="8" class="login-icon qq">
          <a href="javascript:" style="display: inline-block;"><i class="icon1"></i></a>
        </el-col>
        <el-col :span="8" class="login-icon Wb">
          <a href="javascript:" style="display: inline-block;"><i class="icon2"></i></a>
        </el-col>
        <el-col :span="8" class="login-icon Wx">
          <a href="javascript:" style="display: inline-block;"><i class="icon3"></i></a>
        </el-col>
      </el-row>
    </div>
    <div style="width: 90%;margin: 3rem auto;text-align: center" v-if="show">
      <a href="javascript:" style="font-size: .8rem;padding-right:.8rem;border-right: 1px solid #bdbdbd">立即注册</a>
      <a href="javascript:" style="font-size: .8rem;margin-left: .6rem">忘记密码？ </a>
    </div>
    <!--底部-->
    <div style="width: 90%;margin: 3rem auto;">
      <ul class="login-footer">
        <li><a href="javascript:">简体</a></li>
        <li><a href="javascript:">繁体</a></li>
        <li><a href="javascript:">English</a></li>
        <li><a href="javascript:">常见问题</a></li>
      </ul>
    </div>
  </div>
</template>
<style>
  /*手机验证*/
  .loginPhone{
    width: 90%;
    border:1px solid #eee;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 16px;
    padding: .1rem;
  }
  .login-span{
    text-align: center;
    padding: .7rem .5rem .5rem ;
    font-size: .7rem;
    border-right: 1px solid #eee;
  }
  .login-input{
    padding: .6rem;
  }
  .login-input input{
    width: 100%;
    border: none;
    outline:none;
    font-size: 1rem;
    line-height: normal;
  }
  .login-span1{
    text-align: center;
    padding: .7rem .5rem;
    font-size: .8rem;
    cursor: pointer;
  }
  /*按钮*/
  .login-button {
    margin-top: 1rem;
    width: 100%;
    /*padding: 2rem 0;*/
    text-align: center;
  }
  .login-button input {
    width: 90%;
    padding: .6rem;
    font-size: 1rem;
    background-color: #33b4ff;
    border: none;
    border-radius: 20px;
    color: #ffffff;
    outline: none;
  }
  .login-button1 {
    margin-top: 1rem;
    width: 100%;
    /*padding: 2rem 0;*/
    text-align: center;
  }
  .login-button1 input {
    width: 90%;
    padding: .6rem;
    font-size: 1rem;
    background-color: #fff;
    border: none;
    border-radius: 20px;
    color: black;
    outline: none;
  }
  /*密码*/
  .login-form{
    margin: 0 auto;
    padding: 1px 0;
    width: 90%;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 16px;
  }
  .icon{
    padding: 0 4rem;
  }
  .login-icon{
    width:45px;
    height: 45px;
    margin: 0 10px;
    padding-top: 3px;
    padding-left: 2px;
    border-radius: 50%;
  }
  .qq{
    background-color: #0288d1;
  }
  .Wb{
    background-color: #d32f2f;
  }
  .Wx{
    background-color: #0ae;
  }
  .icon1{
    display: block;
    background-image: url('../../../static/icon.png');
    background-size: auto 29px;
    width: 39px;
    height: 29px;
    margin: 8px auto 0;
  }
  .icon2{
    display: block;
    background-image: url('../../../static/icon.png');
    background-position: -39px 0;
    background-size: auto 29px;
    width: 30px;
    height: 29px;
    margin: 7px auto 0;
  }
  .icon3{
    display: block;
    background-image: url('../../../static/icon.png');
    background-position: -78px 0;
    background-size: auto 29px;
    width: 30px;
    height: 25px;
    margin: 7px auto 0;
  }
  /*底部*/
  .login-footer{
    display: flex;
    justify-content: center;
  }
  .login-footer li a{
    display: inline-block;
    padding: 0 .5rem;
    font-size: .8rem;
    border-right: 1px solid #bdbdbd;
  }
</style>
<script>
  export default {
      name:'phone',
    data(){
          return {
              show:true
          }
    }
  }
</script>
