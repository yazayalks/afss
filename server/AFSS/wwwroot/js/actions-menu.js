out.onclick = function() {
    document.location.href = "/Selection";
};

typeStatusArray = ["online", "offline"];
typeMod = ["damp", "automation", "custom", "critical"];
window.typeStatus = typeStatusArray[1];
window.mod = typeMod[2];

changeStatus();

function setStatus() {
    var timeNow = new Date();
    var timeNowUTC = new Date(timeNow.getTime() + timeNow.getTimezoneOffset() * 60000);
    var timeDb = moment(window.responseData[0].date).toDate();
    var now_utc = Date.UTC(timeNowUTC.getUTCFullYear(), timeNowUTC.getUTCMonth(), timeNowUTC.getUTCDate(), timeNowUTC.getUTCHours(), timeNowUTC.getUTCMinutes(), timeNowUTC.getUTCSeconds());
    var db_utc = Date.UTC(timeDb.getUTCFullYear(), timeDb.getUTCMonth(), timeDb.getUTCDate(), timeDb.getUTCHours(), timeDb.getUTCMinutes(), timeDb.getUTCSeconds());

    if ((now_utc - db_utc) <= 10000) {
        window.typeStatus = typeStatusArray[0];
        window.mod = window.responseData[0].mod;
    } else {
        window.typeStatus = typeStatusArray[1];
    }
}


function changeStatus() {
    if (window.typeStatus === typeStatusArray[0]) {
        statusText.innerText = "online";
        statusImage.style.background = "#FEC715";
    }

    if (window.typeStatus === typeStatusArray[1]) {
        statusText.innerText = "offline";
        statusImage.style.background = "#FE611E";
    }
}

function changeKey(text) {
    var key = document.getElementById("key");
    key.innerText = text;
}

function changeLogin(text) {
    var login = document.getElementById("login");
    login.innerText = text;
}

function startIntervalMenu() {
    setInterval(function () {
        setStatus();
        changeStatus();
    }, 2000)

}