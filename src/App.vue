<template>
  <div id="app">
    <transition name="transformup">
      <nav-header v-if="header">{{messages}}</nav-header>
    </transition>
    <transition :name="transformName">
      <router-view class="child-view" :footer="show"></router-view>
    </transition>
    <transition name="footer" >
      <nav-footer v-if="show.a"></nav-footer>
    </transition>
  </div>
</template>

<script>
  import NavFooter from '@/components/index/NavFooter'
  import NavHeader from '@/components/type/NavHeader.vue'
export default {
  name: 'app',
  data(){
      return{
//        transformup:'up',
        transformName:'slide-left',
        show:{a:true},
        messages:'',
        header:false
      }
  },
  components:{
    NavFooter,
    NavHeader
  },
  watch:{
      '$route'(to, from){
        if(this.$route.path == '/type'){
          this.messages = '分类'
        }else if(this.$route.path == '/cart'){
          this.messages = '购物车'
        }
        if(this.$route.path == '/type' || this.$route.path == '/cart'){
          this.header = true;
        }else {
          this.header = false;
        }
        const toDepth = to.path.split('').length
        const fromDepth = from.path.split('').length
        this.transformName = toDepth < fromDepth ? 'slide-right' : 'slide-left'

      }
  }
}
</script>
<style>
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  .transformup-enter{
    transform: translateY(-100%);
  }
  .transformup-leave-to {
    transform: translateY(-100%);
  }
  .transformup-enter-active , .transformup-leave-active{
    transition: all 0.5s;
    position: absolute;
  }

</style>


