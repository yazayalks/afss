var buttonThresholds = document.getElementById("thresholds");
var buttonStatistics = document.getElementById("statistics");
var buttonThresholdsImage = document.getElementById("thresholds-image");
var buttonStatisticsImage = document.getElementById("statistics-image");

statistics.onclick = function () { // перезапишет существующий обработчик
    document.location.href = "/Statistics";
};

informations.onclick = function () {
    alert('Опаньки information');
};

buttonThresholds.onclick = function () {
    document.location.href = "/Thresholds";
};

settings.onclick = function () {
    alert('Опаньки settings');
};

function startIntervalSubMenu() {
    console.log();
}

function getTittlePage() {
    return document.title;
}

function setColorButtons() {
    var tittle = getTittlePage();
    if (tittle == "Thresholds - AFSS") {
        buttonThresholdsActive();
    }
    if (tittle == "Statistics - AFSS") {
        buttonStatisticsActive();
    }
}

function buttonThresholdsActive() {
    buttonThresholds.style.background = '#FEC715';
    buttonThresholds.style.border = '0px';
    buttonThresholds.style.color = 'white';
    buttonThresholdsImage.style.background = 'url(../images/button-thresholds--active.svg) no-repeat';
}

function buttonStatisticsActive() {
    buttonStatistics.style.background = '#FEC715';
    buttonStatistics.style.border = '0px';
    buttonStatistics.style.color = 'white';
    buttonStatisticsImage.style.background = 'url(../images/button-statistics--active.svg) no-repeat';
}
