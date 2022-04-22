module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://localhost:5000/api/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
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
