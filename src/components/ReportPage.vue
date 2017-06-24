<template>
  <div>
    <Toggle @toggle="refreshChart"></Toggle>
    <div class="chart-container" style="position: relative; width:850px;">
        <Chart :chartData="chartData" @chartSelect="onChartSelect"></Chart>
        <div class="ui yellow message">Please click on the chart Bar to show more details</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Chart from './Chart'
import Toggle from './Toggle'
export default {
  components: {
    Chart,
    Toggle
  },
  data() {
    return {
      chartData: {}
    }
  },
  mounted(){
    this.refreshChart("1")
  },
  methods: {
    refreshChart(desc) {
      axios.get('/api/reports/airportsPerCountry?desc='+desc).then(response => {
      this.chartData = {
        labels: response.data.map(c => c.country.name),
        datasets: [
          {
            label: 'Airports Per Country',
            backgroundColor: '#17caf0',
            data: response.data.map(c => c.airportsCount)
          }
        ],
        runwaysType: response.data.map(c => c.runwaysType)
      }
    })
    },
    onChartSelect(idx){
      if(this.chartData.runwaysType && this.chartData.runwaysType.length ){
        console.log(this.chartData.runwaysType[idx])
      }
    }
  }
}
</script>


