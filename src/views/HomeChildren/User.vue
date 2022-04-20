<template>
  <div>
    <div class="dialog">
      <el-button @click="opeDdialogvisible" type="primary">+新增</el-button>
      <el-form style="display: flex; align-items: center">
        <el-form-item>
          <el-input v-model="form1.select" style="margin-top: 20px"></el-input>
        </el-form-item>
        <el-button
          @click="select"
          type="primary"
          style="height: 40px; margin-left: 10px"
          >搜索</el-button
        >
      </el-form>
    </div>
    <el-dialog
      :title="getDialogType"
      :visible.sync="dialogVisible"
      width="50%"
      class="text"
    >
      <common-form @addUser="addUser" :form="form" @canel="canel"></common-form>
    </el-dialog>
    <el-table
      :data="userInfo"
      style="width: 100%; line-height: 30px; margin-top: 20px"
    >
      <el-table-column prop="id" label="序号" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
      <el-table-column prop="birthday" label="生日" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination class="pagination"
                    :page-size="pageSize"
                    style="line-height: 20px"
                    layout="prev, pager, next"
                    :total="getUserInfoLength"
                    @current-change="currentChange"
                    :current-page="currentPage" />
    </div>
  </div>
</template>

<script>
import CommonForm from "components/CommonForm.vue";
import { getUserInfo } from "network/aside";
export default {
  name: "User",
  data() {
    return {
      dialogVisible: false,
      dialogType: true,
      form1: {
        select: "",
      },
      form: {},
      userInfo: [],
      currentPage: 1,
      pageSize: 1,
    };
  },
  components: {
    CommonForm,
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => { });
    },
    select() {
      if (this.form1.select) {
        this.userInfo = this.userInfo.filter((item) => {
          return item.name === this.form1.select;
        });
      }
    },
    handleEdit(index, row) {
      this.dialogType = false;
      this.form = row;
      this.dialogVisible = true;
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.userInfo.splice(index, 1);
          this.dialogVisible = false;
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    addUser(value) {
      if (this.dialogType) {
        this.addPerson(value);
      } else {
        this.edidUser(value);
      }
    },
    edidUser(value) {
      this.userInfo.forEach((item) => {
        if (value.name === item.name) {
          item.age = value.age;
          item.sex = value.sex;
          item.birthday = this.dateFormat(value.birthday);
          item.address = value.address;
          this.dialogVisible = false;
          this.$message({
            type: "success",
            message: "更新成功",
          });
        }
      });
    },
    addPerson(value) {
      value.birthday = this.dateFormat(value.birthday);
      this.userInfo.unshift(value);
      this.dialogVisible = false;
      this.$message({
        type: "success",
        message: "新增成功",
      });
    },
    opeDdialogvisible() {
      this.dialogVisible = true;
      this.dialogType = true;
    },
    dateFormat(dateData) {
      var date = new Date(dateData);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      const time = y + "-" + m + "-" + d;
      return time;
    },
    canel() {
      this.dialogVisible = false;
    },
    currentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(currentPage);
    },
  },
  computed: {
    getDialogType() {
      if (this.dialogType) {
        return "新增用户";
      } else {
        return "编辑用户";
      }
    },
    getUserInfoLength() {
      return this.userInfo.length
    }
  },
  mounted() {
    getUserInfo().then((res) => {
      this.userInfo = res;
    });
  },
};
</script>

<style scoped>
.dialog {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 36px;
  height: 30px;
}

.text {
  line-height: 20px;
  text-align: left;
}
.pagination {
  display: flex;
  justify-content: end;
}
</style>
