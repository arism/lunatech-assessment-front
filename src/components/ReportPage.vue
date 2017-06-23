<script>
import {Bar} from 'vue-chartjs'
import axios from 'axios'
export default Bar.extend({
  mounted () {
    axios.get('/api/reports/airportsPerCountry' ).then(response => {
      let datacollection = {
        labels: response.data.map(c => c.country.name),
        datasets: [
          {
            label: 'Airports Per Country',
            backgroundColor: '#17caf0',
            data: response.data.map(c => c.airportsCount)
          }
        ]
      }
       this.renderChart(datacollection, {responsive: true, maintainAspectRatio: false})
    })

  }
})
</script>
