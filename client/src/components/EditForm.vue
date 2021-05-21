<template>
    <div id="create" class="mx-auto mt-8 w-1/2">
        <h1 class="text-3xl text-center pt-4">Update service</h1>
        <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage" />

        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="updateService()" v-if="!isLoading">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text" placeholder="Email" v-model="service.email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="pcPart">
                    PC part
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="pcPart" type="text" placeholder="PC part" v-model="service.service_part">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="desc">
                    Description
                </label>
                <textarea class="border rounded-md resize-none" cols="108" rows="5"
                    v-model="service.description"></textarea>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="daysFix">
                    Price
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="price" type="number" placeholder="Price" v-model="service.price">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
                    Days to fix
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="daysFix" type="number" placeholder="Days to fix" v-model="service.days_to_fix">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
                    Status
                </label>
                <select
                    class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                    placeholder="Choose status" v-model="service.status">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In progress</option>
                    <option value="Finished">Finished</option>
                </select>
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-purple-500 hover:bg-purple-700 duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Submit
                </button>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
        </p>
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

        beforeCreate() {
            this.fetchSingleService()
        },

        methods: {
            async fetchSingleService() {
                this.service = await Service.getSingleService(this.$route.params.id)
                this.isLoading = false
            },

            async updateService() {
                await Service.updateService(this.$route.params.id, this.service)
            }
        },
    }
</script>