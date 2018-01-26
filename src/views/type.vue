<template>
  <div style="position: fixed;height: 90vh;overflow: auto">
    <!--<nav-header></nav-header>-->
    <main style="margin-top: 50px;">
      <el-row class="list">
        <el-col :span="6">
          <ul class="list-left">
            <li v-for="(item,index) in list" style="width: 100%;text-align: center;padding: 10px 10px;">
              <a href="javascript:"
                 @click="isColor(index)" class="aaa">{{item}}</a>
            </li>
          </ul>
        </el-col>
        <!--右边部分-->
        <el-col :span="18">
          <ul class="list-right">
            <img src="../../static/body-7.png" style="width: 100%"/>
            <!--手机-->
            <li>
              <div style="position: relative;padding: 1.3rem 4rem">
                <span class="product">手机</span>
              </div>
              <el-row>
                <el-col :span="8" class="product-left">
                  <img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8">
                  <img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
              </el-row>
            </li>
            <li>
              <div style="position: relative;padding: 1.3rem 4rem">
                <span class="product">电视</span>
              </div>
              <el-row>
                <el-col :span="8" class="product-left">
                  <img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8">
                  <img src="../../static/tv-4.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8"><img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-3.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-2.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
              </el-row>
            </li>
            <li>
              <div style="position: relative;padding: 1.3rem 4rem">
                <span class="product">电脑</span>
              </div>
              <el-row>
                <el-col :span="8" class="product-left">
                  <img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8">
                  <img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
              </el-row>
            </li>
            <li>
              <div style="position: relative;padding: 1.3rem 4rem">
                <span class="product">小米手机</span>
              </div>
              <el-row>
                <el-col :span="8" class="product-left">
                  <img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8">
                  <img src="../../static/tv-4.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8"><img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-3.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-2.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
              </el-row>
            </li>
            <li>
              <div style="position: relative;padding: 1.3rem 4rem">
                <span class="product">红米手机</span>
              </div>
              <el-row>
                <el-col :span="8" class="product-left">
                  <img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8">
                  <img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
              </el-row>
            </li>
            <li>
              <div style="position: relative;padding: 1.3rem 4rem">
                <span class="product">移动4G+专区</span>
              </div>
              <el-row>
                <el-col :span="8" class="product-left">
                  <img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8">
                  <img src="../../static/tv-4.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8"><img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-3.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-2.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
              </el-row>
            </li>
            <li>
              <div style="position: relative;padding: 1.3rem 4rem">
                <span class="product">手机配件</span>
              </div>
              <el-row>
                <el-col :span="8" class="product-left">
                  <img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8">
                  <img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/body-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
              </el-row>
            </li>
            <li>
              <div style="position: relative;padding: 1.3rem 4rem">
                <span class="product">盒子</span>
              </div>
              <el-row>
                <el-col :span="8" class="product-left">
                  <img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8">
                  <img src="../../static/tv-4.png" style="width: 80%"/>
                  <p class="product-size">红米5</p>
                </el-col>
                <el-col :span="8"><img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-3.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-1.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
                <el-col :span="8"><img src="../../static/tv-2.png" style="width: 80%"/>
                  <p class="product-size">红米5</p></el-col>
              </el-row>
            </li>
          </ul>
        </el-col>
      </el-row>
    </main>
  </div>
</template>
<style scoped>
  .list{
    /*position: relative;*/
    /*height: 1000px;*/
  }
  .list-left{
    /*position: absolute;*/
    padding-top: 1.5rem;
    /*left: .5rem;*/
    /*width: 100%;*/
    height: 100%;
    border-right: 1px solid rgba(0,0,0,0.4);
  }
  .list-right{
    /*position: relative;*/
    /*right: .5rem;*/
    /*width: 100%;*/
    padding: 0 1rem;
    top: 50px;
    height: 500px;
    overflow-y: scroll;
    text-align: center;
  }
  .aaa{
    padding: .5rem 1rem;
  }
  /*手机*/
  .product:before{
    content: '';
    position: absolute;
    top:50%;
    left: 36%;
    width: 1.5rem;
    border-top: 2px solid #e0e0e0;
  }
  .product:after{
    content: '';
    position: absolute;
    top:50%;
    left: 56%;
    width: 1.5rem;
    border-top: 2px solid #e0e0e0;
  }
  .product-size{
    padding: .5rem 0;
    font-size: .8rem;
  }
  /**/
</style>
<script>
//  import NavHeader from '../components/type/NavHeader.vue'
  import '../assets/index.css'
  export default{
    data(){
      return {
          list:[
              '新品','手机','电视','电脑','家电','路由','智能','电源','耳机','音箱','礼品','生活'
          ]
      }
    },
    components:{
//      NavHeader,
    },
    mounted:function () {
      document.getElementsByClassName('aaa')[0].style.cssText= ' color:#ff6700;font-size:1.2rem;';
    },
    methods:{
        isColor:function (index) {
          var liA = document.getElementsByClassName('aaa')[index];
          var aArray = document.getElementsByClassName('aaa');
          //console.log(index)
          for (var i = 0; i < aArray.length; i++) {
            if (i == index) {
              liA.style.cssText = 'color:#ff6700;font-size:1.2rem;'
            } else {
              aArray[i].style.cssText = 'color:gray;'
            }
          }
        }
    }
  }
</script>

