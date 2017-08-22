<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose">
      <el-menu-item index="home"><i class="el-icon-menu"></i>home page</el-menu-item>
      <el-submenu index="product">
         <template slot="title"><i class="el-icon-message"></i>商品管理</template>
          <el-menu-item index="product" :route="{path:'/product'}">商品</el-menu-item>
          <el-menu-item index="class">分类</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="activity"><i class="el-icon-setting"></i>活动管理</el-menu-item>
      <el-menu-item index="order"><i class="el-icon-setting"></i>订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    }
  }
</script>

<style scoped>
  .sidebar{

    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
