/*
 * @Date: 2020-07-09 15:10:23
 * @LastEditTime: 2020-11-02 17:03:11
 * @FilePath: /myVue3/src/main.ts
 * @Author: twy
 * @LastEditors: twy
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

createApp(App).use(router).mount('#app');