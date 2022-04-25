var buttonThresholds = document.getElementById("thresholds");
var buttonStatistics = document.getElementById("statistics");
var buttonInformations = document.getElementById("informations");
var buttonSettings = document.getElementById("settings");
var buttonThresholdsImage = document.getElementById("thresholds-image");
var buttonStatisticsImage = document.getElementById("statistics-image");
var buttonInformationsImage = document.getElementById("informations-image");
var buttonSettingsImage = document.getElementById("settings-image");


buttonStatistics.onclick = function () { // перезапишет существующий обработчик
    document.location.href = "/Statistics";
};

buttonInformations.onclick = function () {
    document.location.href = "/Informations";
};

buttonThresholds.onclick = function () {
    document.location.href = "/Thresholds";
};

buttonSettings.onclick = function () {
    document.location.href = "/Settings";
};

function startIntervalSubMenu() {
    console.log();
}

function getTittlePage() {
    return document.title;
}

function setColorButtons() {
    var tittle = getTittlePage();
    if ((tittle == "Thresholds - AFSS") || (tittle == "DataUser - AFSS")) {
        buttonThresholdsActive();
    }
    if (tittle == "Statistics - AFSS") {
        buttonStatisticsActive();
    }
    if (tittle == "Informations - AFSS") {
        buttonInformationsActive();
    }
    if (tittle == "Settings - AFSS") {
        buttonSettingsActive();
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

function buttonInformationsActive() {
    buttonInformations.style.background = '#FEC715';
    buttonInformations.style.border = '0px';
    buttonInformations.style.color = 'white';
    buttonInformationsImage.style.background = 'url(../images/button-informations--active.svg) no-repeat';
}

function buttonSettingsActive() {
    buttonSettings.style.background = '#FEC715';
    buttonSettings.style.border = '0px';
    buttonSettings.style.color = 'white';
    buttonSettingsImage.style.background = 'url(../images/button-settings--active.svg) no-repeat';
}
