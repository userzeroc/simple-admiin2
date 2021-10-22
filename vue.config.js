'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    // 代理axios
    proxy: 'http://localhost',
    // vue自己启动的端口
    port: 9001
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: '一个极其简陋的项目',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
