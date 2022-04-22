<template>
  <el-menu :default-active="'/home'" router
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
    <h3>{{ isCollapse? 'OPPO' : 'OPPO管理系统' }}</h3>
    <router-link to="/home">
			<el-menu-item index="home">
			  <i class="el-icon-s-home"></i>
			  <span slot="title">首页</span>
			</el-menu-item>
		</router-link>
		<router-link to="/user">
			<el-menu-item index="user">
			  <i class="el-icon-user"></i>
			  <span slot="title">用户管理</span>
			</el-menu-item>
		</router-link>
		<router-link to="/mall">
			<el-menu-item index="mall">
			  <i class="el-icon-video-play"></i>
			  <span slot="title">商品管理</span>
			</el-menu-item>
		</router-link>
			<el-submenu index="other" >
			  <template slot="title">
			    <i class="el-icon-location"></i>
			    <span slot="title">其他</span>
			  </template>
			  <el-menu-item-group>
			    <router-link to="/page1">
						<el-menu-item index="page1" class="el-icon-setting">页面1</el-menu-item>
					</router-link>
			    <router-link to="/page2">
						<el-menu-item index="page1" class="el-icon-setting">页面2</el-menu-item>
					</router-link>
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
      this.menu = res
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
