function addChartTemperatureRoom() {
    var temperatureRoomOnY = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    var timeOnX = ["0", "0", "0", "0", "0", "0"];
    var time = "00:00:00";
    var temperatureRoomValue = 0;

    const data = {
        labels: timeOnX,
        datasets: [{
            borderColor: '#FEC715', /*цвет линии графика*/
            label: 'Температура в парной',
            data: temperatureRoomOnY,
            backgroundColor: '#FEC715',
            /*borderWidth: 5*/
        }]
    };

    const temperatureRoomLastValue = {
        id: 'temperatureRoomLastValue',
        beforeDatasetsDraw(chart, args, options) {
            const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
            const text = temperatureRoomValue;
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
                    max: 100,
                    stepSize: 10,
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
        plugins: [temperatureRoomLastValue]
    };


    function updateData(/*dataY, dataX*/) {
        time = (moment().format('h:mm:ss'));
        temperatureRoomValue = (Math.random() * 100).toFixed(3);
        timeOnX.push(time);
        timeOnX.shift();
        temperatureRoomOnY.push(temperatureRoomValue);
        temperatureRoomOnY.shift();
    }

    setInterval(function () {
        updateData( /*myChart.configRoom.dataRoom.labels, myChart.configRoom.data.datasets[0].data */);
        /*myChart.configRoom.dataRoom.datasets[0].backgroundColor = 'yellow';*/
        /*myChart.configRoom.dataRoom.datasets[0].borderWidth = 5;*/
        if (temperatureRoomValue > 80) {
            chartTemperatureRoom.config.data.datasets[0].borderColor = '#E00E0F';
            chartTemperatureRoom.config.data.datasets[0].backgroundColor = '#E00E0F';
        }
        if (80 > temperatureRoomValue && temperatureRoomValue > 40) {
            chartTemperatureRoom.config.data.datasets[0].borderColor = '#FE611E';
            chartTemperatureRoom.config.data.datasets[0].backgroundColor = '#FE611E';
        }
        if (40 > temperatureRoomValue) {
            chartTemperatureRoom.config.data.datasets[0].borderColor = '#FEC715';
            chartTemperatureRoom.config.data.datasets[0].backgroundColor = '#FEC715';
        }
        /*console.log(timeOnX[timeOnX.length - 1]);*/
        chartTemperatureRoom.config.data.labels = timeOnX.slice();
        chartTemperatureRoom.config.data.datasets[0].data = temperatureRoomOnY.slice();
        chartTemperatureRoom.update();

    }, 2000)
// render init block
    const chartTemperatureRoom = new Chart(
        document.getElementById('chartTemperatureRoom'),
        config
    );
}
