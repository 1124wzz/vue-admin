<template>
  <div id="app">
    <el-container style="height:100%">
      <el-aside width="auto">
        <aside-1></aside-1>
      </el-aside>
      <el-container>
        <el-header>
          <common-header/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside1 from '../views/HomeChildren/Aside1.vue'
import User from "../views/HomeChildren/User.vue"
import CommonHeader from './CommonHeader.vue'
export default {
  name: 'Home',
  components: {
    User,
    Aside1,
    CommonHeader
  }
}
</script>

<style scoped>
.el-header{
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

/* .el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
} */

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
