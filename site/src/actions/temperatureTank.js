function addChartTemperatureTank() {
    var temperatureTankOnY = [0.0];
    var timeOnX = ["0"];
    var time = "00:00:00";
    var temperatureTankValue = 0;

    const data = {
        labels: timeOnX,
        datasets: [{
            borderColor: '#FEC715', /*цвет линии графика*/
            label: 'Температура воды',
            data: temperatureTankOnY,
            backgroundColor: '#FEC715',
            /*borderWidth: 5*/
            tension: 0.45 /*сглаживает линии*/
        }]
    };

    const temperatureTankLastValue = {
        id: 'temperatureTankLastValue',
        beforeDatasetsDraw(chart, args, options) {
            const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
            const text = temperatureTankValue;
            ctx.save();
            ctx.font = 'bolder 12px Arial';
            ctx.fillText(text, 151, 26);
            ctx.fillStyle = 'black';
        }
    };

    const config = {
        type: 'bar',
        data,
        options: {
            layout: {
                padding: {
                    top: 10,
                    bottom: 5,
                    right: 250,
                },
            },
            plugins: {
                /*tooltip: {
                    enabled: false, // отключает наводку на точки
                },*/
            },
            legend: {
                display: false // Легенда сверху
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
                        align: 'center',
                        padding: 10,
                    }
                },
            },
        },
        plugins: [temperatureTankLastValue]
    };


    function updateData(/*dataY, dataX*/) {
        time = (moment().format('h:mm:ss'));
        temperatureTankValue = (Math.random() * 100).toFixed(3);
        timeOnX.push(time);
        timeOnX.shift();
        temperatureTankOnY.push(temperatureTankValue);
        temperatureTankOnY.shift();
    }

    setInterval(function () {
        updateData( /*myChart.configRoom.dataRoom.labels, myChart.configRoom.data.datasets[0].data */);
        /*myChart.configRoom.dataRoom.datasets[0].backgroundColor = 'yellow';*/
        /*myChart.configRoom.dataRoom.datasets[0].borderWidth = 5;*/
        if (temperatureTankValue > 80) {
            chartTemperatureTank.config.data.datasets[0].borderColor = '#E00E0F';
            chartTemperatureTank.config.data.datasets[0].backgroundColor = '#E00E0F';
        }
        if (90 > temperatureTankValue && temperatureTankValue > 50) {
            chartTemperatureTank.config.data.datasets[0].borderColor = '#FE611E';
            chartTemperatureTank.config.data.datasets[0].backgroundColor = '#FE611E';
        }
        if (50 > temperatureTankValue) {
            chartTemperatureTank.config.data.datasets[0].borderColor = '#FEC715';
            chartTemperatureTank.config.data.datasets[0].backgroundColor = '#FEC715';
        }
        /*console.log(timeOnX[timeOnX.length - 1]);*/
        chartTemperatureTank.config.data.labels = timeOnX.slice();
        chartTemperatureTank.config.data.datasets[0].data = temperatureTankOnY.slice();
        chartTemperatureTank.update();

    }, 2000)
// render init block
    const chartTemperatureTank = new Chart(
        document.getElementById('chartTemperatureTank'),
        config
    );
}