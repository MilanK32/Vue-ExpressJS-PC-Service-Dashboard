<template>
    <div id="home" class="w-full mt-8">
        <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage" />
        <h1 class="text-3xl text-center pt-4">Service List</h1>
        <div class="flex flex-wrap">
            <div class="min-h-30 w-2/6 p-6" v-for="(service, index) in services" :key="index">
                <div class="md:grid md:grid-cols-1 md:gap-4 space-y-4 md:space-y-0 mt-4">
                    <div class="shadow border rounded-lg">
                        <div class="flex items-center space-x-4 p-4">
                            <div class="flex items-center p-4 bg-purple-600 text-white rounded-lg w-1/6">
                                <img src="https://image.flaticon.com/icons/png/128/3039/3039498.png" alt="settings">
                            </div>
                            <div class="flex-1">
                                <p class="text-gray-500 font-semibold">Service info</p>
                                <div class="flex items-baseline space-x-4">
                                    <h2 class="text-2xl font-semibold">
                                        {{ service.service_part }}
                                    </h2>
                                    <p class="text-green-700 flex font-semibold space-x-1">
                                        <span>-</span>
                                        <span class="font-bold pl-1">{{ service.days_to_fix }} days left</span>
                                    </p>
                                </div>
                                <p class="text-gray-600">{{ service.description }}</p>
                            </div>
                        </div>
                        <router-link :to="'/services/' + service._id"
                            class="block p-3 text-lg font-semibold bg-purple-50 text-purple-800 hover:bg-purple-100 cursor-pointer">
                            Details
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Service from '../Service'

    export default {
        data() {
            return {
                services: [],
                isLoading: true,
                fullPage: true
            }
        },

        created() {
            this.fetchServices()
        },

        methods: {
            async fetchServices() {
                this.services = await Service.getServices()
                this.isLoading = false
            }
        },
    }
</script>