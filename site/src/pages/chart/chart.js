
function callback() {
    data()
    initChart()
    setInterval(this.updateChart, 1000);

}
function data()
{
    return {
        search: 'chart',
        perPage: 10,
        perPages: [5, 10, 15, 20],
        chart: {},
        labels: [],
        stars: [],
        chartType: 'bar',
        chartTypes: ['bar', 'line', 'bubble'],
        chartColor: 'crimson',
        chartColors: ['crimson', 'teal', 'royalblue'],
        loading: false
    }
}



function initChart() {
    this.chart = Vue.markRaw(new Chart(this.$refs.chart, {
        type: this.chartType,
        data: {
            labels: [],
            datasets: [{
                label: 'Repos Stars',
                backgroundColor: 'crimson',
                borderColor: 'crimson',
                data: [],
                cubicInterpolationMode: 'monotone',
                fill: true
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }));


}

function updateChart() {
    this.stars += [22,12,34]
    this.labels += 'a'
    this.chart.data.labels = this.labels
    this.chart.data.datasets[0].data = this.stars
    this.chart.update()
    Vue.createApp(App).mount('#app')
}















