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
}, 10000);