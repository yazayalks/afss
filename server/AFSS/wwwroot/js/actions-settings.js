var buttonSound = document.getElementById('button-sound');
var buttonLight = document.getElementById('button-light');
var soundStatus = false;
var lightStatus = false;


buttonSound.addEventListener("mouseover", function (event) {
        if (soundStatus == true) {
            buttonSound.src = "../images/button-sound.svg";
            return;
        }
        if (soundStatus == false) {
            buttonSound.src = "../images/button-sound--active.svg";
            return;
        }
});

buttonSound.addEventListener("mouseout", function (event) {
        if (soundStatus == true) {
            buttonSound.src = "../images/button-sound--active.svg";
            return;
        }
        if (soundStatus == false) {
            buttonSound.src = "../images/button-sound.svg";
            return;
        }
});

buttonSound.onclick = function changeImageAuto() {
        if (soundStatus == true) {
            buttonSound.src = "../images/button-sound.svg";
            soundStatus = false;
            httpGetSetting();
            return;
        }
        if (soundStatus == false) {
            buttonSound.src = "../images/button-sound--active.svg";
            soundStatus = true;
            httpGetSetting();
            return;
        }
}








buttonLight.addEventListener("mouseover", function (event) {
    if (lightStatus == true) {
        buttonLight.src = "../images/button-light.svg";
        return;
    }
    if (lightStatus == false) {
        buttonLight.src = "../images/button-light--active.svg";
        return;
    }
});

buttonLight.addEventListener("mouseout", function (event) {
    if (lightStatus == true) {
        buttonLight.src = "../images/button-light--active.svg";
        return;
    }
    if (lightStatus == false) {
        buttonLight.src = "../images/button-light.svg";
        return;
    }
});

buttonLight.onclick = function changeImageAuto() {
    if (lightStatus == true) {
        buttonLight.src = "../images/button-light.svg";
        lightStatus = false;
        httpGetSetting();
        return;
    }
    if (lightStatus == false) {
        buttonLight.src = "../images/button-light--active.svg";
        lightStatus = true;
        httpGetSetting();
        return;
    }
}

function updateImage() {
    if (soundStatus == true) {
        buttonSound.src = "../images/button-sound--active.svg";
    }
    if (soundStatus == false) {
        buttonSound.src = "../images/button-sound.svg";
    }
    if (lightStatus == true) {
        buttonLight.src = "../images/button-light--active.svg";
    }
    if (lightStatus == false) {
        buttonLight.src = "../images/button-light.svg";
    }
}

function httpGetSetting() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/UpdatePiSettings?sound=' + soundStatus + '&light=' + lightStatus, false);
    xhr.send();
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log(xhr.responseText); 
    }
}

async function fetchAsync() {
    let response = await fetch('/api/GetPiSettings');
    let data = await response.json();
    responseData = data;
    soundStatus = responseData[0].sounds;
    lightStatus = responseData[0].light;
    updateImage();
    console.log(responseData[0].sounds);
}