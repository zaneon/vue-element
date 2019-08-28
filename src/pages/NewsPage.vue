<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="searchWrap">
          <div class="wrapper">
            <div class="search">
              <img src="../assets/image/slogan.png" alt="">
              <div class="input-bg">
                <el-input placeholder="搜索关键词..." v-model="search">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="wrapper">
      <el-row  :gutter="30">
        <el-col :span="8" class="mb40">
          <div class="article-item">
            <img src="../assets/image/img.jpg" alt="">
            <div class="text">
              <a href="#">
                <el-tag type="danger" effect="dark" size="mini">热门</el-tag>
                香格里拉-一辈子必须要去一次的地方一次的地方一次的地方一次的地方一次的地方必须要去一次的地方一次的地方一次的地方一次的地方一次的地方
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mb40">
          <div class="article-item">
            <img src="../assets/image/img.jpg" alt="">
            <div class="text">
              <a href="#">
                <el-tag type="danger" effect="dark" size="mini">热门</el-tag>
                香格里拉-一辈子必须要去一次的地方一次的地方一次的地方一次的地方一次的地方必须要去一次的地方一次的地方一次的地方一次的地方一次的地方
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mb40">
          <div class="article-item">
            <img src="../assets/image/img.jpg" alt="">
            <div class="text">
              <a href="#">
                <el-tag type="danger" effect="dark" size="mini">热门</el-tag>
                香格里拉-一辈子必须要去一次的地方一次的地方一次的地方一次的地方一次的地方必须要去一次的地方一次的地方一次的地方一次的地方一次的地方
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mb40">
          <div class="article-item">
            <img src="../assets/image/img.jpg" alt="">
            <div class="text">
              <a href="#">
                <el-tag type="danger" effect="dark" size="mini">热门</el-tag>
                香格里拉-一辈子必须要去一次的地方一次的地方一次的地方一次的地方一次的地方必须要去一次的地方一次的地方一次的地方一次的地方一次的地方
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mb40">
          <div class="article-item">
            <img src="../assets/image/img.jpg" alt="">
            <div class="text">
              <a href="#">
                <el-tag type="danger" effect="dark" size="mini">热门</el-tag>
                香格里拉-一辈子必须要去一次的地方一次的地方一次的地方一次的地方一次的地方必须要去一次的地方一次的地方一次的地方一次的地方一次的地方
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mb40">
          <div class="article-item">
            <img src="../assets/image/img.jpg" alt="">
            <div class="text">
              <a href="#">
                <el-tag type="danger" effect="dark" size="mini">热门</el-tag>
                香格里拉-一辈子必须要去一次的地方一次的地方一次的地方一次的地方一次的地方必须要去一次的地方一次的地方一次的地方一次的地方一次的地方
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mb40">
          <div class="article-item">
            <img src="../assets/image/img.jpg" alt="">
            <div class="text">
              <a href="#">
                <el-tag type="danger" effect="dark" size="mini">热门</el-tag>
                香格里拉-一辈子必须要去一次的地方一次的地方一次的地方一次的地方一次的地方必须要去一次的地方一次的地方一次的地方一次的地方一次的地方
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mb40">
          <div class="article-item">
            <img src="../assets/image/img.jpg" alt="">
            <div class="text">
              <a href="#">
                <el-tag type="danger" effect="dark" size="mini">热门</el-tag>
                香格里拉-一辈子必须要去一次的地方一次的地方一次的地方一次的地方一次的地方必须要去一次的地方一次的地方一次的地方一次的地方一次的地方
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="mb40">
          <div class="article-item">
            <img src="../assets/image/img.jpg" alt="">
            <div class="text">
              <a href="#">
                <el-tag type="danger" effect="dark" size="mini">热门</el-tag>
                香格里拉-一辈子必须要去一次的地方一次的地方一次的地方一次的地方一次的地方必须要去一次的地方一次的地方一次的地方一次的地方一次的地方
              </a>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
    data() {
    return {
      search: ''
    }
  }
}
</script>

<style lang="less">
  .searchWrap{
    height: 200px;
    margin-bottom: 30px;
    padding-bottom: 30px;
    background: url(../assets/image/search.jpg) no-repeat;
    background-size: cover;
    .search{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 35px;
      .input-bg{
        width: 520px;
        height: 56px;
        background: rgba(0, 0, 0, .2);
        border-radius: 5px;
        margin-top: 20px;
        padding: 8px;
        .el-input-group__append .el-button{
          font-size: 20px;
        }
        .el-input__inner{
          border-right: 0;
          &:focus{
            border-color: #DCDFE6;
          }
        }
        .el-input-group__append{
          background: #fff;
        }
      }
    }
  }
  .article-item{
    background: #fff;
    transition: all .5s;
    vertical-align: top;
    &:hover{
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .2);
    }
    img{
      width: 380px;
      height: 213px;
      display: block;
      cursor: pointer;
    }
    .text{
      padding: 15px;
      line-height: 24px;
      font-size: 14px;
      height: 78px;
      a{
        color: #555;
        display: block;
        height: 48px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        }
      .el-tag{
        position: relative;
        top: -1px;
      }
    }
  }
  .el-pagination{
    text-align: center;
  }
</style>
