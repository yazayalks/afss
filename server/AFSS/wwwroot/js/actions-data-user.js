var buttonConfirmEmail = document.getElementById('confirm');


buttonConfirmEmail.onclick = function () {

    console.log("Сукааа");
    httpGet();
};

function httpGet() {
    console.log("Сукааа");
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/DataUser/ConfirmEmail', false);
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