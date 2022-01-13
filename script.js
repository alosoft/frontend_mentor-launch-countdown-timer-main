var today = new Date();
// add two days
today.setDate(today.getDate() + 2);
var countDownDate = today.getTime();

const day_element = document.querySelector('.days');
const hours_element = document.querySelector('.hours');
const minutes_element = document.querySelector('.minutes');
const seconds_element = document.querySelector('.seconds');

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day_element.innerHTML = `${days.toString().length === 1 ? "0" + days : days}`;
    hours_element.innerHTML = `${hours.toString().length === 1 ? "0" + hours : hours}`;
    minutes_element.innerHTML = `${minutes.toString().length === 1 ? "0" + minutes : minutes}`;
    seconds_element.innerHTML = `${seconds.toString().length === 1 ? "0" + seconds : seconds}`;

    
    // If the count down is finished, stop
    if (distance < 0) {
        clearInterval(x);
        alert('Countdown finished')
        day_element.innerHTML = "00"
        hours_element.innerHTML = "00"
        minutes_element.innerHTML = "00"
        seconds_element.innerHTML = "00"
    
    }
}, 1000);