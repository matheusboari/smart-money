import Vue from 'vue'
import App from './App.vue'

import NodePlugin from './plugins/node_plugin'
import VueSweetalert2 from 'vue-sweetalert2'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/pt-br'
import router from './router'

Vue.use(NodePlugin)
Vue.use(VueSweetalert2)
Vue.use(ElementUI, { locale })

Vue.prototype.$eventBus = new Vue()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
