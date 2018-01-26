<template>
  <div>
    <header class="search">
      <el-row class="on">
        <el-col class="logo" :span="3">
          <span  @click="back"><i class="fa fa-chevron-left"></i></span>
        </el-col>
        <el-col :span="18" class="onLeft">
          <input type="text" placeholder="请输入搜索商品名">
        </el-col>
        <el-col :span="3" class="onRight">
          <i class="fa fa fa-search fa-lg"></i>
        </el-col>
      </el-row>
    </header>
    <!--热门搜索-->
    <div style="width: 100%;height: 3.5rem;"></div>
    <div>
      <div style="height: 3rem;line-height: 3rem;padding-left: .8rem;font-size: .9rem;color: rgba(0,0,0,0.5)">热门搜索</div>
      <img src="../../static/search.jpg" style="width: 100%"/>
    </div>
    <!--按钮-->
    <div style="text-align: left;margin: 0.2rem .5rem">
      <a href="javaScript:" class="search-button">红米5 新品</a>
      <a href="javaScript:" class="search-button">电视32英寸</a>
      <a href="javaScript:" class="search-button">净水器厨下</a>
      <a href="javaScript:" class="search-button">小米MIX 2</a>
    </div>

  </div>
</template>
<style>
  .search{
    height: 3.5rem;
    background-color: #f2f2f2;
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 5;
  }
  .on{
    padding-top: 5px;
    display: flex;
  }
  .logo{
    margin-top: .2rem;
    text-align: center;
  }
  .onLeft{
    margin-top: .35rem;
    margin-left: 5px;
    background-color: white;
    font-weight: 200;
  }
  .onLeft input{
    width: 100%;
    height: 1rem;
    border: none;
    padding-left: .5rem;
    outline: 0;
  }
  .onRight{
    margin-top: .1rem;
    text-align: center;
    color: rgba(0,0,0,0.3);
  }
  .search-button {
    display: inline-block;
    padding:.4rem .7rem;
    color: #484848;
    margin: 0.2rem;
    font-size: .8rem;
    border: 1px solid #e4e4e4;
  }
</style>
<script>
  export default{
      name:'search',
    data(){
      return{

      }
    },
    props:[
      'footer'
    ],
    mounted() {
      this.footer.a = false
//      console.log(this.footer);
    },
    methods:{
        back:function () {
          this.footer.a = true;
//          console.log(this.footer)
          window.history.back()
        }
    }
  }
</script>
