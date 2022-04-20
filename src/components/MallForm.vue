<template>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="序号:">
    <el-input v-model="form.id"></el-input>
  </el-form-item>
  <el-form-item label="型号:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="库存:">
    <el-input v-model="form.stock"></el-input>
  </el-form-item>
  <el-form-item label="价格:">
    <el-input v-model="form.price"></el-input>
  </el-form-item>
  <el-form-item label="剩余库存:">
    <el-input v-model="form.surplus_stock"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="canel">取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  name: 'CommonForm',
  props: {
    form: {
      id: '',
      name: '',
      stock: '',
      price: '',
      surplus_stock: '',
    }
  },
  data() {
    return {

    };
  },
  methods: {
    onSubmit() {
      this.$emit('addMall', this.form);
    },
    canel() {
      this.$emit('canel')
    }
  }
}
</script>

<style scoped>
  el-form-item {
    margin-top: 10px;
  }
</style>
