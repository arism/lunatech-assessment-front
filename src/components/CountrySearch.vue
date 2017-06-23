<template>
<div class="ui vertical menu" style="width: 300px">
  <div class="item">
    <div class="ui transparent icon input">
      <input type="text" placeholder="Country ..." v-model="country">
      <i class="search icon"></i>
    </div>
  </div>
  <a v-for="item in items"  @click="click(item)" class="teal item">
    <i :class="[item.class]"></i>{{item.name}}
  </a>
</div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default {
  data () {
    return {
      country: '',
      items: []
    }
  },
  mounted () {
    $('.ui.dropdown').dropdown()
  },
  watch: {
    country (val) {
      if(val && val.length > 1) {
        if(this.expire) clearTimeout(this.expire)
        this.expire = setTimeout(() => {
          axios.get('/api/countries/' + val ).then(response => {
            if(response.data) {
              this.items = _.values(response.data).map(c => {
                return {
                  name: c.name,
                  code: c.code,
                  class: c.code.toLowerCase() + ' flag'
                }
              })
            }
          })
        },300)
      }
    }
  },
  methods: {
    click(item) {
      this.country = ''
      this.items = []
      this.$emit('selected', item)
    }
  }
}
</script>
