<template>
  <div>
    <h1>基本测试，这个页面不使用composition-API</h1>
    <h2>counter: {{ testData }}</h2>
    <h2>counter的计算属性：{{ computedData }}</h2>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'testPage1',
  data() {
    return {
      testData: 0
    }
  },
  computed: {
    computedData () {
      return this.testData * 2
    }
  },
  methods: {
    add () {
      this.testData ++
    }
  }
}
</script>

<style>

</style>