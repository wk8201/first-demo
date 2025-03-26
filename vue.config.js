const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: '/first-demo/',  // 必须与仓库名完全一致
  devServer: {
    port: 3000, // 指定端口为3000
    open: true  // 可选：自动打开浏览器
  }
};