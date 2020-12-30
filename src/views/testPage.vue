<!--
 * @Date: 2020-07-09 15:10:23
 * @LastEditTime: 2020-12-30 16:56:10
 * @FilePath: /TVue3-master/src/views/testPage.vue
 * @Author: twy
 * @LastEditors: twy
-->
<template>
  <button @click="test">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
  <br />
  <div>
    {{ count }} : {{ double }}
  </div>
  <button @click="increment">+1</button>
</template>

<script>
import { reactive, computed } from "vue";
import comApi from "../components/comapi.vue";
import noComApi from "../components/noComApi.vue";
// compositionAPI的逻辑
import comApiL from "../logic/comApi.ts";

export default {
  name: 'App',
  components: {
    comApi,
    noComApi
  },
  setup () {
    const state = reactive({
      // 启用web worker(打包为生产环境的注意静态资源路径问题)
      worker: new Worker('./testWasm.js'),
      count: 0,
      double: computed(() => state.count * 2)
    })

    function test() {
      state.count ++
    }

    let { count, double, increment } = comApiL()

    return {
      state,
      increment,
      count,
      double,
      test
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
