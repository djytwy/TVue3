<!--
 * @Date: 2020-11-02 16:21:31
 * @LastEditTime: 2020-11-03 14:05:55
 * @FilePath: /myVue3/src/views/g6.vue
 * @Author: twy
 * @LastEditors: twy
-->
<template>
  <div>G6</div>
  <div id="container"></div>
  <div id="myChart" style="display:none;width:300px;height:200px;"></div>
</template>

<script>
import echarts from 'echarts'
const data = {
  nodes: [
    {
      id: "node1",
      label: "Circle1",
      x: 150,
      y: 150
    },
    {
      id: "node2",
      label: "Circle2",
      x: 400,
      y: 150
    }
  ],
  edges: [
    {
      source: "node1",
      target: "node2"
    }
  ]
};
export default {
  name: 'G6',
  mounted () {
    this.initGraph()
    this.drawLine()
  },
  methods: {
    initGraph () {
      const graph = new G6.Graph({
        container: 'container',
        width: 800,
        height: 500,
        linkCenter: true,
        modes: {
          default: ['create-edge']
        },
        defaultEdge: {
          type: 'quadratic',
          style: {
            stroke: '#F6BD16',
            lineWidth: 2
          }
        }
      })
      graph.data(data)
      graph.render()

      graph.on('aftercreateedge', e => {
        const edges = graph.save().edges;
        G6.Util.processParallelEdges(edges);
        graph.getEdges().forEach((edge, i) => {
          graph.updateItem(edge, edges[i])
        })
      })
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
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