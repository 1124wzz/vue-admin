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
      <mall-form @addMall="addMall" :form="form" @canel="canel"></mall-form>
    </el-dialog>
    <el-table
      :data="main_info"
      style="width: 100%; line-height: 30px; margin-top: 20px"
    >
      <el-table-column prop="name" label="手机型号" width="180"> </el-table-column>
      <el-table-column prop="stock" label="总库存" width="180"> </el-table-column>
      <el-table-column prop="price" label="价格" width="180"> </el-table-column>
      <el-table-column prop="surplus_stock" label="剩余库存" width="180">
      </el-table-column>
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
import qs from 'qs'
import MallForm from 'components/MallForm.vue'
import { getMall } from "network/aside";
export default {
  name: 'Mall',
  inject: ['reload'],
  data() {
    return {
      dialogVisible: false,
      dialogType: true,
      form1: {
        select: "",
      },
      main_info: [],
      currentPage: 1,
      pageSize: 1,
      form: {}
    };
  },
  components: {
    MallForm
  },
  methods: {
    addMall(value) {
      if (this.dialogType) {
        let data = qs.stringify({
          name: value.name,
          stock: value.stock,
          price: value.price,
          surplus_stock: value.surplus_stock
        })
        this.$axios.post('http://127.0.0.1:5000/api/user/addMall', data)
          .then(res => {
            let code = res.data.err_code
            if (code == 400) {
              this.$message({
                type: 'info',
                message: '商品已存在'
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
          stock: value.stock,
          price: value.price,
          surplus_stock: value.surplus_stock
        })
        this.$axios.post('http://127.0.0.1:5000/api/user/editMall', data)
        this.reload()
        this.dialogVisible = false
      }
    },
    canel() {
      this.dialogVisible = false
    },
    currentChange() {

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
          this.$axios.post('http://127.0.0.1:5000/api/user/deleteMall', data)
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
    select() {
      if (this.form1.select) {
        this.main_info = this.main_info.filter((item) => {
          return item.name === this.form1.select;
        });
      }
    },
    opeDdialogvisible() {
      this.dialogVisible = true;
      this.dialogType = true;
    }
  },
  mounted() {
    getMall().then(res => {
      this.main_info = res
    })
  },
  computed: {
    getDialogType() {
      if (this.dialogType) {
        return "新增商品";
      } else {
        return "编辑商品";
      }
    },
    getUserInfoLength() {
      return this.main_info.length
    }
  }
}
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
