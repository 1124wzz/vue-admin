<template>
  <div id="app">
    <el-container style="height:100%">
      <el-aside width="auto">
        <aside-menu/>
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
import AsideMenu from "@/components/main/AsideMenu";
import CommonHeader from './CommonHeader.vue'
export default {
  name: 'Home',
  components: {
    CommonHeader,
    AsideMenu,
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
