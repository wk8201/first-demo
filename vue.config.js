const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/first-demo/'  // 替换为您的仓库名
    : '/'
}
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port: 3000, // 指定端口为3000
    open: true  // 可选：自动打开浏览器
  }
};