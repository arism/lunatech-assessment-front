<template>
  <canvas @click="onClick" id="myChart"></canvas>
</template>
<script>
import Chart from 'chart.js'
export default {
  props: ['chartData'],
  data(){
    return {
      chart: null
    }
  },
  mounted(){
  },
  watch: {
    chartData(data){
      if(data){
        if(this.chart) {
          this.chart.destroy()
        }
        this.chart = new Chart(this.$el.getContext("2d"),{type: 'bar', data})
        this.chart
      }
    }
  },
  methods: {
    onClick(e){
      if(this.chart){
         let activePoints = this.chart.getElementsAtEvent(e)
         if(activePoints.length){
           this.$emit("chartSelect", activePoints[0]['_index'])
         }
      }
    }
  }
}
</script>

<style>
canvas {
  cursor: pointer;
}
</style>

