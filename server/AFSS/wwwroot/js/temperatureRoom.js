function addChartTemperatureRoom() {
    var temperatureRoomOnY = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    var timeOnX = ["0", "0", "0", "0", "0", "0"];
    var time = "00:00:00";
    var temperatureRoomValue = 0;
    /*    var key = '000000002690f5d0';*/

    /* (async () => await initializeTemperature())();
 
     async function initializeTemperature() {
         let response = await fetch('/api/GetData?count=6');
         let data = await response.json();
         temperatureRoomOnY[0] = data[0].tmp1;
         temperatureRoomOnY[1] = data[1].tmp1;
         temperatureRoomOnY[2] = data[2].tmp1;
         temperatureRoomOnY[3] = data[3].tmp1;
         temperatureRoomOnY[4] = data[4].tmp1;
         temperatureRoomOnY[5] = data[5].tmp1;
     }*/

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
            const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
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
                    max: 140,
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
        //(async () => await fetchAsync())();
        temperatureRoomValue = window.responseData[0].tmp1;
        timeOnX.push(time);
        timeOnX.shift();
        temperatureRoomOnY.push(temperatureRoomValue);
        temperatureRoomOnY.shift();

    }

    setInterval(function () {
        if (window.typeStatus == "online") {
            updateData();
        
        if (temperatureRoomValue > window.thresholdsData[0].criticalTmpRoom) {
            chartTemperatureRoom.config.data.datasets[0].borderColor = '#E00E0F';
            chartTemperatureRoom.config.data.datasets[0].backgroundColor = '#E00E0F';
        }
        if (window.thresholdsData[0].criticalTmpRoom >= temperatureRoomValue && temperatureRoomValue > window.thresholdsData[0].maxTmpRoom) {
            chartTemperatureRoom.config.data.datasets[0].borderColor = '#FE611E';
            chartTemperatureRoom.config.data.datasets[0].backgroundColor = '#FE611E';
        }
        if (window.thresholdsData[0].maxTmpRoom >= temperatureRoomValue && temperatureRoomValue >= window.thresholdsData[0].minTmpRoom) {
            chartTemperatureRoom.config.data.datasets[0].borderColor = '#FEC715';
            chartTemperatureRoom.config.data.datasets[0].backgroundColor = '#FEC715';
        }
        chartTemperatureRoom.config.data.labels = timeOnX.slice();
        chartTemperatureRoom.config.data.datasets[0].data = temperatureRoomOnY.slice();
        chartTemperatureRoom.update();
        }
    }, 2000)
    const chartTemperatureRoom = new Chart(
        document.getElementById('chartTemperatureRoom'),
        config
    );
}
