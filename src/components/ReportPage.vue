<template>
  <div>
    <table>
      <tr>
        <td>
          <Toggle @toggle="refreshChart"></Toggle>
          <div class="chart-container" style="position: relative; width:850px;">
            <Chart :chartData="chartData" @chartSelect="onChartSelect"></Chart>
            <div class="ui yellow message">Please click on the chart Bar to show more details</div>
          </div>
        </td>
        <td  class="ui">
          <h4>Top 10 most common runway identifications</h4>
          <ul v-for="ident in top10RunwaysIdent">
            <li>{{ident}}</li>
          </ul>
        </td>
      </tr>
    </table>
    <Modal :modalData="modalData"></Modal>
  </div>
</template>
<script>
import axios from 'axios'
import Chart from './Chart'
import Toggle from './Toggle'
import Modal from './Modal'
export default {
  components: {
    Chart,
    Toggle,
    Modal
  },
  data() {
    return {
      chartData: {},
      modalData: {},
      top10RunwaysIdent: []
    }
  },
  mounted() {
    this.refreshChart("1")
    this.showTop10RunwaysIdent()
  },
  methods: {
    refreshChart(desc) {
      axios.get('/api/reports/airportsPerCountry?desc=' + desc).then(response => {
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
    onChartSelect(idx) {
      if (this.chartData.runwaysType && this.chartData.runwaysType.length) {
        this.modalData = {
          country: this.chartData.labels[idx],
          runwaysType: this.chartData.runwaysType[idx]
        }
        setTimeout(() => {
          $('.ui.modal').modal("show")
        }, 100)
      }
    },
    showTop10RunwaysIdent(){
      axios.get('/api/reports/top10RunwaysIdent').then(response => {
        this.top10RunwaysIdent = response.data
      })
    }
  }
}
</script>


