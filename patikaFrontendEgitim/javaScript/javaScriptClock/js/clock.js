var name = prompt("Lütfen adınızı yazınız");
document.querySelector("#myName").innerHTML = name;

function getTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();


    switch (day) {
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Salı"
            break;
        case 3:
            day = "Çarşamba"
            break;
        case 4:
            day = "Perşembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
        default:
            day = "Pazar"
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second;
    document.querySelector("#myClock").innerHTML = time;
    document.querySelector("#myClock").textContent = time;
    setTimeout(getTime, 1);

}

getTime();