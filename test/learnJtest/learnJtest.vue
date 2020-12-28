<!--
 * @Date: 2020-09-11 15:53:40
 * @LastEditTime: 2020-09-17 17:31:53
 * @FilePath: /myVue3/test/learnJtest/learnJtest.vue
 * @Author: twy
 * @LastEditors: twy
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ tMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    tMsg: {
      type: String,
      defalut: ""
    }
  },
  data() {
    return {
      msg: 'Hello Jest',
    };
  },
};
</script>