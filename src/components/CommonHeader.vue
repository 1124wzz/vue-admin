<template>
  <header>
    <div class="l-content">
      <el-button size="small" plain icon="el-icon-s-fold" @click="menuClick" style="margin-right: 10px" />
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size: 14px" v-for="item in tags" :key="item.name" :to="{ path: item.path }">{{
          item.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img class="user-img" :src="userImg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("../assets/logo.png"),
    };
  },
  methods: {
    menuClick() {
      this.$store.commit("isCollapse");
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.l-content {
  display: flex;
  align-items: center;
}

.text {
  color: white;
  font-size: 16px;
  margin-left: 20px;
}

.user-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 24px;
}
</style>
