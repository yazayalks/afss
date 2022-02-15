out.onclick = function() {
    document.location.href = "../pages/selection.html";
};

var typeStatusArray = ["online", "offline"];
var typeStatus = typeStatusArray[0];

changeStatus();

function changeStatus() {
    if (typeStatus === typeStatusArray[0]) {
        statusText.innerText = "online";
        statusImage.style.background = "#FEC715";
    }

    if (typeStatus === typeStatusArray[1]) {
        statusText.innerText = "offline";
        statusImage.style.background = "#FE611E";
    }
}
