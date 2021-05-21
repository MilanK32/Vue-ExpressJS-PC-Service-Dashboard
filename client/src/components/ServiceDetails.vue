<template>
    <div id="serviceDetails" class="w-2/5 mx-auto">
        <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage" />

        <div class="mt-16 px-4" v-if="!isLoading">
            <div class="max-w-4xl bg-white w-full rounded-lg shadow-lg">
                <div class="p-4 border-b">
                    <h2 class="text-2xl ">
                        Service Information
                    </h2>
                    <p class="text-sm text-gray-500">
                        Personal details.
                    </p>
                </div>
                <div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Email
                        </p>
                        <p>
                            {{ service.email }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Date of submission
                        </p>
                        <p>
                            {{ dateFormat(service.createdAt) }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            PC part
                        </p>
                        <p>
                            {{ service.service_part }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Description
                        </p>
                        <p>
                            {{ service.description }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Price
                        </p>
                        <p>
                            {{ service.price }} RSD
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Days to fix
                        </p>
                        <p>
                            {{ service.days_to_fix }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                        <p class="text-gray-600">
                            Status
                        </p>
                        <p>{{ service.status }}</p>
                    </div>
                </div>
            </div>
            <div class="delete-btn text-center flex justify-center mt-10">
                <router-link :to="'/services/' + service._id + '/edit'"
                    class="bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 text-white font-bold py-2 px-4 mr-3 rounded w-1/3"
                    @click="updateService()" v-if="service">
                    Update
                </router-link>
                <button
                    class="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-bold py-2 px-4 rounded w-1/3"
                    @click="deleteService()">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Service from '../Service'

    export default {
        data() {
            return {
                service: null,
                isLoading: true,
                fullPage: true
            }
        },

        created() {
            this.fetchSingleService()
        },

        methods: {
            async fetchSingleService() {
                this.service = await Service.getSingleService(this.$route.params.id)
                this.isLoading = false;
                this.dateFormat(this.service.createdAt)
            },

            async deleteService() {
                await Service.deleteservice(this.$route.params.id)
            },

            dateFormat(date) {
                let fullDate = new Date(date)
                let day = fullDate.getDate()
                let month = fullDate.getMonth() + 1
                let year = fullDate.getFullYear()

                if (day < 10) {
                    day = `0${day}`
                }

                if (month < 10) {
                    month = `0${month}`
                }

                return `${day}.${month}.${year}`
            }
        },
    }
</script>