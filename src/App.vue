<template>
  <div style="padding: 14px;">
    <CountrySearch @selected="countrySelected"></CountrySearch>
    <CountryDetail :countryItem="countryItem"></CountryDetail>
  </div>
</template>
<script>
import CountrySearch from './components/CountrySearch'
import CountryDetail from './components/CountryDetail'
export default {
  components: {
    CountrySearch,
    CountryDetail
  },
  data () {
    return {
      countryItem: null
    }
  },
  methods: {
    countrySelected (item) {
      this.countryItem = item
    }
  }
}
</script>
