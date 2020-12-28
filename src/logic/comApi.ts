/*
 * @Date: 2020-09-23 10:26:45
 * @LastEditTime: 2020-09-23 10:50:24
 * @FilePath: /myVue3/src/logic/comApi.js
 * @Author: twy
 * @LastEditors: twy
 */
import { ref, computed, watch } from "vue";
function comApi () {

  let count = ref(0)
  let double = computed(() => count.value * 2)
  function increment() {
    count.value ++
  }
  watch(count, (nv,ov) => {
    console.log(`the new value is ${count.value}`)
  })
  return {
    count,
    double,
    increment
  }
}
export default comApi