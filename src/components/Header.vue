<template>
  <div class="header">
    <a class="logo" href="#/">shop-admin</a>
    <div class="user-info">
      <el-dropdown  @command="handleCommand">
      <span class="el-dropdown-link">
        <img class="user-logo" src="/static/pic.jpg">
        <i class="username">{{user}}</i>
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
          <el-dropdown-item command="change">修改资料</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      user: localStorage.getItem('username') || '木木'
    }
  },
  methods: {
    handleCommand (command) {
      if(command == "loginout") {
        localStorage.removeItem('username')
        this.$router.push("/login")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  a { text-decoration: none}
  .header {  background-color: #242f42;height: 70px; line-height:70px;
    color: #fff; }
  .logo { float: left; width: 200px; font-size: 26px; color: #fff; text-align: center }
  .user-info { float: right; margin-right: 30px;}
  .user-logo { width: 50px; height: 50px; float: left;  border-radius: 50%; margin: 10px;  }
  .username {float: left;}
  .el-dropdown-link {  display: block; vertical-align: middle; color: #fff}
</style>
