<template>
  <div class="header">
    <el-row>
      <el-col :span="4" style="text-align: center;padding: .9rem;">
        <router-link to="/" style="text-align: center;"><i class="fa fa-chevron-left"></i></router-link>
      </el-col>
      <el-col :span="16" style="text-align: center;padding: .9rem;">
        <slot style="font-size: 1rem;"></slot>
      </el-col>
      <el-col :span="4" style="text-align: center;padding: .9rem;">
        <router-link to="/mySelf" style="text-align: center;"><i class="fa fa-search "></i></router-link>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
  .header{
    background-color: #f2f2f2;
    width: 100%;
    position: fixed;
    top: 0px;
    color: #666;
    z-index: 5;
  }
  a{
    color: #666;
  }
</style>
<script>
  export default {

  }
</script>
