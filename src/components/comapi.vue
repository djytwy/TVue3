<!--
 * @Date: 2020-09-09 11:11:22
 * @LastEditTime: 2020-11-02 16:39:49
 * @FilePath: /myVue3/src/components/comapi.vue
 * @Author: twy
 * @LastEditors: twy
-->
<template>
  <div>
    <h1>这个页面使用compositionAPI</h1>
    <h2>counter: {{ data.testData.val }}</h2>
    <h2>counter的计算属性：{{ data.computedData }}</h2>
    <h2>ref: {{ time }}</h2>
    <button @click="add">+</button>
  </div>
</template>

<script>
import { reactive,ref,computed,toRef, watchEffect, isRef } from "vue";
import { watch } from 'vue';
export default {
  name: 'comAPI',
  setup () {
    const data = reactive({
      testData: { val: 1 },
      computedData: computed(() => {
        return data.testData.val * 2
      })
    })

    const time = ref(0)
    
    setInterval(() => {
      time.value = Date.now()
    }, 1000)

    watch(
      time,
      (val, prev) => {
        console.log(time)
        console.log(time.value)
        console.log(isRef(time))
      }
    )

    watch(
      data.testData,
      (val, prev) => {
        console.log()
      }
    )

    function add() {
      data.testData.val ++
    }

    watchEffect(() => {
      console.log(`watchEffect!`)
    })

    return {
      data,
      time,
      add
    }
  }
}
</script>

<style>

</style>