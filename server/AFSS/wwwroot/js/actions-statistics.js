var servoStoveValue = document.getElementById('servoStoveValue');
var servoPipeValue = document.getElementById('servoPipeValue');
var typeUserArray = ["user", "admin", "guest"];
var typeUser = typeUserArray[0];
var gasStatusArray = ["noGas", "someGas", "lotGas"];
var gasStatus = gasStatusArray[0];
var valueStove = parseInt(servoStoveValue.textContent);
var valuePipe = parseInt(servoPipeValue.textContent);
var auto = document.getElementById('auto');
var power = document.getElementById('power');
var autoStatus = true;
var powerStatus = false;
typeStatusArray = ["online", "offline"];

function parseDate(date) {
    return new Date(parseInt(/-?\d+/.exec(date)[0]))
}

function setStatus() {
    var timeNow = new Date();
    var timeNowUTC = new Date(timeNow.getTime() + timeNow.getTimezoneOffset() * 60000);
    var timeDb = moment(window.responseData[0].date).toDate();
    var now_utc = Date.UTC(timeNowUTC.getUTCFullYear(), timeNowUTC.getUTCMonth(), timeNowUTC.getUTCDate(), timeNowUTC.getUTCHours(), timeNowUTC.getUTCMinutes(), timeNowUTC.getUTCSeconds());
    var db_utc = Date.UTC(timeDb.getUTCFullYear(), timeDb.getUTCMonth(), timeDb.getUTCDate(), timeDb.getUTCHours(), timeDb.getUTCMinutes(), timeDb.getUTCSeconds());

    if ((now_utc - db_utc) <= 15000) {
        console.log("online");
        window.typeStatus = typeStatusArray[0];
    } else {
        console.log("offline");
        window.typeStatus = typeStatusArray[1];
    }
    //var yearNow = timeNowUTC.getFullYear();
    //var monthNow = timeNowUTC.getMonth();
    //var dayNow = timeNowUTC.getDate();
    //var hoursNow = timeNowUTC.getHours();
    //var minutesNow = timeNowUTC.getMinutes();

    //var yearDb = timeDb.getFullYear();
    //var monthDb = timeDb.getMonth();
    //var dayDb = timeDb.getDate();
    //var hoursDb = timeDb.getHours();
    //var minutesDb = timeDb.getMinutes();

    //if ((yearNow == yearDb) && (monthNow == monthDb) && (dayNow == dayDb) && (hoursNow == hoursDb) && ((minutesNow - minutesDb) <= 1)) {
    //    console.log("URA");
    //}
}

changeImageGas();
changeTypeUser(typeUser);

function resetAuto() {
    var autoImage = document.getElementById("auto-image");
    autoStatus = false;
    autoImage.src = "../images/button-auto.svg";
}
function changeEventsText(text) {
    var eventsText = document.getElementById("eventsText");
    eventsText.innerHTML +=  ' <div class="events__item"><div class = "text-light text-light--black">'+ text + '</div></div>';
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

function httpGet(type, value) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/TaskCreate?type=' + type + '&value=' + value, false);
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
    resetAuto();
    if (valueStove > 0) {
        httpGet(0, valueStove - 10);
        servoStoveValue.innerText = (valueStove -= 10).toString() + "°";
        changeImageStove(valueStove);
    }
};

addForStove.onclick = function () {
    resetAuto();
    if (valueStove < 90) {
        httpGet(0, valueStove + 10);
        servoStoveValue.innerText = (valueStove += 10).toString() + "°";
        changeImageStove(valueStove);
    }
};

subtractForPipe.onclick = function () {
    resetAuto();
    if (valuePipe > 0) {
        httpGet(1, valuePipe - 10);
        servoPipeValue.innerText = (valuePipe -= 10).toString() + "°";
        changeImagePipe(valuePipe);
    }
};

addForPipe.onclick = function () {
    resetAuto();
    if (valuePipe < 90) {
        httpGet(1, valuePipe + 10);
        servoPipeValue.innerText = (valuePipe += 10).toString() + "°";
        changeImagePipe(valuePipe);
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

async function updateImage() {
    var responseServoStove = window.responseData[0].servo0;
    var responseServoPipe = window.responseData[0].servo1;

    changeImageStove(responseServoStove);
    changeImagePipe(responseServoPipe);

    valueStove = responseServoStove;
    valuePipe = responseServoPipe;

    servoStoveValue.innerText = (responseServoStove).toString() + "°";
    servoPipeValue.innerText = (responseServoPipe).toString() + "°";
}


auto.onclick = function changeImageAuto() {
    var autoImage = document.getElementById("auto-image");
    if (autoStatus == true) {
        autoImage.src = "../images/button-auto.svg";
        autoStatus = false;
        return;
    }
    if (autoStatus == false) {
        autoImage.src = "../images/button-auto--active.svg";
        autoStatus = true;
        return;
    }
}

power.onclick = function changeImagePower() {
    resetAuto();
    var powerImage = document.getElementById("power-image");
    if (powerStatus == true) {
        powerImage.src = "../images/button-power.svg";
        powerStatus = false;
        return;
    }
    if (powerStatus == false) {
        powerImage.src = "../images/button-power--active.svg";
        powerStatus = true;
        return;
    }
}
