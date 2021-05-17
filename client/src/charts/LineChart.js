import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    data: () => ({
        chartdata: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                    label: 'Data One',
                    backgroundColor: 'rgba(237, 42, 42, 0.4)',
                    data: [40, 20, 31, 57, 78, 45, 87]
                },
                {
                    label: 'Data Two',
                    backgroundColor: 'rgba(42, 140, 237, 0.4)',
                    data: [80, 12, 27, 39, 60, 69, 43]
                }
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                labels: {
                    fontColor: '#E3E3E3'
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#E3E3E3'
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#E3E3E3',
                    }
                }]
            }
        }
    }),

    mounted() {
        this.renderChart(this.chartdata, this.options, {
            responsive: true
        })
    }
}