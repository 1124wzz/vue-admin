<template>
  <el-row style="maring-top: 20px" :gutter="20">
    <home-left :tableData="tableData"/>
    <home-right :countData="countData"/>
  </el-row>
</template>

<script>
import HomeLeft from './HomeLeft.vue'
import HomeRight from './HomeRight.vue'
import { getTable } from "../../network/aside";
export default {
  name: "Home",
  data() {
    return {
      tableData: [],
      countData: []
    };
  },
  components: {
    HomeLeft,
    HomeRight
  },
  mounted() {
    getTable().then((res) => {
      this.tableData = res[0].result1;
      this.countData = res[0].result2
    });
  },
};
</script>

<style scoped>
</style>
