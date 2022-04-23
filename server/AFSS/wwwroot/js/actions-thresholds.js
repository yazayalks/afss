var buttonClear = document.getElementById('clear');
var buttonReset = document.getElementById('reset');
var buttonUpdate = document.getElementById('update');
var piKey = '0000000000000000';

getPiKeys();
GetThresholds('last');


buttonClear.onclick = function () {
    document.getElementById("MinTmpStove").value = "";
    document.getElementById("MaxTmpStove").value = "";
    document.getElementById("CriticalTmpStove").value = "";

    document.getElementById("MinTmpTank").value = "";
    document.getElementById("MaxTmpTank").value = "";
    document.getElementById("CriticalTmpTank").value = "";

    document.getElementById("MinTmpRoom").value = "";
    document.getElementById("MaxTmpRoom").value = "";
    document.getElementById("CriticalTmpRoom").value = "";

    document.getElementById("MinWaterLevel").value = "";
    document.getElementById("MaxWaterLevel").value = "";
    document.getElementById("VolumeWaterLevel").value = "";

    document.getElementById("MinGasLevel").value = "";
    document.getElementById("MaxGasLevel").value = "";
    document.getElementById("CriticalGasLevel").value = "";

    document.getElementById("MinPressureTank").value = "";
    document.getElementById("MaxPressureTank").value = "";
    document.getElementById("CriticalPressureTank").value = "";
}

buttonReset.onclick = function () {
    if (piKey == '0000000000000000') {
        alert('Выберите ключ Raspberry.');
        return;
    }
    (async () => await GetThresholds('first', piKey))();
}

buttonUpdate.onclick = function () {
    if (piKey == '0000000000000000') {
        alert('Выберите ключ Raspberry.');
        return;
    }
    (async () => await GetThresholds('last', piKey))();
}

async function GetThresholds(count, key) {
    let response = await fetch('/api/GetThresholds?count=' + count);
    let data = await response.json();
    document.getElementById("MinTmpStove").value = data[0].minTmpStove;
    document.getElementById("MaxTmpStove").value = data[0].maxTmpStove;
    document.getElementById("CriticalTmpStove").value = data[0].criticalTmpStove;

    document.getElementById("MinTmpTank").value = data[0].minTmpTank;
    document.getElementById("MaxTmpTank").value = data[0].maxTmpTank;
    document.getElementById("CriticalTmpTank").value = data[0].criticalTmpTank;

    document.getElementById("MinTmpRoom").value = data[0].minTmpRoom;
    document.getElementById("MaxTmpRoom").value = data[0].maxTmpRoom;
    document.getElementById("CriticalTmpRoom").value = data[0].criticalTmpRoom;

    document.getElementById("MinWaterLevel").value = data[0].minWaterLevel;
    document.getElementById("MaxWaterLevel").value = data[0].maxWaterLevel;
    document.getElementById("VolumeWaterLevel").value = data[0].volumeWaterLevel;

    document.getElementById("MinGasLevel").value = data[0].minGasLevel;
    document.getElementById("MaxGasLevel").value = data[0].maxGasLevel;
    document.getElementById("CriticalGasLevel").value = data[0].criticalGasLevel;

    document.getElementById("MinPressureTank").value = data[0].minPressureTank;
    document.getElementById("MaxPressureTank").value = data[0].maxPressureTank;
    document.getElementById("CriticalPressureTank").value = data[0].criticalPressureTank;
}


document.addEventListener('keyup', search);

function search() {
    let input = document.getElementById("inputSearch");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("list");
    let li = ul.getElementsByTagName("li");

    // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var listKeys = document.querySelector(".list-keys");

listKeys.addEventListener("click", function (event) {
    var otherKeys = document.querySelectorAll('a');
    for (var i = 0; i < otherKeys.length; i++) {
        otherKeys[i].style.fontFamily = "Stem-Light";
    }
    let target = event.target.closest('a');
    if (!target) return;
    target.style.fontFamily = "Stem-Bold";
    piKey = target.innerHTML;
    changePiKeys(piKey);
    getInfoUser(piKey);
    GetThresholds('last', piKey);
});

async function  getInfoUser(key) {
    let response = await fetch('/api/GetInfoUser?PiKey=' + key);
    let data = await response.json();
    document.getElementById("nameUser").innerHTML = (data.name) ? data.name : 'null';
    document.getElementById("emailUser").innerHTML = (data.email) ? data.email : 'null';
    document.getElementById("phoneUser").innerHTML = (data.phone) ? data.phone : 'null';
}

async function changePiKeys(key) {

    await fetch('/api/UpdateKey?PiKey=' + key);
}

async function getPiKeys() {
    let response = await fetch('/api/GetPiKeys');
    let data = await response.json();
    var i = data.length;
    while (i != 0) {
        i--;
        listKeys.innerHTML += ' <li class = "item__key"><a href="#">' + data[i].piKey + '</a></li>';
    }
}