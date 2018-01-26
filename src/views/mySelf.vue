<template>
  <div style="position: fixed;height: 90vh;">
    <!--头部登录/注册-->
    <header class="myHeader">
      <div class="header-img">
        <img src="../../static/login.png" style="width: 3.5rem;display: inline-block;border: 1px solid #f37d0f;"/>
        <router-link to="/login" class="myLogin" style="">&nbsp;&nbsp;登录/注册</router-link>
      </div>
    </header>
    <!--我的订单-->
    <div style="display: flex;justify-content: space-between;padding: .5rem 1rem;height: 2.7rem;border-bottom: 1px solid lightgrey">
      <div style="line-height: 1.8rem;color: rgba(0,0,0,.87)">我的订单</div>
      <a href="JavaScript:" style="font-size: .8rem;line-height: 1.7rem;color: rgba(0,0,0,.87);">
        全部订单&gt;
      </a>
    </div>
    <!--货物信息-->
    <div style="height: 5rem">
      <el-row style="padding: .9rem 2rem;text-align: center;">
        <el-col :span="8">
          <a href="javascript:">
            <img src="../../static/daifukuan.png" style="width: 20%"/>
            <p class="payment">待付款</p>
          </a>
        </el-col>
        <el-col :span="8">
          <a href="javascript:">
            <img src="../../static/shouhuo.png" style="width: 20%"/>
            <p class="payment">待收货</p>
          </a>
        </el-col>
        <el-col :span="8">
          <a href="javascript:">
            <img src="../../static/weixiu.png" style="width: 20%"/>
            <p class="payment">退维修</p>
          </a>
        </el-col>
      </el-row>
    </div>
    <div style="height: .8rem;background-color: #f5f5f5;"></div>
    <!--会员福利，我的优惠-->
    <div class="all">
      <ul>
        <li>
          <a href="javaScript:" class="vip allAll">
            会员福利
          </a>
        </li>
        <li>
          <a href="javaScript:" class="youhui all-All">
            我的优惠
          </a>
        </li>
      </ul>
    </div>
    <div style="height: .8rem;background-color: #f5f5f5;"></div>
    <!--服务中心-->
    <div class="all">
      <ul>
        <li>
          <a href="javaScript:" class="fuwu allAll">
            服务中心
          </a>
        </li>
        <li>
          <a href="javaScript:" class="xiaomi all-All">
            小米之家
          </a>
        </li>
      </ul>
    </div>
    <div style="height: .8rem;background-color: #f5f5f5;"></div>
    <!--f码通道-->
    <div class="all">
      <ul>
        <li>
          <a href="javaScript:" class="ffa all-All">
            f码通道
          </a>
        </li>
      </ul>
    </div>
    <div style="height: .8rem;background-color: #f5f5f5;"></div>
    <!--设置-->
    <div class="all">
      <ul>
        <li>
          <a href="javaScript:" class="shezhi all-All">
            设置
          </a>
        </li>
      </ul>
    </div>
    <div style="height: 6rem;background-color: #f5f5f5;"></div>
    <!--<nav-footer></nav-footer>-->
  </div>

 </template>
<style scoped>
/*头部*/
  .myHeader{
    width: 100%;
    padding: .1rem 0 .5rem .1rem;
    background: url("../../static/login-back.png") #f37d0f;
    background-size: auto 75%;
  }
  .myHeader .header-img{
    height: 4.5rem;
    background-size:  auto 80%;
    padding: .5rem;
    display: flex;
  }
  /*货物信息*/
  .payment{
    color: rgba(0,0,0,.87);
    font-size: .8rem;
  }
  /*会员福利*/
  .all{
    padding: .2rem 1rem;
  }
  .all ul li{
    width: 100%;
    position: relative;
    padding-left: 3rem;
  }
  .all ul li .allAll{
    display: inline-block;
    width: 100%;
    height: 3rem;
    padding: .8rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .all ul li .vip:before{
    /*display: inline-block;*/
    content: '';
    position: absolute;
    left: .5rem;
    top:20%;
    width: 2rem;
    height: 2rem;
    background: url("../../static/huiyuan.png") no-repeat;
    background-size: auto 80%;
  }
  .all ul li .all-All{
  display: inline-block;
  width: 100%;
  height: 3rem;
  padding: .8rem 0;
}
  .all ul li .youhui:before{
  /*display: inline-block;*/
  content: '';
  position: absolute;
  left: .5rem;
  top:20%;
  width: 2rem;
  height: 2rem;
  background: url("../../static/youhui.png") no-repeat;
  background-size: auto 80%;

}
  .all ul li a:after{
    content: '';
    position: absolute;
    right: .5rem;
    top:50%;
    width: .5rem;
    height: .5rem;
    border-left:1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
  }
  /*服务之家*/
  .all ul li .fuwu:before{
    /*display: inline-block;*/
    content: '';
    position: absolute;
    left: .5rem;
    top:20%;
    width: 2rem;
    height: 2rem;
    background: url("../../static/fuwu.png") no-repeat;
    background-size: auto 80%;
  }
  .all ul li .xiaomi:before{
  content: '';
  position: absolute;
  left: .5rem;
  top:20%;
  width: 2rem;
  height: 2rem;
  background: url("../../static/xiaomi.png") no-repeat;
  background-size: auto 80%;

}
  /*f码*/
  .all ul li .ffa:before{
  content: '';
  position: absolute;
  left: .5rem;
  top:20%;
  width: 2rem;
  height: 2rem;
  background: url("../../static/Fma.png") no-repeat;
  background-size: auto 80%;
}
  .all ul li .shezhi:before{
  content: '';
  position: absolute;
  left: .5rem;
  top:20%;
  width: 2rem;
  height: 2rem;
  background: url("../../static/shezhi.png") no-repeat;
  background-size: auto 80%;
}
  .myLogin{
    display: inline-block;
    padding-top: 1.2rem;
    color: #fff;
    font-size: .9rem;
  }
</style>
<script>
//  import NavFooter from '../components/index/NavFooter.vue'
  import '../assets/index.css'
  export default{
    data(){
      return {}
    },
    components:{
//      NavHeader,
//      NavFooter
    }
  }
</script>
