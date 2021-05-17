import home from './components/Home.vue'
import analytics from './components/Analytics.vue'
import serviceForm from './components/ServiceForm.vue'
import partDetails from './components/PartDetails.vue'
import editForm from './components/EditForm.vue'

export default [
    { path: '/', component: home },
    { path: '/services/:id', component: partDetails},
    { path: '/analytics', component: analytics },
    { path: '/create', component: serviceForm },
    { path: '/services/:id/edit', component: editForm}
]