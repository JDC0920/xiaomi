<template>
  <el-row class="footer">
    <el-col :span="6">
      <router-link to="/index"active-class="active">
      <p style="height: 20px"><i class="fa fa-home"></i></p>
      首页
      </router-link>
    </el-col>
    <el-col :span="6">
      <router-link active-class="active" to="/type"><p style="height: 20px"><i class="fa fa-navicon"></i></p>
        分类
      </router-link>
    </el-col>
    <el-col :span="6">
      <router-link active-class="active" to="/cart"><p style="height: 20px"><i class="fa fa-shopping-cart"></i></p>
        购物车
      </router-link>
    </el-col>
    <el-col :span="6">
      <router-link active-class="active" to="/mySelf"><p style="height: 20px"><i class="fa fa-user-o"></i></p>
        我的
      </router-link>
    </el-col>
  </el-row>
</template>
<script>
  import ElCol from "element-ui/packages/col/src/col";
  export default{
    components: {
    }
  }
</script>
<style>
  .footer{
    width: 100%;
    line-height: 40px;
    position: fixed;
    bottom:0px;
    background-color: white;
    text-align: center;
    z-index: 10000;
  }
  .active{
    color: #ff6700;
  }
  a{
    color: gray;
  }
</style>
