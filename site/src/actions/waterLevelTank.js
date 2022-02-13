function addChartWaterLevelTank() {
    var waterLevelTankOnY = [0.0];
    var timeOnX = ["0"];
    var time = "00:00:00";
    var waterLevelTankValue = 0;

    const data = {
        labels: timeOnX,
        datasets: [{
            borderColor: '#E00E0F', /*цвет линии графика*/
            label: 'Уровень воды ',
            data: waterLevelTankOnY,
            backgroundColor: '#E00E0F',
            /*borderWidth: 5*/
            tension: 0.45 /*сглаживает линии*/
        }]
    };

    const waterLevelTankLastValue = {
        id: 'waterLevelTankLastValue',
        beforeDatasetsDraw(chart, args, options) {
            const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
            const text = waterLevelTankValue;
            ctx.save();
            ctx.font = 'bolder 12px Arial';
            ctx.fillText(text, 140, 26);
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
                display: false, // Легенда сверху
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
                        text: 'Литры'
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
        plugins: [waterLevelTankLastValue]
    };


    function updateData(/*dataY, dataX*/) {
        time = (moment().format('h:mm:ss'));
        waterLevelTankValue = (Math.random() * 100).toFixed(3);
        timeOnX.push(time);
        timeOnX.shift();
        waterLevelTankOnY.push(waterLevelTankValue);
        waterLevelTankOnY.shift();
    }

    setInterval(function () {
        updateData( /*myChart.configRoom.dataRoom.labels, myChart.configRoom.data.datasets[0].data */);
        /*myChart.configRoom.dataRoom.datasets[0].backgroundColor = 'yellow';*/
        /*myChart.configRoom.dataRoom.datasets[0].borderWidth = 5;*/
        if (waterLevelTankValue > 80) {
            chartWaterLevelTank.config.data.datasets[0].borderColor = '#000022';
            chartWaterLevelTank.config.data.datasets[0].backgroundColor = '#000022';
        }
        if (80 > waterLevelTankValue && waterLevelTankValue > 50) {
            chartWaterLevelTank.config.data.datasets[0].borderColor = '#32324e';
            chartWaterLevelTank.config.data.datasets[0].backgroundColor = '#32324e';
        }
        if (50 > waterLevelTankValue) {
            chartWaterLevelTank.config.data.datasets[0].borderColor = '#E00E0F';
            chartWaterLevelTank.config.data.datasets[0].backgroundColor = '#E00E0F';
        }
        /*console.log(timeOnX[timeOnX.length - 1]);*/
        chartWaterLevelTank.config.data.labels = timeOnX.slice();
        chartWaterLevelTank.config.data.datasets[0].data = waterLevelTankOnY.slice();
        chartWaterLevelTank.update();

    }, 2000)
// render init block
    const chartWaterLevelTank = new Chart(
        document.getElementById('chartWaterLevelTank'),
        config
    );
}

