/*
 * @Date: 2020-07-09 15:10:23
 * @LastEditTime: 2020-12-29 00:05:08
 * @FilePath: /TVue3-master/src/main.ts
 * @Author: twy
 * @LastEditors: twy
 */
import ElementPlus from "element-plus";
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

createApp(App).use(router).use(ElementPlus).mount('#app');