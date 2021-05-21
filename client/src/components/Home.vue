<template>
    <div id="home" class="mx-auto mt-8">
        <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage" />
        <div class="flex flex-col bg-white m-auto p-auto mx-8" v-if="!isLoading">
            <h1 class="text-3xl text-center p-4 mb-14">Analytics</h1>
            <div class="flex pb-10 hide-scroll-bar">
                <div class="grid grid-cols-2 gap-8">
                    <div class="inline-block">
                        <h5 class="text-xl text-gray-400 pb-4">Service parts/price</h5>
                        <apexchart width="700" type="bar" :options="linechart" :series="lineSeries" class="z-0">
                        </apexchart>
                    </div>

                    <div class="inline-block">
                        <h5 class="text-xl text-gray-400 pb-4">Status/days left</h5>
                        <apexchart width="700" type="area" :options="barchart" :series="barSeries" class="z-0">
                        </apexchart>
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
                fullPage: true,
                partTypes: [],
                linechart: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: []
                    },
                    colors:['#7c3aed']
                },
                barchart: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: []
                    },
                },
                lineSeries: [{
                    name: 'Service price',
                    data: []
                }],
                barSeries: [{
                    name: 'series-2',
                    data: []
                }]
            }
        },

        created() {
            this.getServices()
        },

        methods: {
            async getServices() {
                this.services = await Service.getServices();

                this.services.forEach((service) => {
                    this.linechart.xaxis.categories.push(service.service_part)
                    this.lineSeries[0].data.push(service.price)
                    
                    this.barchart.xaxis.categories.push(service.service_part)
                    this.barSeries[0].data.push(service.days_to_fix)
                })
                this.isLoading = false
            }
        }
    }
</script>