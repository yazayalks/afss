const canvas = document.querySelector('canvas');

const number = document.querySelector('.number');
number.addEventListener('input', (e) => {
    /*chart.data.datasets[0].data[0] = e.target.value;*/

    chart.data.datasets[0].backdropColor = ["rgb(0, 0, 0)", "rgb(54, 0, 0)", "rgb(255, 0, 86)"]


    chart.update();
});

var config = {
    type: "doughnut",
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        }
    }
};
const chart = new Chart(canvas, config);