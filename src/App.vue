<template>
  <div style="padding: 14px;">
    <div class="ui two item menu">
      <a :class="{item : true , active : active == 'query'}" @click="active='query'" >Query</a>
      <a :class="{item : true , active : active == 'report'}" @click="active='report'" >Report</a>
    </div>
    <QueryPage v-if="active == 'query'"></QueryPage>
    <ReportPage v-if="active == 'report'"></ReportPage>
  </div>
</template>
<script>
import QueryPage from './components/QueryPage'
import ReportPage from './components/ReportPage'
export default {
  components: {
    QueryPage,
    ReportPage
  },
  data(){
    return {
      active: 'query'
    }
  }
}
</script>
