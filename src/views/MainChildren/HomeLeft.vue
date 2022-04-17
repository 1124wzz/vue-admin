<template>
  <el-col :span="8">
    <el-card shadow="hover">
      <div class="user">
        <img :src="avater" alt="" />
        <div class="user-info">
          <p class="name">Admin</p>
          <p class="access">超级管理员</p>
        </div>
      </div>
      <hr />
      <div class="login-info">
        <p>上次登录地点:<span>张掖</span></p>
        <p>上次登录时间:<span>2022-4-15</span></p>
      </div>
    </el-card>
    <el-card style="margin-top: 20px; height: 365px">
      <el-table
        :data="tableData"
        border
        style="width: 100%; line-height: 30px; margin-top: 20px;"
        size="mini">
        <el-table-column prop="name" label="手机型号" width="100" class="clo" />
        <el-table-column prop="totalBUy" label="总购买" class="clo" />
        <el-table-column prop="monthBuy" label="本月购买" class="clo" />
      </el-table>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: "HomeLeft",
  data() {
    return {
      avater: require("assets/logo.png"),
    };
  },
  props: {
    tableData: [],
  },
};
</script>

<style scoped>
.user {
  display: flex;
  justify-content: space-between;
  width: 0;
}
.user img {
  display: flex;
  align-items: center;
  float: left;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
}
.user-info {
  height: 50px;
  margin-top: 50px;
}
.name {
  line-height: 20px;
  font-size: 20px;
  margin: 0;
  padding: 0;
}
.access {
  line-height: 20px;
  font-size: 10px;
  width: 90px;
  margin: 0;
  padding: 0;
  color: #a9a9a9;
}
.login-info p {
  line-height: 20px;
  padding: 0;
  margin: 0;
  text-align: left;
  font-size: 10px;
  color: #a9a9a9;
}
.login-info p span {
  margin-left: 35px;
}
/* .clo {
  line-height: 30px;
} */
</style>
