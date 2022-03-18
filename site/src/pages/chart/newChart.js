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
                /*viewWindow: { min: -1, max: 6 },*/
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