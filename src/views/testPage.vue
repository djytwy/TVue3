<!--
 * @Date: 2020-07-09 15:10:23
 * @LastEditTime: 2020-11-02 16:37:13
 * @FilePath: /myVue3/src/views/testPage.vue
 * @Author: twy
 * @LastEditors: twy
-->
<template>
  <com1 />
  <button @click="test">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
  <br />
  <ts-com1 :obj="{mytype:'twy'}">rrr</ts-com1>
  <ts-com-2 :name2="'my'" :nameShow="'test'"/>
  <div class="tscss">12312</div>
  <ts-com-2 :name2="'yu'" :nameShow="'jk'" />
  <ts-com-3 :name2="'xiong'" :name2Show="'jk'" />
  <com-api />
  <no-com-api />
  <div>
    {{ count }} : {{ double }}
  </div>
  <button @click="increment">+1</button>
</template>

<script>
import { reactive, computed } from "vue";
import com1 from "../components/component1.vue";
import tsCom1 from "../components/com1";
import tsCom2 from "../components/com2";
import tsCom3 from "../components/com3";
import comApi from "../components/comapi.vue";
import noComApi from "../components/noComApi.vue";
// compositionAPI的逻辑
import comApiL from "../logic/comApi.ts";

export default {
  name: 'App',
  components: {
    com1,
    tsCom1,
    tsCom2,
    tsCom3,
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
.tscss {
  color: red;
  font-size: 28px;
  margin: 20px 0px;
}
</style>
