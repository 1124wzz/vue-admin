<template>
  <el-menu :default-active="'/home'" router
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
    <h3>{{ isCollapse? '后台' : '后台管理系统' }}</h3>
    <el-menu-item v-for="(item) in noChildren" :index="item.name" :key="item.path" @click="pathClick(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="(item, index) in hasChildren" :index="item.name" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="(item, index) in item.children" :key="index">
        <el-menu-item :index="name">{{ item.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { getAside } from 'network/aside'
export default {
  name: 'Aside1',
  data() {
    return {
      menu: []
    };
  },
  methods: {
    pathClick(item) {
      this.$router.push({
        name: item.name
      })
      this.$store.commit('selectTab', item)
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  mounted() {
    getAside().then(res => {
      this.menu = res.result
    })
  },
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100%;
  border: none;
}

.el-menu h3 {
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
}
</style>
