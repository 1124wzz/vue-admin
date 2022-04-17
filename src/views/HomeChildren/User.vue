<template>
  <div>
    <div class="dialog">
      <el-button @click="dialogVisible = true" type="primary">+新增</el-button>
      <el-form style="display: flex; align-items: center;">
        <el-form-item>
          <el-input v-model="form1.select" style="margin-top: 20px"></el-input>
        </el-form-item>
        <el-button @click="select" type="primary" style="height: 40px; margin-left: 10px">搜索</el-button>
      </el-form>
    </div>
    <el-dialog title="新增用户" :visible.sync="dialogVisible" width="50%" class="text">
      <common-form @addUser="addUser" :form="form"></common-form>
    </el-dialog>
    <el-table :data="userInfo" style="width: 100%;line-height: 30px; margin-top: 20px;">
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="180">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="180">
      </el-table-column>
      <el-table-column prop="birthday" label="生日" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import CommonForm from "components/CommonForm.vue";
import { getUserInfo } from 'network/aside'
export default {
  name: "User",
  data() {
    return {
      dialogVisible: false,
      form1: {
        select: ''
      },
      form: {},
      userInfo: []
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

    },
    handleEdit(index, row) {
      this.form = row
      this.dialogVisible = true
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.userInfo.splice(index, 1, row)
      this.dialogVisible = false
    },
    addUser(value) {
      this.userInfo.push(value)
      this.dialogVisible = false
    }
  },

  mounted() {
    getUserInfo().then(res => {
      this.userInfo = res
    })
  }
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
</style>
