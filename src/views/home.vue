<!--
 * @Date: 2020-11-02 16:44:50
 * @LastEditTime: 2020-12-30 17:15:38
 * @FilePath: /TVue3-master/src/views/home.vue
 * @Author: twy
 * @LastEditors: twy
-->
<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
  <router-link to="/testPage">wasm、composition测试</router-link>
  <div id="myChart" style="width:300px;height:200px;"></div>
  <tsx-com tsxName="来自TSX的写法！" tsxShow="组件可以使用智能提醒！" />
  <br />
</template>

<script>
import tsxCom from "../components/tsxCom";
export default {
  mounted() {
    this.drawLine()
  },
  components: {
    tsxCom
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'vue3使用echarts（CDN方式）' },
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<style>

</style>