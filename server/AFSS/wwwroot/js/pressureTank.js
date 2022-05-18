function addChartPressureTank() {
    var pressureTankOnY = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    var timeOnX = ["0", "0", "0", "0", "0", "0"];
    var time = "00:00:00";
    var pressureTankValue = 0;

    const data = {
        labels: timeOnX,
        datasets: [{
            borderColor: '#FEC715', /*цвет линии графика*/
            label: 'Давление в баке',
            data: pressureTankOnY,
            backgroundColor: '#FEC715',
            /*borderWidth: 5*/
            tension: 0.45 /*сглаживает линии*/
        }]
    };

    const pressureTankLastValue = {
        id: 'pressureTankLastValue',
        beforeDatasetsDraw(chart, args, options) {
            const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
            const text = pressureTankValue;
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
                    max: 140,
                    stepSize: 10,
                    title: {
                        color: 'black',
                        display: true,
                        text: 'Давление (Кпа)'
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
        plugins: [pressureTankLastValue]
    };


    function updateData(/*dataY, dataX*/) {
        time = (moment().format('h:mm:ss'));
        pressureTankValue = (window.responseData[0].pressure / 10).toFixed(3);
        timeOnX.push(time);
        timeOnX.shift();
        pressureTankOnY.push(pressureTankValue);
        pressureTankOnY.shift();
    }

    setInterval(function () {
        if (window.typeStatus == "online") { 
            updateData();
        }
        
        if (window.thresholdsData[0].criticalPressureTank < pressureTankValue) {
            chartPressureTank.config.data.datasets[0].borderColor = '#E00E0F';
            chartPressureTank.config.data.datasets[0].backgroundColor = '#E00E0F';
        }
        if ((window.thresholdsData[0].maxPressureTank < pressureTankValue) && (pressureTankValue <= window.thresholdsData[0].criticalPressureTank)) {
            chartPressureTank.config.data.datasets[0].borderColor = '#FE611E';
            chartPressureTank.config.data.datasets[0].backgroundColor = '#FE611E';
        }
        if ((window.thresholdsData[0].minPressureTank <= pressureTankValue) && (pressureTankValue <= window.thresholdsData[0].maxPressureTank)) {
            chartPressureTank.config.data.datasets[0].borderColor = '#FEC715';
            chartPressureTank.config.data.datasets[0].backgroundColor = '#FEC715';
        }
        
        chartPressureTank.config.data.labels = timeOnX.slice();
        chartPressureTank.config.data.datasets[0].data = pressureTankOnY.slice();
        chartPressureTank.update();

    }, 2000)
// render init block
    const chartPressureTank = new Chart(
        document.getElementById('chartPressureTank'),
        config
    );
}
