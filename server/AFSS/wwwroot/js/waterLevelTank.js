var volumeWaterLevel = 100;

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
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                   /* top: 10,
                    bottom: 5,*/
                    /*right: 250,*/
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
                    max: volumeWaterLevel,
                    stepSize: 10,
                    title: {
                        color: 'black',
                        display: true,
                        text: 'Объём (л)'
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
        plugins: [waterLevelTankLastValue]
    };

    

    function updateData(/*dataY, dataX*/) {
        time = (moment().format('h:mm:ss'));
        waterLevelTankValue = window.responseData[0].water;
        timeOnX.push(time);
        timeOnX.shift();
        waterLevelTankOnY.push(waterLevelTankValue);
        waterLevelTankOnY.shift();
    }

    setInterval(function () {
        if (window.typeStatus == "online") {
            updateData();
        
        if ((window.thresholdsData[0].maxWaterLevel < waterLevelTankValue) && (waterLevelTankValue < window.thresholdsData[0].volumeWaterLevel)) {
            chartWaterLevelTank.config.data.datasets[0].borderColor = '#FEC715';
            chartWaterLevelTank.config.data.datasets[0].backgroundColor = '#FEC715';
        }
        if ((window.thresholdsData[0].minWaterLevel + 20 < waterLevelTankValue) && (waterLevelTankValue <= window.thresholdsData[0].maxWaterLevel)) {
            chartWaterLevelTank.config.data.datasets[0].borderColor = '#FE611E';
            chartWaterLevelTank.config.data.datasets[0].backgroundColor = '#FE611E';
        }
        if ((window.thresholdsData[0].minWaterLevel <= waterLevelTankValue) && (waterLevelTankValue <= window.thresholdsData[0].minWaterLevel + 20)) {
            chartWaterLevelTank.config.data.datasets[0].borderColor = '#E00E0F';
            chartWaterLevelTank.config.data.datasets[0].backgroundColor = '#E00E0F';
        }
        /*console.log(timeOnX[timeOnX.length - 1]);*/
        chartWaterLevelTank.config.data.labels = timeOnX.slice();
        chartWaterLevelTank.config.data.datasets[0].data = waterLevelTankOnY.slice();
        chartWaterLevelTank.update();
        }
    }, 2000)
// render init block
    const chartWaterLevelTank = new Chart(
        document.getElementById('chartWaterLevelTank'),
        config
    );
    chartWaterLevelTank.canvas.parentNode.style.height = '175px';
    chartWaterLevelTank.canvas.parentNode.style.width = '187px';
}

