import Vue from 'vue'
import App from './App.vue'

import NodePlugin from './plugins/node_plugin'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/pt-br'
import router from './router'

Vue.use(NodePlugin)
Vue.use(BootstrapVue)
Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
