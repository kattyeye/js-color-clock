const $clock = document.querySelector('clock');
const $background = document.querySelector('.clock-face')
const $currentDisplay = document.querySelector('.clock-display');
console.log($currentDisplay);
const $progressBar = document.querySelector('.clock-progress-bar');

let color;
let currentTime;
let mouseIsOver = false;

$currentDisplay.addEventListener("mouseenter", mouseEnter);
$currentDisplay.addEventListener("mouseleave", mouseLeave);
function mouseEnter() {
    $currentDisplay.textContent = color;
    mouseIsOver = true;
}
function mouseLeave() {
    $currentDisplay.textContent = currentTime;
    mouseIsOver = false;
}


function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let session = "AM";

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
        // am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        session = "AM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime = hour + ":" + min + ":" + sec;
    if (mouseIsOver === false) {
        $currentDisplay.textContent = currentTime;
    }

    color = '#' + hour + min + sec;
    console.log(currentTime, color);
    $background.style.background = color;
    // document.getElementsByClassName("clock").innerHTML = color;

    $progressBar.style.width = ((min / 60) * 100) + "%";
    console.log(((min / 60) * 100) + "%");
    // const counter = document.querySelector('clock-display');
}

setInterval(showTime, 1000); 


// document.getElementById("clock-display").textContent = currentTime;
// document.getElementsByClassName("clock-display").textContent = currentTime;