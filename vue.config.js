module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    proxy: "http://localhost:8000",
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
  },
};
