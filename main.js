// const $currentTime = document.querySelector ('.clock-display');
// console.log($currentTime);


// showTime.addEventListener("mouseover", hexCode);

setInterval (showTime, 1000);
function showTime () {
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
let session = "AM";

if (hour > 12) {
    hour = hour - 12;
    session = "PM";
}
if (hour == 0) {
    hour = 12;
    session = "AM";
}

hour = (hour < 10) ? "0" + hour : hour;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;

let currentTime = hour + ":" + min + ":" + sec;

color = '#' + hour + min + sec;
document.body.style.background = color;
document.getElementsByClassName("clock").innerHTML = color;


hexCode = "#" + hour + min + sec;
document.getElementsByClassName("clock-display").innerHTML = hexCode;

document.getElementById("clock-display").innerText = currentTime;
// document.getElementsByClassName("clock-display").textContent = currentTime;

}

showTime();
