import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/Login/login.vue'
import trails from '../views/Trails/trails.vue'
import novice from '../views/Trails/novice.vue'
import intermediate from '../views/Trails/intermediate.vue'
import advanced from '../views/Trails/advanced.vue'
import indices from '../views/Indices/indices.vue'
import calculator from '../views/Calculator/calculator.vue'
import charts from '../views/Charts/charts.vue'
import news from '../views/News/news.vue'
import wallet from '../views/Wallet/wallet.vue'

import intro from '../views/Trails/components/introduction.vue'
import cdb from '../views/Trails/components/cdb.vue'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/trilhas', name: 'trails', component: trails },
    { path: '/trilhas/iniciante', name: 'novice', component: novice },
    { path: '/trilhas/iniciante/introducao', name: 'intro', component: intro },
    { path: '/trilhas/intermediario', name: 'intermediate', component: intermediate },
    { path: '/trilhas/intermediario/cdb', name: 'cdb', component: cdb },
    { path: '/trilhas/avancado', name: 'advanced', component: advanced },
    { path: '', name: 'trailsDefault', component: trails },
    { path: '/indices', name: 'indices', component: indices },
    { path: '/calculadora', name: 'calculator', component: calculator },
    { path: '/graficos', name: 'charts', component: charts },
    { path: '/noticias', name: 'news', component: news },
    { path: '/carteira', name: 'wallet', component: wallet },
    { path: '/login', name: 'login', component: login },
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})