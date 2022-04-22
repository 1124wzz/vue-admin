<template>
  <div id="app">
    <router-view v-if="isShow"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isShow: true
    };
  },
  components: {
  },
  methods: {
    reload() {
      this.isShow = false
      this.$nextTick(function () {
        this.isShow = true
      })
    }
  }
};
</script>-

<style>
  body, html {
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100vh;
  }
</style>
