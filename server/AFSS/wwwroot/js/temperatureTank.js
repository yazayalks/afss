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
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                   /* top: 10,
                    bottom: 5,*/
                   /* right: 250,*/
                },
            },
            plugins: {
                legend: {
                    padding: {
                        right: 100,
                    },
                    display: true,
                    labels: {

                    },
                },
                /*tooltip: {
                    enabled: false, // отключает наводку на точки
                },*/
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
                        text: 'Температура (C°)'
                    }
                },
                xAxes: {
                    title: {
                        color: 'black',
                        display: true,
                        text: 'Время',
                        align: 'center',
                        /*padding: 10,*/
                    }
                },
            },
        },
        plugins: [temperatureTankLastValue]
    };


    function updateData(/*dataY, dataX*/) {
        time = (moment().format('h:mm:ss'));
        temperatureTankValue = window.responseData[0].tmp0;
        timeOnX.push(time);
        timeOnX.shift();
        temperatureTankOnY.push(temperatureTankValue);
        temperatureTankOnY.shift();
    }

    setInterval(function () {
        if (window.typeStatus == "online") {
            updateData();
        
        
        if (temperatureTankValue > window.thresholdsData[0].criticalTmpTank) {
            chartTemperatureTank.config.data.datasets[0].borderColor = '#FEC715';
            chartTemperatureTank.config.data.datasets[0].backgroundColor = '#FEC715';
        }
        if (window.thresholdsData[0].criticalTmpTank >= temperatureTankValue && temperatureTankValue > window.thresholdsData[0].maxTmpTank) {
            chartTemperatureTank.config.data.datasets[0].borderColor = '#FE611E';
            chartTemperatureTank.config.data.datasets[0].backgroundColor = '#FE611E';
        }
        if (window.thresholdsData[0].maxTmpTank >= temperatureTankValue && temperatureTankValue >= window.thresholdsData[0].minTmpTank) {
            chartTemperatureTank.config.data.datasets[0].borderColor = '#E00E0F'; 
            chartTemperatureTank.config.data.datasets[0].backgroundColor = '#E00E0F'; 
        }

        chartTemperatureTank.config.data.labels = timeOnX.slice();
        chartTemperatureTank.config.data.datasets[0].data = temperatureTankOnY.slice();
        chartTemperatureTank.update();
        }
    }, 2000)
// render init block
    const chartTemperatureTank = new Chart(
        document.getElementById('chartTemperatureTank'),
        config
    );
    chartTemperatureTank.canvas.parentNode.style.height = '175px';
    chartTemperatureTank.canvas.parentNode.style.width = '187px';
}
