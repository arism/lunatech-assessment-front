<template>
  <div>
    <CountrySearch @selected="countrySelected"></CountrySearch>
    <CountryDetail :countryItem="countryItem"></CountryDetail>
  </div>
</template>
<script>
import CountrySearch from './CountrySearch'
import CountryDetail from './CountryDetail'
export default {
  components: {
    CountrySearch,
    CountryDetail
  },
  data () {
    return {
      countryItem: null,
    }
  },
  methods: {
    countrySelected (item) {
      this.countryItem = item
    }
  }
}
</script>
