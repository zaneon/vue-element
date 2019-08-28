<template>
  <el-container>
    <el-header height="50px">
      <div class="wrapper">
        <el-row>
          <el-col :span="14">
            <div class="menu">
              <a href="#"><img src="./assets/image/logo.png" alt="户外活动平台"></a>
              <a href="#">资讯</a>
              <a href="#">活动</a>
              <a href="#">保险</a>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="link">
              <a href="#">登录</a>
              <el-divider direction="vertical"></el-divider>
              <a href="#">俱乐部入驻</a>
              <el-divider direction="vertical"></el-divider>
              <a href="#">车队入驻</a>
              <el-divider direction="vertical"></el-divider>
              <a href="#">农家 / 客栈入驻</a>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height="40px">
      <div class="wrapper">© 底部信息</div>
    </el-footer>
</el-container>
</template>


<script>
export default {
  name: 'app',
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="less">
  .el-header{
    line-height: 50px;
    background: #444444;
    .menu{
      display: flex;
      img{
        vertical-align: top;
      }
      a:first-child{
        margin-right: 15px;
      }
      a:not(:first-child){
        margin-right: 30px;
      }
    }
    .link{
      text-align: right;
      font-size: 12px;
    }
    a{
      color: #fff;
      &:hover{
        color: #4ebaff;
      }
    }
  }
  .el-main{
    padding: 0 0 30px 0;
    background: #f4f4f4;
  }
  .el-footer{
    background: #fff;
    line-height: 40px;
    color: #666;
    font-size: 12px;
  }
</style>
