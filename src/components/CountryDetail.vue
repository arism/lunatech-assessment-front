<template>
<div v-if="country" style="width:50%;">
  <div class="header">
      <i :class="[countryItem.class]"></i>
      <a  target="_blank" :href="country.country.wikipediaLink">{{country.country.name}}</a>
      &nbsp;
      <span class="ui yellow label">{{country.country.code}}</span>
      <span class="ui red label">{{contientMap[country.country.continent]}}</span>
      <span class="ui blue label">{{country.airports.length}} Airports</span>
      <span class="ui green label">{{country.airports.map(a=>a.runways ? a.runways.length : 0).reduce((pv, cv) => pv+cv, 0)}} Runways</span>
    </div>
  <table class="ui celled structured striped table">
  <thead>
    <tr>
      <th rowspan="2" style="text-align:center">Airports</th>
      <th colspan="3" style="text-align:center">Runways</th>
    </tr>
    <tr>
      <th style="width:80px">Id</th>
      <th style="width:80px">Surface</th>
      <th style="width:80px">leIdent</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="a in country.airports" >
      <td>{{a.airport.name}}</td>
      <td style="padding:0" colspan="3">
        <table>
          <tr v-for="r in a.runways">
            <td style="border:none;width:80px">{{r.id}}</td>
            <td style="border:none;width:80px">{{r.surface}}</td>
            <td style="border:none;width:80px">{{r.leIdent}}</td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['countryItem'],
  data () {
    return {
      country: null,
      contientMap: {
        AF: 'Africa',
        EU: 'Europe',
        AS: 'Asia',
        NA: 'North America',
        SA: 'South America',
        OC: 'Australia',
        AN: 'AN'
      }
    }
  },
  watch: {
    countryItem(val) {
      if(val){
        axios.get('/api/countries/' + val.code +'/airports' ).then(response => {
          this.country = response.data
        })
      }
    }
  }
}
</script>

