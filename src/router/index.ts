/*
 * @Date: 2020-11-02 15:53:09
 * @LastEditTime: 2020-12-29 00:00:38
 * @FilePath: /TVue3-master/src/router/index.ts
 * @Author: twy
 * @LastEditors: twy
 */
import { RouteRecordRaw ,createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'home',
  component: () => import('../views/home.vue')
},{
  path: '/testPage',
  name: 'testPage',
  component: () => import('../views/testPage.vue')
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
