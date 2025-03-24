const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port: 3000, // 指定端口为3000
    open: true  // 可选：自动打开浏览器
  }
};