import Vue from 'vue'
import App from './App.vue'

//vue-router
import Routes from './routes'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    }
})

//api
import './Service'

//css
import "tailwindcss/tailwind.css"
import './css/app.css'

// loader
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading', Loading);

// charts
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app')