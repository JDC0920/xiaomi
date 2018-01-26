<template>
  <div style="margin-top: 66px;width: 100%;">
    <section>
      <!--轮播图-->
      <div class="block">
        <el-carousel trigger="click"  height="200px">
          <el-carousel-item v-for="lun in Listimg">
            <img :src="lun.url" alt="" style="width: 100%;height: 100%">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--轮播图下面-->
      <el-row>
        <el-col :span="6" v-for="item in listImage">
          <img :src="item.url" alt="" style="width: 100%;">
        </el-col>
      </el-row>
      <!---->
      <div>
        <el-row>
          <el-col :span="12">
            <img src="../../../static/main-1.png" style="width: 99%;">
          </el-col>
          <el-col :span="12">
            <img src="../../../static/main-2.png" style="width: 99%;"/>
            <img src="../../../static/main-3.png" style="width: 99%;"/>
          </el-col>
        </el-row>
        <img src="../../../static/home-6.png" style="width: 100%;"/>
        <img src="../../../static/main-4.png" style="width:  100%;"/>
      </div>
      <!--明星单品-->
      <div>
        <img src="../../../static/main-6.png" style="width: 100%;"/>
        <el-row>
          <el-col :span="12" style="position: relative;">
            <div class="sale">
              <img src="../../../static/-50.png" style="width:40%;height:40%"/>
            </div>
            <img src="../../../static/body-1.png"style="width: 99%;height: 100%;"/>
            <p class="detailsP">红米Note 5A 16GB</p>
            <p class="detailsSpan">5.5"高清大屏</p>
            <span class="money">￥649 <s class="price">￥699</s></span>
          </el-col>
          <el-col :span="12" style="position: relative;">
            <div class="sale">
              <img src="../../../static/-50.png" style="width:40%;height:40%"/>
            </div>
            <img src="../../../static/body-2.png"style="width: 99%;height: 100%;"/>
            <p class="detailsP">红米4A 16GB</p>
            <p class="detailsSpan">轻盈小巧的续航手机</p>
            <span class="money">￥549 <s class="price">￥599</s></span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <img src="../../../static/body-2.png"style="width: 99%;height: 100%;"/>
            <p class="detailsP">小米MIX 2 全面屏2.0</p>
            <p class="detailsSpan">5.5"高清大屏,4轴光学防抖</p>
            <span class="money">￥699</span>
          </el-col>
          <el-col :span="12">
            <img src="../../../static/body-3.png"style="width: 99%;height: 100%;"/>
            <p class="detailsP">红米Note 5A 16GB</p>
            <p class="detailsSpan">5.5"高清大屏</p>
            <span class="money">￥699</span>
          </el-col>
        </el-row>
        <img src="../../../static/body-7.png" style="width: 100%;"/>
      </div>
      <!--新品上线-->
      <div>
        <img src="../../../static/body-8.png" style="width: 100%"/>
        <el-row>
          <el-col :span="12" style="position: relative;">
            <div class="sale">
              <img src="../../../static/-200.png" style="width:40%;height:40%"/>
            </div>
            <img src="../../../static/body-1.png"style="width: 99%;height: 100%;"/>
            <p class="detailsP">红米Note 5A 16GB</p>
            <p class="detailsSpan">5.5"高清大屏</p>
            <span class="money">￥499 <s class="price">￥699</s></span>
          </el-col>
          <el-col :span="12" style="position: relative;">
            <div class="sale">
              <img src="../../../static/-200.png" style="width:40%;height:40%"/>
            </div>
            <img src="../../../static/body-2.png"style="width: 99%;height: 100%;"/>
            <p class="detailsP">红米4A 16GB</p>
            <p class="detailsSpan">轻盈小巧的续航手机</p>
            <span class="money">￥399 <s class="price">￥599</s></span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" style="position: relative;">
            <div class="sale">
              <img src="../../../static/new.png" style="width: 40%;height: 40%"/>
            </div>
            <img src="../../../static/body-2.png" style="width: 99%;height: 100%;"/>
            <p class="detailsP">小米MIX 2 全面屏2.0</p>
            <p class="detailsSpan">5.5"高清大屏,4轴光学防抖</p>
            <span class="money">￥699</span>
          </el-col>
          <el-col :span="12">
            <img src="../../../static/body-3.png"style="width: 99%;height: 100%;"/>
            <p class="detailsP">红米Note 5A 16GB</p>
            <p class="detailsSpan">5.5"高清大屏</p>
            <span class="money">￥699</span>
          </el-col>
        </el-row>
        <div style="width: 100%;padding: 0 20px;">
          <hr style="color:rgba(0,0,0,.54)">
          <h2 style="color:rgba(0,0,0,.54);text-align: center; ">更多新品></h2>
        </div>
        <img src="../../../static/main-5.png" style="width: 100%"/>
      </div>
      <!--米家智能-->
      <div>
        <img src="../../../static/home-2.png" style="width: 100%;"/>
        <el-row>
          <el-col :span="12" class="photo">
            <img src="../../../static/main-2.png" style="width: 100%"/>
          </el-col>
          <el-col :span="12" class="wenzi">
            <div style="padding: 10% 5% 0 8%">
              <p class="detailsP">米家体温计</p>
              <p class="detailsSpan">清凉快人一步，让传统空调秒变智能</p>
              <span class="money">￥149 <s class="price">￥169</s></span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" class="wenzi">
            <div style="padding: 15% 5% 0 8%">
              <p class="detailsP">米家体温计</p>
              <p class="detailsSpan">清凉快人一步，让传统空调秒变智能</p>
              <span class="money">￥149 <s class="price">￥169</s></span>
            </div>
          </el-col>
          <el-col :span="12" class="photo">
            <img src="../../../static/main-3.png" style="width: 100%"/>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
      data(){
          return{
            //轮播图
            Listimg:[
              {url:'../static/lunbo-1.png'},
              {url:'../static/lunbo-2.png'},
              {url:'../static/lunbo-1.png'},
              {url:'../static/lunbo-2.png'}
            ],
            //轮播图下面
            listImage:[
              {url:'../static/mi-ka.png'},
              {url:'../static/new-issue.png'},
              {url:'../static/old-new.png'},
              {url:'../static/wuliu.png'}
            ]
          }
      }
  }
</script>
