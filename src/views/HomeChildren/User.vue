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
      <common-form @addUser="addUser" :form="form" :dialogType="dialogType" @canel="canel"></common-form>
    </el-dialog>
    <el-table
      :data="getUserInfo"
      style="width: 100%; line-height: 30px; margin-top: 20px"
    >
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="age" label="年龄" width="180"/>
      <el-table-column prop="sex" label="性别" width="180"/>
      <el-table-column prop="birthday" label="生日" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="180" />
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
                    :page-size="5"
                    style="line-height: 20px" layout="total, sizes, prev, pager, next, jumper"
                    :total="userInfoLength"
                    :page-sizes="pageSizes"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage" />
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import CommonForm from "components/CommonForm.vue";
import { getUserInfo, add } from "network/aside";
export default {
  name: "User",
  inject: ['reload'],
  data() {
    return {
      dialogVisible: false,
      dialogType: true,
      form1: {
        select: "",
      },
      form: {},
      userInfo: [],
      userInfoLength: 0,
      currentPage: 1,
      pageSizes: [1, 2, 3, 4]
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
          let data = qs.stringify({
            name: row.name
          })

          this.$axios.post('http://127.0.0.1:5000/api/user/deleteUser', data)
          this.dialogVisible = false;

          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.reload()
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
        let data = qs.stringify({
          name: value.name,
          age: value.age,
          sex: value.sex,
          birthday: value.birthday,
          address: value.address
        })
        this.$axios.post('http://127.0.0.1:5000/api/user/addUser', data)
          .then(res => {
            let code = res.data.err_code
            if (code == 400) {
              this.$message({
                type: 'info',
                message: '用户已存在'
              })
            } else {
              this.$message({
                type: 'success',
                message: '新增成功'
              })
            }
          })
        this.dialogVisible = false
        this.reload()
      } else {
        let data = qs.stringify({
          name: value.name,
          age: value.age,
          sex: value.sex,
          birthday: value.birthday,
          address: value.address
        })
        this.$axios.post('http://127.0.0.1:5000/api/user/editUser', data)
        this.reload()
        this.dialogVisible = false
      }
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
    handleSizeChange(val) {
      console.log(val);
      this.PageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
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
    getUserInfo() {
      this.userInfo.forEach(item => {
        item.birthday = this.dateFormat(item.birthday)
      })
      return this.userInfo
    }
  },
  mounted() {
    getUserInfo().then((res) => {
      this.userInfo = res
      this.userInfoLength = res.length
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
