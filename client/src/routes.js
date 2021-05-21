import home from './components/Home.vue'
import services from './components/Services.vue'
import serviceForm from './components/ServiceForm.vue'
import serviceDetails from './components/ServiceDetails.vue'
import editForm from './components/EditForm.vue'

export default [
    { path: '/', component: home },
    { path: '/services', component: services },
    { path: '/services/:id', component: serviceDetails},
    { path: '/create', component: serviceForm },
    { path: '/services/:id/edit', component: editForm}
]