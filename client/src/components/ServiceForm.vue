<template>
    <div id="create" class="mx-auto mt-8 w-1/2">
        <h1 class="text-3xl text-center pt-4">Create service</h1>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="sendData()">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text" placeholder="Email" v-model="email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="pcPart">
                    PC part
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="pcPart" type="text" placeholder="PC part" v-model="pcPart">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="desc">
                    Description
                </label>
                <textarea class="border rounded-md resize-none" cols="108" rows="5" v-model="description"></textarea>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
                    Price
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="price" type="number" placeholder="Price" v-model="price">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="daysFix">
                    Days to fix
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="daysFix" type="number" placeholder="Days to fix" v-model="daysToFix">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
                    Status
                </label>
                <select
                    class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                    placeholder="Choose status" v-model="status">
                    <option value="" disabled selected>Select status...</option>
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
                email: '',
                pcPart: '',
                description: '',
                price: 0,
                daysToFix: 0,
                status: ''
            }
        },

        methods: {
            async sendData() {
                let data = {
                    email: this.email,
                    service_part: this.pcPart,
                    description: this.description,
                    price: this.price,
                    days_to_fix: this.daysToFix,
                    status: this.status
                }

                await Service.createService(data)
            }
        },
    }
</script>