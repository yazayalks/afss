out.onclick = function() {
    document.location.href = "/Selection";
};

typeStatusArray = ["online", "offline"];
window.typeStatus = typeStatusArray[1];

changeStatus();


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
        changeStatus();
    }, 2000)

}