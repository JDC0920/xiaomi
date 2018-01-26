<template>
  <div style="position: fixed;height: 90vh;overflow: auto">
    <!--<nav-header></nav-header>-->
    <section style="margin: 50px 0;">
      <!--login-->
      <div>
        <a href="javascript:" class="login">
          <span style="line-height: 3.4rem;">登录后有更多优惠</span>
          <span style="font-size: .5rem;line-height: 3.4rem">去登录&gt;</span>
        </a>
      </div>
      <!--购物车-->
      <div class="cart">
        <a href=""><i class="fa fa-shopping-cart fa-2x"></i><span>购物车还是空的</span><em>去逛逛</em></a>
      </div>
      <!--猜你喜欢-->
      <div>
        <img src="../../static/xihuan.jpg"style="width: 100%"/>
        <el-row>
          <el-col :span="12">
            <a href="javascript:">
              <img src="../../static/body-1.png"style="width: 99%"/>
              <div style="padding: .2rem 0 .5rem .5rem">
                <p style="font-size: .9rem">红米Note 5A 32GB</p>
                <span style="color: #ff6700">￥799</span>
              </div>
            </a>
          </el-col>
          <el-col :span="12">
            <a href="javascript:">
              <img src="../../static/body-2.png"style="width: 99%"/>
              <div style="padding: .2rem 0 .5rem .5rem">
                <p style="font-size: .9rem">红米Note 5A 16GB</p>
                <span style="color: #ff6700">￥799</span>
              </div>
            </a>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <a href="javascript:">
              <img src="../../static/body-3.png"style="width: 99%"/>
              <div style="padding: .2rem 0 .5rem .5rem">
                <p style="font-size: .9rem">红米Note 5A 32GB</p>
                <span style="color: #ff6700">￥799</span>
              </div>
            </a>
          </el-col>
          <el-col :span="12">
            <a href="javascript:">
              <img src="../../static/body-4.png"style="width: 99%"/>
              <div style="padding: .2rem 0 .5rem .5rem">
                <p style="font-size: .9rem">红米Note 5A 16GB</p>
                <span style="color: #ff6700">￥799</span>
              </div>
            </a>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <a href="javascript:">
              <img src="../../static/body-1.png"style="width: 99%"/>
              <div style="padding: .2rem 0 .5rem .5rem">
                <p style="font-size: .9rem">红米Note 5A 32GB</p>
                <span style="color: #ff6700">￥799</span>
              </div>
            </a>
          </el-col>
          <el-col :span="12">
            <a href="javascript:">
              <img src="../../static/body-2.png"style="width: 99%"/>
              <div style="padding: .2rem 0 .5rem .5rem">
                <p style="font-size: .9rem">红米Note 5A 16GB</p>
                <span style="color: #ff6700">￥799</span>
              </div>
            </a>
          </el-col>
        </el-row>
      </div>
    </section>
    <!--<nav-footer></nav-footer>-->
  </div>
</template>
<style>
  .login{
    /*display: inline-block;*/
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 7%;
    height: 3.4rem;
    position: relative;
  }
  /*购物车*/
  .cart{
    width: 100%;
    height: 4rem;
    background-color: #ebebeb;
    text-align: center;
    line-height: 4rem;
  }
  .cart a span{
    display: inline-block;
    line-height: 2rem;
    color: rgba(0,0,0,.27);
    padding: 0 .3rem .5rem .7rem;
  }
  .cart a em {
    display: inline-block;
    border: 1px solid rgba(0,0,0,.15);
    height: 2rem;
    line-height: 2rem;
    padding: 0 .5rem;
    color: rgba(0,0,0,.87);
    font-style: normal;
  }
</style>
<script>
//  import NavHeader from '../components/type/NavHeader.vue'
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

