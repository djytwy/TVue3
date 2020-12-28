/*
 * @Date: 2020-09-25 10:41:50
 * @LastEditTime: 2020-09-25 11:51:41
 * @FilePath: /centralAirConditionerWeb/src/utils/permission.js
 * @Author: twy
 * @LastEditors: twy
 */
/* 
	权限模块
	2020-2-14 田文杨
*/
import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import { checkLogin, getRedictUrl } from '../api/user'

const whiteList = [] // 白名单列表（为变更做准备）

if (process.env.NODE_ENV === "development") {
  router.beforeEach((to, from, next) => {
    if (to.path === '/background') {
      next('/background/home')
    } else {
      next()
    }
  })
} else {
  router.beforeEach( async (to, from, next) => {
    let token = store.getters["project/token"] ? store.getters["project/token"] : to.query["token"],
      projectId = store.getters["project/projectId"] ? store.getters["project/projectId"] : to.query["projectId"]
    // 本地存储的token、projectId和带过来的token、projectId不一致的时候以带过来的为准
    if (store.getters["project/token"] !== to.query["token"] && to.query["token"]) {
      token = to.query["token"]
      store.commit('project/SET_TOKEN', token)
    }
    if (!store.getters['project/redictUrl'] || !store.getters['project/redictUrl'].includes("http")) {
      let _redictUrl = await getRedictUrl()
      _redictUrl = _redictUrl.pop()["dictName"]
      store.commit('project/REDICT_URL', _redictUrl)
    }
    if (store.getters["project/projectId"] !== to.query["projectId"] && to.query["projectId"]) {
      projectId = to.query["projectId"]
      store.commit('project/SetProjectId', projectId)
    }
    if (token && projectId) {
      const _flag = await checkLogin({token: token})
      if (!_flag) {
        // token校验失败，没有登录则跳转到登录页
        window.location.href = store.getters["project/redictUrl"] 
        return ""
      } 
      if (to.path === "/" && to.fullPath !== "/") {
        next('/')
      } else if(to.fullPath.includes('token')) {
        next('/background/home')
      } else {
        next()
      }
    } else {
      Message({
        type:'error',
        message: '请先进行登录',
        duration: 2000
      })
      // 没有token和projectID则跳转到登录页
      window.location.href = store.getters["project/redictUrl"] 
    }
  })
}
