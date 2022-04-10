var servoStoveValue = document.getElementById('servoStoveValue');
var servoPipeValue = document.getElementById('servoPipeValue');
var typeUserArray = ["user", "admin", "guest"];
var typeUser = typeUserArray[0];
var gasStatus = false;

changeImageGas(gasStatus);
changeTypeUser(typeUser);

function changeEventsText(text) {
    var eventsText = document.getElementById("eventsText");
    eventsText.innerHTML +=  ' <div class="events__item"><div class = "text-light text-light--black">'+ text + '</div></div>';
}

function changeImageGas(value) {
    var imageGasRoom = document.getElementById("imageGasRoom");
    var gasRoomValue = document.getElementById("gasRoomValue");
    if (gasStatus) {
        imageGasRoom.src = "../images/gas-room-1.png";
        gasRoomValue.innerText = "Задымление помещения"
    }
    else {
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

var valueStove = parseInt(servoStoveValue.textContent);
var valuePipe = parseInt(servoPipeValue.textContent);

subtractForStove.onclick = function() {
    if (valueStove > 0) {
        servoStoveValue.innerText = (valueStove -= 10).toString() + "°";
        changeImageStove(valueStove);
    }
};

addForStove.onclick = function() {
    if (valueStove < 90) {
        servoStoveValue.innerText = (valueStove += 10).toString() + "°";
        changeImageStove(valueStove);
    }
};

subtractForPipe.onclick = function() {
    if (valuePipe > 0) {
        servoPipeValue.innerText = (valuePipe -= 10).toString() + "°";
        changeImagePipe(valuePipe);
    }
};

addForPipe.onclick = function() {
    if (valuePipe < 90) {
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

var auto = document.getElementById('auto');
var power = document.getElementById('power');
var autoStatus = true;
var powerStatus = false;

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





