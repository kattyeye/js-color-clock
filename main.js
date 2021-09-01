const $clock = document.querySelector('clock');
const $background = document.querySelector('.clock-face')
const $currentDisplay = document.querySelector('.clock-display');
console.log($currentDisplay);


// showTime.addEventListener("mouseover", hexCode);


function showTime () {
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

    let currentTime = hour + ":" + min + ":" + sec;
    $currentDisplay.textContent = currentTime;

    console.log(currentTime);
    // color = '#' + hour + min + sec;
    // document.body.style.background = color;
    // document.getElementsByClassName("clock").innerHTML = color;


    // hexCode = "#" + hour + min + sec;
    // document.getElementsByClassName("clock-display").innerHTML = hexCode;

    // const counter = document.querySelector('clock-display'); 
}

setInterval(showTime, 1000); //start

// showTime();
//end


// document.getElementById("clock-display").textContent = currentTime;
// document.getElementsByClassName("clock-display").textContent = currentTime;








