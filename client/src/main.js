import Vue from 'vue'
import App from './App.vue'

import NodePlugin from './plugins/node_plugin'
import router from './router'

Vue.use(NodePlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
