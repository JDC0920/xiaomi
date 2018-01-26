<template>
  <div style="background-color: #eee">
    <header style="text-align: center;padding-top: 2.3rem;padding-bottom: 1rem ">
      <router-link to="/index" ><img @click="aaa" src="../../static/logo2.png" style="width: 13%"/></router-link>
      <h2 style="font-size: 1.2rem;color: #424242;font-weight: normal;">小米账号登录</h2>
    </header>
    <!--输入框-->
    <nav-main>
    </nav-main>
    <!--分割线-->
  </div>
</template>
<style>

</style>
<script>
  import NavMain from '@/components/login/phone'
  export default {
//      data(){
//      },
    components:{
      NavMain
    },
    props:[
        'footer'
    ],
    mounted() {
      this.footer.a = false
//      console.log(this.footer);
    },
    methods:{
          aaa:function () {
            this.footer.a=true
          }
    }
  }
</script>
