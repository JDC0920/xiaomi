<template>
  <div style="position: fixed;height: 90vh;overflow: auto">
    <nav-header></nav-header>
    <nav-main></nav-main>
    <main style="height: 60px"></main>
    <!--<nav-footer></nav-footer>-->
  </div>
</template>

<script>
  import NavHeader from '../components/index/NavHeader.vue'
  import NavMain from '../components/index/NavMain.vue'
  import '../assets/index.css'
  import ElCol from "element-ui/packages/col/src/col";
  export default{
    data(){
      return {

      }
    },
    components:{
      ElCol,
      NavHeader,
      NavMain
    },
    methods:{

    }
  }

</script>
