<template>
  <div class="header">
    <el-row class="on">
      <el-col class="logo" :span="3">
        <img src="../../assets/logo.png" alt="" style="width: 45%;">
      </el-col>
      <el-col :span="18" class="onLeft">
        <router-link to="/search">
          <i class="fa fa-search"></i>
          <span>搜索商品名</span>
        </router-link>
      </el-col>
      <el-col :span="3" class="onRight">
        <router-link to="/mySelf"><i class="fa fa-user-o"></i></router-link>
      </el-col>
    </el-row>
    <el-row class="bottom">
      <ul>
        <li v-for="(type,index) in List" style="padding: 0 5px;text-align: center;">
          <a href="javascript:void(0)" @click="isActive(index)" style="color: rgba(0,0,0,0.6);text-decoration: none" class="index">
            {{type}}
          </a>
        </li>
      </ul>
    </el-row>
  </div>
</template>
<style>
  .header{
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
    padding-top: .6rem;
    text-align: center;

  }
  .onLeft{
    margin-left: 5px;
    padding: .5rem .4rem;
    background-color: white;
    color: rgba(0,0,0,0.6);
  }
  .onRight{
    padding-top: .6rem;
    text-align: center;
  }
  .bottom ul{
    /*width: 100%;*/
    height: 40px;
    overflow-y: hidden;
    overflow-x:visible;
    white-space: nowrap;
    z-index: 2;
  }
  ::-webkit-scrollbar {
     width: 0px;
     height: 1px;
   }
  .bottom ul li{
    width: 50px;
    display:inline-table ;
    line-height: 40px;
  }
</style>
<script>
  export default {
      name:'MiHeader',
    data:function () {
      return {
        List:['推荐','手机','智能','电视','电脑','全面屏','生活周边','盒子','艺术'],
        isactive:false
      }
    },
    methods:{
      isActive:function (index) {
        var liA = document.getElementsByClassName('index')[index];
        var aArray = document.getElementsByClassName('index');
        console.log(index)
        for(var i = 0;i<aArray.length;i++){
            if(i == index){
                liA.style.cssText = 'color:#ff6700;text-decoration:none;border-bottom:1px solid #ff6700'
            }else {
                aArray[i].style.cssText = 'color:gray;text-decoration:none;'
            }
        }
      }
    }

  }
</script>
