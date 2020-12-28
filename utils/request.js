/* 
  发起请求的request基类
  2020-2-14 田文杨
*/
import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import store from '@/store'
import { baseURL } from '../config'

// create an axios instance
const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 全局添加projectId
    if(config.method === 'GET' || config.method === 'get') {
      config.params = {
        ...config.params,
        // projectId: store.getters['project/projectId'] && store.getters['project/projectId'] !== "null" ? store.getters['project/projectId'] : 1
      }
    } else if (config.method === "POST" || config.method === "post") {
      config.data = {
        ...config.data,
        // projectId: store.getters['project/projectId'] && store.getters['project/projectId'] !== "null" ? store.getters['project/projectId'] : 1
      }
    }
    // do something before request is sent
    config.headers['Authorization'] = store.getters['project/token'] && store.getters['project/token'] !== "null" ? store.getters['project/token'] : ""
    return config
  },
  error => {
    // do something with request error
    console.log(error, 'err') // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (response.status !== 200) {
      Message({
        type: 'error',
        message: `响应失败：${res.code || response.status}`,
        duration: '2000'
      })
      return Promise.reject(new Error(res.message || '网络错误,请稍后重试'))
    } else {
      // token 失效
      if (res.code === 4003) {
        MessageBox.confirm('您已被登出，可以取消继续留在该页面，或者重新登录。', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/logout').then(() => {
            location.reload() // 重新实例化vue-router对象 避免bug
          })
        }).catch(err => console.log(err))
      } else if (res.code !== 2000) {
        Message({
          type:"error",
          message: `错误：${res.error}`,
          duration: '2000'
        })
      } else {
        return res.datas
      }
    }
  },
  error => {
    console.log('请求 err:' + error) // for debug
    Message({
      type: 'error',
      message: '网络错误,请稍后重试',
      duration: '2000'
    })
    return Promise.reject(error)
  }
)

export default service
