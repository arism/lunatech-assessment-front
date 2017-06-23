import '../node_modules/semantic-ui-css/semantic.min.css'
import semantic from 'semantic'

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

