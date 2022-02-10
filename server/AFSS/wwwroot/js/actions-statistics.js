

subtract.onclick = function() {
    alert('Отняли');
};

add.onclick = function() {
    alert('Прибавили');
};




/*google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(callback);
google.charts.setOnLoadCallback(callback2);
google.charts.setOnLoadCallback(callback3);*/
/*

function callback() {

    var chart1 = new google.visualization.LineChart(document.getElementById('chart1'));

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'TimeStamp');
    data.addColumn('number', 'Value');
    drawChart();
    setInterval(drawChart, 1000);
    function drawChart() {
        var time = (moment().format('h:mm:ss'));
        number = Math.random() * 1000;
        var option = {
            title: "Температура печи " + number.toFixed(3),
            width: 375,
            height: 175,

            series: {
                0: {
                    color: 'red',
                    lineWidth: 3
                },
            },
            hAxis: { gridlines: { color: '#7A0B14' },
                gridlineColor: '#7A0B14',
                baselineColor: '#7A0B14',
                /!*viewWindow: { min: -1, max: 6 },*!/
                baselineColor: 'transparent',   },
            vAxis: {
                gridlines: { color: '#7A0B14' },
                gridlineColor: '#7A0B14',
                baselineColor: '#7A0B14', viewWindow: { min: -1, max: 1000 }, baselineColor: 'transparent',   },
            chartArea: { height: '80%', width: '85%', left: 50,
                backgroundColor: { stroke: "gray", strokeWidth: 1 } },

            pointSize: 10
        };



        data.addRow([time.toString(), number]);
        if (data.getNumberOfRows() > 6)
        {
            data.removeRow(0);
        }
        chart1.draw(data, option);
    }
}

function callback2() {

    var chart2 = new google.visualization.LineChart(document.getElementById('chart2'));

    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'TimeStamp');
    data2.addColumn('number', 'Value');
    drawChart2();
    setInterval(drawChart2, 1000);
    function drawChart2() {
        var time = (moment().format('h:mm:ss'));
        number = Math.random() * 100 + 30;
        var option = {
            title: "Температура парной " + number.toFixed(3),
            width: 375,
            height: 175,

            series: {
                0: {
                    color: 'red',
                    lineWidth: 3
                },
            },
            hAxis: { gridlines: { color: '#7A0B14' },
                gridlineColor: '#7A0B14',
                baselineColor: '#7A0B14',
                /!*viewWindow: { min: -1, max: 6 },*!/
                baselineColor: 'transparent',   },
            vAxis: {
                gridlines: { color: '#7A0B14' },
                gridlineColor: '#7A0B14',
                baselineColor: '#7A0B14', viewWindow: { min: -1, max: 1000 }, baselineColor: 'transparent',   },
            chartArea: { height: '80%', width: '85%', left: 50,
                backgroundColor: { stroke: "gray", strokeWidth: 1 } },

            pointSize: 10
        };

        data2.addRow([time.toString(), number]);
        if (data2.getNumberOfRows() > 6)
        {
            data2.removeRow(0);
        }
        chart2.draw(data2, option);
    }
}

function callback3() {

    var chart3 = new google.visualization.LineChart(document.getElementById('chart3'));

    var data3 = new google.visualization.DataTable();
    data3.addColumn('string', 'TimeStamp');
    data3.addColumn('number', 'Value');
    drawChart3();
    setInterval(drawChart3, 1000);
    function drawChart3() {
        var time = (moment().format('h:mm:ss'));
        number = Math.random() * 1000;
        number2 = Math.random() * 100 + 20;
        var option = {
            title: "Давление в баке " + number.toFixed(3) + "; Температура в баке " + number2.toFixed(3),
            width: 375,
            height: 175,

            series: {
                0: {
                    color: 'red',
                    lineWidth: 3
                },
            },
            hAxis: { gridlines: { color: '#7A0B14' },
                gridlineColor: '#7A0B14',
                baselineColor: '#7A0B14',
                /!*viewWindow: { min: -1, max: 6 },*!/
                baselineColor: 'transparent',   },
            vAxis: {
                gridlines: { color: '#7A0B14' },
                gridlineColor: '#7A0B14',
                baselineColor: '#7A0B14', viewWindow: { min: -1, max: 1000 }, baselineColor: 'transparent',   },
            chartArea: { height: '80%', width: '85%', left: 50,
                backgroundColor: { stroke: "gray", strokeWidth: 1 } },

            pointSize: 10
        };

        data3.addRow([time.toString(), number]);
        if (data3.getNumberOfRows() > 6)
        {
            data3.removeRow(0);
        }
        chart3.draw(data3, option);
    }
}

*/
//value for x-axis
var emotions = ["calm", "happy", "angry", "disgust"];

//colours for each bar
var colouarray = ['red', 'green', 'yellow', 'blue'];

//Let's initialData[] be the initial data set
var initialData = [0.1, 0.4, 0.3, 0.6];

//Let's updatedDataSet[] be the array to hold the upadted data set with every update call
var updatedDataSet;

/*Creating the bar chart*/
var ctx = document.getElementById("barChart");
var barChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: emotions,
        datasets: [{
            backgroundColor: colouarray,
            label: 'Prediction',
            data: initialData
        }]
    },
    options: {
        /*        width: 375,
                height: 175,*/
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 1,
                    stepSize: 0.5,
                }
            }]
        }
    }
});

/*Function to update the bar chart*/
function updateBarGraph(chart, label, color, data) {
    chart.data.datasets.pop();
    chart.data.datasets.push({
        label: label,
        backgroundColor: color,
        data: data
    });
    chart.update();
}

/*Updating the bar chart with updated data in every second. */
setInterval(function() {
    updatedDataSet = [Math.random(), Math.random(), Math.random(), Math.random()];
    updateBarGraph(barChart, 'Prediction', colouarray, updatedDataSet);
}, 1000);