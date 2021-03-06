function addChartTemperatureStove() {
    var temperatureStoveOnY = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    var timeOnX = ["0", "0", "0", "0", "0", "0"];
    var time = "00:00:00";
    var number = 0;

    const data = {
        labels: timeOnX,
        datasets: [{
            borderColor: '#FEC715', /*цвет линии графика*/
            label: 'Температура в печи',
            data: temperatureStoveOnY,
            backgroundColor: '#FEC715',
            /*borderWidth: 5*/
        }]
    };

    const temperatureStoveLastValue = {
        id: 'temperatureStoveLastValue',
        beforeDatasetsDraw(chart, args, options) {
            const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
            const text = number;
            ctx.save();
            ctx.font = 'bolder 12px Arial';
            ctx.fillText(text, 300, 15);
            ctx.fillStyle = 'black';
        }
    };

    const config = {
        type: 'line',
        data,
        options: {
            layout: {
                padding: {
                    top: 0,
                    bottom: 0
                },
            },
            plugins: {
                /*tooltip: {
                    enabled: false, // отключает наводку на точки
                },*/
            },
            legend: {
                display: true // Легенда сверху
            },
            animation: {

                duration: 0, // general animation time
            },

            hover: {
                animationDuration: 0, // duration of animations when hovering an item
            },
            responsiveAnimationDuration: 0, // animation duration after a resize
            scales: {
                yAxes: {
                    max: 1000,
                    stepSize: 100,
                    title: {
                        color: 'black',
                        display: true,
                        text: 'Температура'
                    }
                },
                xAxes: {
                    title: {
                        color: 'black',
                        display: true,
                        text: 'Время',
                        align: 'start',
                        padding: 10,
                    }
                },
            },
            elements: {
                point: {
                    radius: (ctx) =>
                        (ctx.chart.data.datasets[ctx.datasetIndex].data.length - 1 === ctx.index ? 5 : 3),
                },
            },

        },
        plugins: [temperatureStoveLastValue]
    };

    function updateDataStove(/*dataY, dataX*/) {
        time = (moment().format('h:mm:ss'));
        number = (Math.random() * 1000).toFixed(3);
        timeOnX.push(time);
        timeOnX.shift();
        temperatureStoveOnY.push(number);
        temperatureStoveOnY.shift();
    }

    setInterval(function () {
        updateDataStove( /*chartTemperatureStove.config.data.labels, myChart.config.data.datasets[0].data */);
        /*chartTemperatureStove.config.data.datasets[0].backgroundColor = 'yellow';*/
        /*chartTemperatureStove.config.data.datasets[0].borderWidth = 5;*/
        if (number > 500) {
            chartTemperatureStove.config.data.datasets[0].borderColor = '#E00E0F';
            chartTemperatureStove.config.data.datasets[0].backgroundColor = '#E00E0F';
        }
        if (500 > number && number > 250) {
            chartTemperatureStove.config.data.datasets[0].borderColor = '#FE611E';
            chartTemperatureStove.config.data.datasets[0].backgroundColor = '#FE611E';
        }
        if (250 > number) {
            chartTemperatureStove.config.data.datasets[0].borderColor = '#FEC715';
            chartTemperatureStove.config.data.datasets[0].backgroundColor = '#FEC715';
        }
        /*console.log(timeOnX[timeOnX.length - 1]);*/
        chartTemperatureStove.config.data.labels = timeOnX.slice();
        chartTemperatureStove.config.data.datasets[0].data = temperatureStoveOnY.slice();
        chartTemperatureStove.update();

    }, 2000)
// render init block
    const chartTemperatureStove = new Chart(
        document.getElementById('chartTemperatureStove'),
        config
    );
}