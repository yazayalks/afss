var servoStoveValue = document.getElementById('servoStoveValue');
var servoPipeValue = document.getElementById('servoPipeValue');
var buttonSubtractPipe = document.getElementById('button-subtract-pipe');
var buttonAddPipe = document.getElementById('button-add-pipe');
var buttonSubtractStove = document.getElementById('button-subtract-stove');
var buttonAddStove = document.getElementById('button-add-stove');
var typeUserArray = ["user", "admin", "guest"];
var typeUser = typeUserArray[0];
var gasStatusArray = ["noGas", "someGas", "lotGas"];
var gasStatus = gasStatusArray[0];
var valueStove = parseInt(servoStoveValue.textContent);
var valuePipe = parseInt(servoPipeValue.textContent);
var buttonAuto = document.getElementById("button-auto");
var buttonPower = document.getElementById("button-power");
var autoStatus = true;
var powerStatus = false;
var firstEvent = false;
var lastEvent = false;
var statusButtons = true;
typeStatusArray = ["online", "offline"];

function parseDate(date) {
    return new Date(parseInt(/-?\d+/.exec(date)[0]))
}

function offlineSystem() {
    changeEventsText(window.eventsArray.systemPi.offline);
}

function setStatus() {
    var timeNow = new Date();
    var timeNowUTC = new Date(timeNow.getTime() + timeNow.getTimezoneOffset() * 60000);
    var timeDb = moment(window.responseData[0].date).toDate();
    var now_utc = Date.UTC(timeNowUTC.getUTCFullYear(), timeNowUTC.getUTCMonth(), timeNowUTC.getUTCDate(), timeNowUTC.getUTCHours(), timeNowUTC.getUTCMinutes(), timeNowUTC.getUTCSeconds());
    var db_utc = Date.UTC(timeDb.getUTCFullYear(), timeDb.getUTCMonth(), timeDb.getUTCDate(), timeDb.getUTCHours(), timeDb.getUTCMinutes(), timeDb.getUTCSeconds());

    if ((now_utc - db_utc) <= 15000) {
        window.typeStatus = typeStatusArray[0];
    } else {
        window.typeStatus = typeStatusArray[1];
    }
}

changeImageGas();
changeTypeUser(typeUser);

function isEmpty(str) {
    if (str.trim() == '')
        return true;

    return false;
}

function resetAuto() {
    autoStatus = false;
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
    var responsegasRoom = window.responseData[0].gas;
    if ((0 <= responsegasRoom) && (responsegasRoom <= 100)) {
        gasStatus = gasStatusArray[0];
    }
    if ((100 < responsegasRoom) && (responsegasRoom <= 150)) {
        gasStatus = gasStatusArray[1];
    }
    if (150 < responsegasRoom) {
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
    if (powerStatus == true) {
        blockSubtractPipe();
        blockAddPipe();
        blockSubtractStove();
        blockAddStove();
        blockAuto();
    }
    if (powerStatus == false) {
        unblockSubtractPipe();
        unblockAddPipe();
        unblockSubtractStove();
        unblockAddStove();
        unblockAuto();
    }
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
    if (window.typeStatus == typeStatusArray[1]) {
        blockSubtractPipe();
        blockAddPipe();
        blockSubtractStove();
        blockAddStove();
        blockAuto();
        blockPower();
    }
}

function unblockAllButtons() {
    if (window.typeStatus == typeStatusArray[0]) {
        unblockSubtractPipe();
        unblockAddPipe();
        unblockSubtractStove();
        unblockAddStove();
        unblockAuto();
        unblockPower()
    }
}

function changeTypeUser(type) {
    if (type === typeUserArray[2]) {
        subtractForStove.style.display = "none";
        addForStove.style.display = "none";
        subtractForPipe.style.display = "none";
        addForPipe.style.display = "none";
        data.style.display = "none";
        settings.style.display = "none";
    }
}

function httpGet(servoType, servoValue, thresholdType, mod) {
    var xhr = new XMLHttpRequest();
    var thresholdType = "on";
    var mod = "off";
    xhr.open('GET', '/api/TaskCreate?servoType=' + servoType + '&servoValue=' + servoValue + '&thresholdType=' + thresholdType + '&mod=' + mod, false);
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

subtractForStove.onclick = function () {
    
    if ((valueStove > 0) && (powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        resetAuto();
        httpGet(0, valueStove - 10);
        servoStoveValue.innerText = (valueStove -= 10).toString() + "°";
        changeImageStove(valueStove);
        changeEventsText(window.eventsArray.servoStove.subtract, "10°");
    }
};

addForStove.onclick = function () {
    
    if ((valueStove < 90) && (powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        resetAuto();
        httpGet(0, valueStove + 10);
        servoStoveValue.innerText = (valueStove += 10).toString() + "°";
        changeImageStove(valueStove);
        changeEventsText(window.eventsArray.servoStove.add, "10°");
    }
};

subtractForPipe.onclick = function () {
    
    if ((valuePipe > 0) && (powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        resetAuto();
        httpGet(1, valuePipe - 10);
        servoPipeValue.innerText = (valuePipe -= 10).toString() + "°";
        changeImagePipe(valuePipe);
        changeEventsText(window.eventsArray.servoPipe.subtract, "10°");
    }
};

addForPipe.onclick = function () {
    
    if ((valuePipe < 90) && (powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        resetAuto();
        httpGet(1, valuePipe + 10);
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


function startIntervalStatistics() {
    setInterval(function () {
        setStatus();
        if ((autoStatus == true) && (window.typeStatus == "online")) {
            (async () => await updateImage())();
        }
        if (window.typeStatus == "online") {
            changeImageGas();
        }
    }, 2000)
}

function startIntervalEvents() {
    var startOffline;
    var freezingAllButtons;

    setInterval(function () {
        if ((window.typeStatus == "online") && (firstEvent == false))
        {
            firstEvent = true;
            changeEventsText(window.eventsArray.systemPi.online);
        }

        if ((window.typeStatus == "offline") && (lastEvent == false)) {
            blockAllButtons();
            startOffline = setTimeout(() => offlineSystem(), 5000);
            lastEvent = true;
            statusButtons = true;
        }
        if ((window.typeStatus == "online") && (lastEvent == true)) {
            changeEventsText(window.eventsArray.systemPi.online);
        }
        if (window.typeStatus == "online") {
            clearTimeout(startOffline);
            lastEvent = false;
            if (statusButtons == true) {
                statusButtons = false;
                unblockAllButtons();
            }
        }
        
    }, 5000)
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
    if (window.typeStatus == typeStatusArray[0]) {
        if ((autoStatus == true) && (powerStatus == false)) {
            buttonAuto.src = "../images/button-auto.svg";
            autoStatus = false;
            return;
        }
        if ((autoStatus == false) && (powerStatus == false)) {
            buttonAuto.src = "../images/button-auto--active.svg";
            autoStatus = true;
            return;
        }
    }
}

buttonPower.onclick = function changeImagePower() {
    if (window.typeStatus == typeStatusArray[0]) {
        resetAuto();
        if (powerStatus == true) {
            buttonPower.src = "../images/button-power.svg";
            powerStatus = false;
            blockServoButtons();
            return;
        }
        if (powerStatus == false) {
            buttonPower.src = "../images/button-power--active.svg";
            powerStatus = true;
            blockServoButtons();
            return;
        }
    }
}

buttonAuto.addEventListener("mouseover", function (event) {
    if (window.typeStatus == typeStatusArray[0]) {
        if ((autoStatus == true) && (powerStatus == false)) {
            buttonAuto.src = "../images/button-auto.svg";
            return;
        }
        if ((autoStatus == false) && (powerStatus == false)) {
            buttonAuto.src = "../images/button-auto--active.svg";
            return;
        }
    }
});

buttonAuto.addEventListener("mouseout", function (event) {
    if (window.typeStatus == typeStatusArray[0]) {
        if ((autoStatus == true) && (powerStatus == false)) {
            buttonAuto.src = "../images/button-auto--active.svg";
            return;
        }
        if ((autoStatus == false) && (powerStatus == false)) {
            buttonAuto.src = "../images/button-auto.svg";
            return;
        }
    }
});

buttonPower.addEventListener("mouseover", function (event) {
    if (window.typeStatus == typeStatusArray[0]) {
        if (powerStatus == true) {
            buttonPower.src = "../images/button-power.svg";
            return;
        }
        if (powerStatus == false) {
            buttonPower.src = "../images/button-power--active.svg";
            return;
        }
    }
});

buttonPower.addEventListener("mouseout", function (event) {
    if (window.typeStatus == typeStatusArray[0]) {
        if (powerStatus == true) {
            buttonPower.src = "../images/button-power--active.svg";
            return;
        }
        if (powerStatus == false) {
            buttonPower.src = "../images/button-power.svg";
            return;
        }
    }
});

buttonSubtractPipe.addEventListener("mouseover", function (event) {
    if ((powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        buttonSubtractPipe.src = "../images/subtract--active.svg";
        return;
    } 
});

buttonAddPipe.addEventListener("mouseover", function (event) {
    if ((powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        buttonAddPipe.src = "../images/add--active.svg";
        return;
    }
});

buttonSubtractStove.addEventListener("mouseover", function (event) {
    if ((powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        buttonSubtractStove.src = "../images/subtract--active.svg";
        return;
    }
});

buttonAddStove.addEventListener("mouseover", function (event) {
    if ((powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        buttonAddStove.src = "../images/add--active.svg";
        return;
    }
});

buttonSubtractPipe.addEventListener("mouseout", function (event) {
    if ((powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        buttonSubtractPipe.src = "../images/subtract.svg";
        return;
    }
});

buttonAddPipe.addEventListener("mouseout", function (event) {
    if ((powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        buttonAddPipe.src = "../images/add.svg";
        return;
    }
});

buttonSubtractStove.addEventListener("mouseout", function (event) {
    if ((powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        buttonSubtractStove.src = "../images/subtract.svg";
        return;
    }
});

buttonAddStove.addEventListener("mouseout", function (event) {
    if ((powerStatus == false) && (window.typeStatus == typeStatusArray[0])) {
        buttonAddStove.src = "../images/add.svg";
        return;
    }
});
