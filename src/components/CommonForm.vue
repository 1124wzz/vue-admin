<template>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="姓名:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="年龄:">
    <el-input v-model="form.age"></el-input>
  </el-form-item>
  <el-form-item label="性别:">
    <el-input v-model="form.sex"></el-input>
  </el-form-item>
  <el-form-item label="出生日期:">
    <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
  </el-form-item>
  <el-form-item label="地址:">
    <el-input v-model="form.address"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  name: 'CommonForm',
  data() {
    return {
      form: {
        name: '',
        age: '',
        sex: '',
        birthday: '',
        address: '',
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('helo');
    }
  }
}
</script>

<style scoped>
  el-form-item {
    margin-top: 10px;
  }
</style>
