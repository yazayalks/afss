var servoStoveValue = document.getElementById('servoStoveValue');

var value = parseInt(servoStoveValue.textContent);
subtract.onclick = function() {
    if (value > 0) {
        servoStoveValue.innerText = (value -= 10).toString() + "°";
        changeImageStove(value);
    }
};

add.onclick = function() {
    if (value < 90) {
        servoStoveValue.innerText = (value += 10).toString() + "°";
        changeImageStove(value);
    }
};

function changeImageStove(value) {
    var imageServoStove = document.getElementById("imageServoStove");
    imageServoStove.src = "../images/servo-stove-" + value / 10 +".png";
}




