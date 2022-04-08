window.responseData = [{ "tmp0": 0, "tmp1": 0, "tmp2": 0, "pressure": 0, "gas": 0, "water": 0, "servo0": 0, "servo1": 0, "piUserId": 0, "date": "", "id": 0, "piUser": null }]
function updateResponse() {

    setInterval(function () {
        updateData();
    }, 2000)

    function updateData(/*dataY, dataX*/) {
        (async () => await fetchAsync())();
    }

    async function fetchAsync() {
        let response = await fetch('/api/GetData?count=1');
        let data = await response.json();
        window.responseData = data;
    }
}