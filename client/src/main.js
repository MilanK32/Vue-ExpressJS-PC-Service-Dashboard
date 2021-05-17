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
import './PartService'

//css
import "tailwindcss/tailwind.css"
import './css/app.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
