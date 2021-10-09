'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
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
