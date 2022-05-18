var servoStoveValue = document.getElementById('servoStoveValue');
var servoPipeValue = document.getElementById('servoPipeValue');
var buttonSubtractPipe = document.getElementById('button-subtract-pipe');
var buttonAddPipe = document.getElementById('button-add-pipe');
var buttonSubtractStove = document.getElementById('button-subtract-stove');
var buttonAddStove = document.getElementById('button-add-stove');
var typeUserArray = ["user", "admin", "guest"];
var typeMod = ["damp", "automation", "custom", "critical"];
var gasStatusArray = ["noGas", "someGas", "lotGas"];
var gasStatus = gasStatusArray[0];
var valueStove = parseInt(servoStoveValue.textContent);
var valuePipe = parseInt(servoPipeValue.textContent);
var buttonAuto = document.getElementById("button-auto");
var buttonPower = document.getElementById("button-power");
var buttonCritical = document.getElementById("button-critical");
var typeStatusArray = ["online", "offline"];


var automationStatus = false;
var dampStatus = false;
var criticalStatus = false;
var customStatus = false;

var startSistem = false;
var firstEvent = false;
var lastEvent = false;
var statusButtons = true;

var statusCriticalTmpStove = false;
var statusCriticalWater = false;
var statusMaxGas = false;
var statusCriticalGas = false;
var statusCriticalPressure = false;
var statusCriticalTmpRoom = false;


function initValue() {
    if ((startSistem == false) && (window.responseData[0].mod != "")) {
        (async () => await GetThresholds())();
        startSistem = true;
        console.log(window.responseData[0].mod);
        if (window.responseData[0].mod == "automation") {
            blockCritical();
            automationStatus = true;
            dampStatus = false;
            criticalStatus = false;
            customStatus = false;
        }
        if (window.responseData[0].mod == "custom") {
            blockCritical();
            buttonAuto.src = "../images/button-auto.svg";
            customStatus = true;
            automationStatus = false;
            dampStatus = false;
            criticalStatus = false;
        }
        if (window.responseData[0].mod == "critical") {
            criticalStatus = true;
            customStatus = false;
            automationStatus = false;
            dampStatus = false;
            changeEventsText(window.eventsArray.mod.criticaling.on);
            unblockCritical();
            blockAllButtons();
        }
        if (window.responseData[0].mod == "damp") {
            blockCritical();
            dampStatus = true;
            criticalStatus = false;
            customStatus = false;
            automationStatus = false;
        }
    }
}

function PrintTypeUser(type) {
    console.log(window.typeUser);
}

function parseDate(date) {
    return new Date(parseInt(/-?\d+/.exec(date)[0]))
}

function offlineSystem() {
    changeEventsText(window.eventsArray.systemPi.offline);
}

function checkCriticalData(data) {
    
    if (data == "") {
        return;
    }
    var d = data.replace(/\s/g, '').split(",");

    console.log(d);

    for (i = 0; i < d.length; i++) {
        if ((d[i] == 'critPresTank') && (statusCriticalPressure == false)) {
            statusCriticalPressure = true;
            criticalStatus = true;
            changeEventsText(window.eventsArray.pressureLevel.critical);
            changeEventsText(window.eventsArray.mod.criticaling.on);
            unblockCritical();
            blockAllButtons();
        }
        if ((d[i] == 'critGasLev') && (statusCriticalGas == false)) {
            statusCriticalGas = true;
            criticalStatus = true;
            changeEventsText(window.eventsArray.gasLevel.critical);
            changeEventsText(window.eventsArray.mod.criticaling.on);
            unblockCritical();
            blockAllButtons();
        }
        if ((d[i] == 'critTmpStove') && (statusCriticalTmpStove == false)) {
            statusCriticalTmpStove = true;
            criticalStatus = true;
            changeEventsText(window.eventsArray.stoveTmpLevel.critical);
            changeEventsText(window.eventsArray.mod.criticaling.on);
            unblockCritical();
            blockAllButtons();
        }
        if ((d[i] == 'critTmpRoom') && (statusCriticalTmpRoom == false)) {
            statusCriticalTmpRoom = true;
            criticalStatus = true;
            changeEventsText(window.eventsArray.roomTmpLevel.critical);
            changeEventsText(window.eventsArray.mod.criticaling.on);
            unblockCritical();
            blockAllButtons();
        }
        if ((d[i] == 'critwatLevTank') && (statusCriticalWater == false)) {
            statusCriticalWater = true;
            criticalStatus = true;
            changeEventsText(window.eventsArray.waterLevel.small);
            changeEventsText(window.eventsArray.mod.criticaling.on);
            unblockCritical();
            blockAllButtons();
        }
    }
}

function isEmpty(str) {
    if (str.trim() == '')
        return true;

    return false;
}

function resetAuto() {
    automationStatus = false;
    buttonAuto.src = "../images/button-auto.svg";
}
function changeEventsText(text, value) {
    var eventsText = document.getElementById("eventsText");
    if (value === undefined) {
        eventsText.innerHTML += ' <div class="events__item"><div class = "text-light text-light--black">' + text + '</div></div>';
    } else {
        eventsText.innerHTML += ' <div class="events__item"><div class = "text-light text-light--black">' + text + ' ' + value + ';' + '</div></div>';
    }
    eventsText.scrollTo({
        top: eventsText.scrollHeight + 100000,
        left: 0,
        behavior: 'smooth',
    });
}


function changeImageGas() {
    var responseGasRoom = window.responseData[0].gas;
    if ((window.thresholdsData[0].minGasLevel <= responseGasRoom) && (responseGasRoom <= window.thresholdsData[0].maxGasLevel)) {
        gasStatus = gasStatusArray[0];
    }
    if ((window.thresholdsData[0].maxGasLevel < responseGasRoom) && (responseGasRoom <= window.thresholdsData[0].criticalGasLevel)) {
        gasStatus = gasStatusArray[1];
    }
    if (window.thresholdsData[0].criticalGasLevel < responseGasRoom) {
        gasStatus = gasStatusArray[2];
    }
    var imageGasRoom = document.getElementById("imageGasRoom");
    var gasRoomValue = document.getElementById("gasRoomValue");

    if (gasStatus == gasStatusArray[2]) {
        imageGasRoom.src = "../images/gas-room-2.png";
        gasRoomValue.innerText = "Задымление помещения"
    }
    if (gasStatus == gasStatusArray[1]) {
        imageGasRoom.src = "../images/gas-room-1.png";
        gasRoomValue.innerHTML = "Утечка CO и CO<sub>2</sub>";
    }
    if (gasStatus == gasStatusArray[0]) {
        imageGasRoom.src = "../images/gas-room-0.png";
        gasRoomValue.innerHTML = "CO и CO<sub>2</sub> не обнаружены";
    }
}

function blockCritical() {
    buttonCritical.style.opacity = "0.5";
    buttonCritical.style.cursor = 'default';
}

function blockSubtractPipe() {
    buttonSubtractPipe.style.opacity = "0.5";
    buttonSubtractPipe.style.cursor = 'default';
}

function blockAddPipe() {
    buttonAddPipe.style.opacity = "0.5";
    buttonAddPipe.style.cursor = 'default';
}

function blockSubtractStove() {
    buttonSubtractStove.style.opacity = "0.5";
    buttonSubtractStove.style.cursor = 'default';
}

function blockAddStove() {
    buttonAddStove.style.opacity = "0.5";
    buttonAddStove.style.cursor = 'default';
}

function blockAuto() {
    buttonAuto.style.opacity = "0.5";
    buttonAuto.style.cursor = 'default';
}
function blockPower() {
    buttonPower.style.opacity = "0.5";
    buttonPower.style.cursor = 'default';
}

function blockServoButtons() {
    if (dampStatus == true) {
        blockSubtractPipe();
        blockAddPipe();
        blockSubtractStove();
        blockAddStove();
        blockAuto();
    }
    if (dampStatus == false) {
        unblockSubtractPipe();
        unblockAddPipe();
        unblockSubtractStove();
        unblockAddStove();
        unblockAuto();
    }
}

function unblockCritical() {
    buttonCritical.style.opacity = "1.0";
    buttonCritical.style.cursor = 'pointer';
}

function unblockSubtractPipe() {
    buttonSubtractPipe.style.opacity = "1.0";
    buttonSubtractPipe.style.cursor = 'pointer';
}

function unblockAddPipe() {
    buttonAddPipe.style.opacity = "1.0";
    buttonAddPipe.style.cursor = 'pointer';
}

function unblockSubtractStove() {
    buttonSubtractStove.style.opacity = "1.0";
    buttonSubtractStove.style.cursor = 'pointer';
}

function unblockAddStove() {
    buttonAddStove.style.opacity = "1.0";
    buttonAddStove.style.cursor = 'pointer';
}

function unblockAuto() {
    buttonAuto.style.opacity = "1.0";
    buttonAuto.style.cursor = 'pointer';
}

function unblockPower() {
    buttonPower.style.opacity = "1.0";
    buttonPower.style.cursor = 'pointer';
}

function blockAllButtons() {
    if ((window.typeStatus == typeStatusArray[1]) || (criticalStatus == true)) {
        blockSubtractPipe();
        blockAddPipe();
        blockSubtractStove();
        blockAddStove();
        blockAuto();
        blockPower();
    }
}

function unblockAllButtons() {
    if ((criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        unblockSubtractPipe();
        unblockAddPipe();
        unblockSubtractStove();
        unblockAddStove();
        unblockAuto();
        unblockPower()
    }
}


function httpGetServo(servoType, servoValue) {
    var xhr = new XMLHttpRequest();
    var mod = typeMod[2];
    xhr.open('GET', '/api/TaskCreate?servoType=' + servoType + '&servoValue=' + servoValue + '&mod=' + mod, false);
    /*xhr.open('GET', 'localhost:7131/api/TaskCreate?type=' + type + '&value=' + value, false);*/
    xhr.send();
    if (xhr.status != 200) {
        // обработать ошибку
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        console.log(xhr.responseText); // responseText -- текст ответа.
    }
}

function httpGetMod(mod) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/TaskCreate?mod=' + mod + '&servoValue=' + -1, false);
    /*xhr.open('GET', 'localhost:7131/api/TaskCreate?type=' + type + '&value=' + value, false);*/
    /*xhr.open('GET', '/api/TaskCreate?servoType=' + "-1" + '&servoValue=' + "-1" + '&mod=' + mod, false);*/
    xhr.send();
    if (xhr.status != 200) {
        // обработать ошибку
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        console.log(xhr.responseText); // responseText -- текст ответа.
    }
}

subtractForStove.onclick = function () {
    
    if ((valueStove > 0) && (dampStatus == false) && (criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        resetAuto();
        httpGetServo(0, valueStove - 10);
        servoStoveValue.innerText = (valueStove -= 10).toString() + "°";
        changeImageStove(valueStove);
        changeEventsText(window.eventsArray.servoStove.subtract, "10°");
    }
};

addForStove.onclick = function () {
    
    if ((valueStove < 90) && (dampStatus == false) && (criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        resetAuto();
        httpGetServo(0, valueStove + 10);
        servoStoveValue.innerText = (valueStove += 10).toString() + "°";
        changeImageStove(valueStove);
        changeEventsText(window.eventsArray.servoStove.add, "10°");
    }
};

subtractForPipe.onclick = function () {
    
    if ((valuePipe > 0) && (dampStatus == false) && (criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        resetAuto();
        httpGetServo(1, valuePipe - 10);
        servoPipeValue.innerText = (valuePipe -= 10).toString() + "°";
        changeImagePipe(valuePipe);
        changeEventsText(window.eventsArray.servoPipe.subtract, "10°");
    }
};

addForPipe.onclick = function () {
    
    if ((valuePipe < 90) && (dampStatus == false) && (criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        resetAuto();
        httpGetServo(1, valuePipe + 10);
        servoPipeValue.innerText = (valuePipe += 10).toString() + "°";
        changeImagePipe(valuePipe);
        changeEventsText(window.eventsArray.servoPipe.add, "10°");
    }
};

function changeImageStove(value) {
    var imageServoStove = document.getElementById("imageServoStove");
    imageServoStove.src = "../images/servo-stove-" + value / 10 +".png";
}

function changeImagePipe(value) {
    var imageServoPipe = document.getElementById("imageServoPipe");
    imageServoPipe.src = "../images/servo-pipe-" + value / 10 +".png";
}



async function updateImage() {
    var responseServoStove = window.responseData[0].servo0;
    var responseServoPipe = window.responseData[0].servo1;

    if (valueStove != responseServoStove) {
        changeImageStove(responseServoStove);
        valueStove = responseServoStove;
        servoStoveValue.innerText = (responseServoStove).toString() + "°";
        changeEventsText(window.eventsArray.servoStove.auto, responseServoStove + "°");
    }
    if (valuePipe != responseServoPipe) {
        changeImagePipe(responseServoPipe);
        valuePipe = responseServoPipe;
        servoPipeValue.innerText = (responseServoPipe).toString() + "°";
        changeEventsText(window.eventsArray.servoPipe.auto, responseServoPipe + "°");
    } 
}


buttonAuto.onclick = function changeImageAuto() {
    if ((criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        if ((automationStatus == true) && (dampStatus == false)) {
            buttonAuto.src = "../images/button-auto.svg";
            automationStatus = false;
            changeEventsText(window.eventsArray.mod.automating.off);
            httpGetMod(typeMod[2]);
            return;
        }
        if ((automationStatus == false) && (dampStatus == false)) {
            buttonAuto.src = "../images/button-auto--active.svg";
            automationStatus = true;
            changeEventsText(window.eventsArray.mod.automating.on);
            httpGetMod(typeMod[1]);
            return;
        }
    }
}

buttonPower.onclick = function changeImagePower() {
    if ((criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        resetAuto();
        if (dampStatus == true) {
            buttonPower.src = "../images/button-power.svg";
            dampStatus = false;
            blockServoButtons();
            changeEventsText(window.eventsArray.mod.damping.off);
            httpGetMod(typeMod[2]);
            return;
        }
        if (dampStatus == false) {
            buttonPower.src = "../images/button-power--active.svg";
            dampStatus = true;
            blockServoButtons();
            changeEventsText(window.eventsArray.mod.damping.on);
            httpGetMod(typeMod[0]);
            return;
        }
    }
}

buttonAuto.addEventListener("mouseover", function (event) {
    if ((criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        if ((automationStatus == true) && (dampStatus == false)) {
            buttonAuto.src = "../images/button-auto.svg";
            return;
        }
        if ((criticalStatus == false) && (automationStatus == false) && (dampStatus == false)) {
            buttonAuto.src = "../images/button-auto--active.svg";
            return;
        }
    }
});

buttonAuto.addEventListener("mouseout", function (event) {
    if ((criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        if ((automationStatus == true) && (dampStatus == false)) {
            buttonAuto.src = "../images/button-auto--active.svg";
            return;
        }
        if ((criticalStatus == false) && (automationStatus == false) && (dampStatus == false)) {
            buttonAuto.src = "../images/button-auto.svg";
            return;
        }
    }
});

buttonPower.addEventListener("mouseover", function (event) {
    if ((criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        if (dampStatus == true) {
            buttonPower.src = "../images/button-power.svg";
            return;
        }
        if (dampStatus == false) {
            buttonPower.src = "../images/button-power--active.svg";
            return;
        }
    }
});

buttonPower.addEventListener("mouseout", function (event) {
    if ((criticalStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        if (dampStatus == true) {
            buttonPower.src = "../images/button-power--active.svg";
            return;
        }
        if (dampStatus == false) {
            buttonPower.src = "../images/button-power.svg";
            return;
        }
    }
});

buttonSubtractPipe.addEventListener("mouseover", function (event) {
    if ((criticalStatus == false) && (dampStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        buttonSubtractPipe.src = "../images/subtract--active.svg";
        return;
    } 
});

buttonAddPipe.addEventListener("mouseover", function (event) {
    if ((criticalStatus == false) && (dampStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        buttonAddPipe.src = "../images/add--active.svg";
        return;
    }
});

buttonSubtractStove.addEventListener("mouseover", function (event) {
    if ((criticalStatus == false) && (dampStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        buttonSubtractStove.src = "../images/subtract--active.svg";
        return;
    }
});

buttonAddStove.addEventListener("mouseover", function (event) {
    if ((criticalStatus == false) && (dampStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        buttonAddStove.src = "../images/add--active.svg";
        return;
    }
});

buttonSubtractPipe.addEventListener("mouseout", function (event) {
    if ((criticalStatus == false) && (dampStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        buttonSubtractPipe.src = "../images/subtract.svg";
        return;
    }
});

buttonAddPipe.addEventListener("mouseout", function (event) {
    if ((criticalStatus == false) && (dampStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        buttonAddPipe.src = "../images/add.svg";
        return;
    }
});

buttonSubtractStove.addEventListener("mouseout", function (event) {
    if ((criticalStatus == false) && (dampStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        buttonSubtractStove.src = "../images/subtract.svg";
        return;
    }
});

buttonAddStove.addEventListener("mouseout", function (event) {
    if ((criticalStatus == false) && (dampStatus == false) && (window.typeStatus == typeStatusArray[0]) && (window.typeUser == 'user')) {
        buttonAddStove.src = "../images/add.svg";
        return;
    }
});


async function GetThresholds() {
    let response = await fetch('/api/GetThresholds?count=last');
    let data = await response.json();
    window.thresholdsData = data;
}

function startIntervalStatistics() {
    setInterval(function () {
        if (((automationStatus == true) || (dampStatus == true) || (customStatus == true) || (criticalStatus == true)) && (window.typeStatus == "online")) {
            (async () => await updateImage())();
            changeImageGas();
        }
        checkCriticalData(window.responseData[0].criticalData)
    }, 2000)
}

function startIntervalEvents() {
    var startOffline;

    setInterval(function () {
        if ((window.typeStatus == "online") && (firstEvent == false)) {
            /*initValue();*/
            firstEvent = true;
            changeEventsText(window.eventsArray.systemPi.online);
        }

        if ((window.typeStatus == "offline") && (lastEvent == false)) {
            startSistem = false;
            blockAllButtons();
            startOffline = setTimeout(() => offlineSystem(), 5000);
            lastEvent = true;
            statusButtons = true;
        }
        if ((window.typeStatus == "online") && (lastEvent == true)) {
            changeEventsText(window.eventsArray.systemPi.online);
        }
        if (window.typeStatus == "online") {
            initValue();
            clearTimeout(startOffline);
            lastEvent = false;

            if (statusButtons == true) {
                statusButtons = false;
                unblockAllButtons();
            }
        }

    }, 1000)
}