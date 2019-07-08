<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <router-link to="/" tag="el-link">Hello World</router-link>
        <router-link to="/carousel" tag="el-link">幻灯片</router-link>
        <router-link to="/collapse" tag="el-link">折叠面板</router-link>
        <router-link to="/table" tag="el-link">表格</router-link>
        <router-link to="/form" tag="el-link">表单</router-link>
        <router-link to="/dialog" tag="el-link">对话框</router-link>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header{
    padding-top: 20px;
    .el-link{
      margin: 0 5px;
    }
    .router-link-exact-active{
      color: #409EFF;
    }
  }
}
</style>
