import axios from 'axios'
import { Message, Loading } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL:
    'https://www.fastmock.site/mock/5b62eb23c15f78f7243ba56e2cb57aaf/test-adm',
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    //   请求发送前配置token
    config.headers['X-Token'] = 'token'
    Loading.service()
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === -1) {
      Loading.service().close()
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      Loading.service().close()
      return res
    }
  },
  error => {
    console.log(error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
