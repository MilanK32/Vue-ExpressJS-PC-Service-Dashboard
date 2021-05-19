<template>
    <div id="partDetails" class="w-2/5 mx-auto">
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
                            {{ part.email }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Date of submission
                        </p>
                        <p>
                            {{ dateFormat(part.createdAt) }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            PC Part
                        </p>
                        <p>
                            {{ part.part_type }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Description
                        </p>
                        <p>
                            {{ part.description }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Price
                        </p>
                        <p>
                            {{ part.price }} RSD
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                        <p class="text-gray-600">
                            Days to fix
                        </p>
                        <p>
                            {{ part.days_to_fix }}
                        </p>
                    </div>
                    <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                        <p class="text-gray-600">
                            Status
                        </p>
                        <p>{{ part.status }}</p>
                    </div>
                </div>
            </div>
            <div class="delete-btn text-center flex justify-center mt-10">
                <router-link :to="'/services/' + part._id + '/edit'"
                    class="bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 text-white font-bold py-2 px-4 mr-3 rounded w-1/3"
                    @click="updatePart()" v-if="part">
                    Update
                </router-link>
                <button
                    class="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-bold py-2 px-4 rounded w-1/3"
                    @click="deletePart()">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import PartService from '../PartService'

    export default {
        data() {
            return {
                part: null,
                isLoading: true,
                fullPage: true
            }
        },

        created() {
            this.fetchSinglePart()
        },

        methods: {
            async fetchSinglePart() {
                this.part = await PartService.getSinglePart(this.$route.params.id)
                this.isLoading = false;
                this.dateFormat(this.part.createdAt)
            },

            async deletePart() {
                await PartService.deletePart(this.$route.params.id)
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