/*
 * 这个文件用于在ts文件中导入.vue文件不报错
 * @Date: 2020-11-02 17:00:13
 * @LastEditTime: 2020-11-02 17:06:02
 * @FilePath: /myVue3/shim.d.ts
 * @Author: twy
 * @LastEditors: twy
 */
declare module "*.vue" {
  import { Component } from 'vue';
  const component: Component;
  export default component
}