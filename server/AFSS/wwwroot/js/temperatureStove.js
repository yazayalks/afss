function addChartTemperatureStove() {
    var temperatureStoveOnY = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    var timeOnX = ["0", "0", "0", "0", "0", "0"];
    var time = "00:00:00";
    var temperatureStoveValue = 0;

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
            const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
            const text = temperatureStoveValue;
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
        //console.log(window.responseData);
        time = (moment().format('h:mm:ss'));
        temperatureStoveValue = window.responseData[0].tmp2;
        timeOnX.push(time);
        timeOnX.shift();
        temperatureStoveOnY.push(temperatureStoveValue);
        temperatureStoveOnY.shift();
    }

    setInterval(function () {
        if (window.typeStatus == "online") {
            updateDataStove();
        }
        if (temperatureStoveValue > 500) {
            chartTemperatureStove.config.data.datasets[0].borderColor = '#E00E0F';
            chartTemperatureStove.config.data.datasets[0].backgroundColor = '#E00E0F';
        }
        if (500 > temperatureStoveValue && temperatureStoveValue > 250) {
            chartTemperatureStove.config.data.datasets[0].borderColor = '#FE611E';
            chartTemperatureStove.config.data.datasets[0].backgroundColor = '#FE611E';
        }
        if (250 > temperatureStoveValue) {
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