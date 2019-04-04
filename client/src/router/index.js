import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/Login/login.vue'
import trails from '../views/Trails/trails.vue'
import indices from '../views/Indices/indices.vue'
import calculator from '../views/Calculator/calculator.vue'
import charts from '../views/Charts/charts.vue'
import news from '../views/News/news.vue'
import profile from '../views/Profile/profile.vue'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/trilhas', name: 'trails', component: trails },
    { path: '', name: 'trails', component: trails },
    { path: '/indices', name: 'indices', component: indices },
    { path: '/calculadora', name: 'calculator', component: calculator },
    { path: '/graficos', name: 'charts', component: charts },
    { path: '/noticias', name: 'news', component: news },
    { path: '/perfil', name: 'profile', component: profile },
    { path: '/login', name: 'login', component: login },
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})