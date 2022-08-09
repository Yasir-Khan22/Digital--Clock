const hourElem = document.getElementById("hour")
const minuteElem = document.getElementById("minutes")
const secondsElem = document.getElementById("seconds")
const ap_pmElem = document.getElementById("am__pm")


// METHOD NUMBER 1;

// function updateClock() {
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();

//     let ampm = "AM";

//     if (h > 12) {
//         h = h - 12;
//         ampm = "PM";
//     }

//     hour.innerText = h;
//     minute.innerText = m;
//     seconds.innerText = s;
//     ap_pm.innerText = ampm;

//     setTimeout(() => {
//         updateClock()
//     }, 1000)

// }
// updateClock()


// METHOD NUMBER 2;
const updateClock = (date) => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours %= 12;
    hours = hours || 12;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    hourElem.innerText = `${hours}`;
    minuteElem.innerText = `${minutes}`;
    secondsElem.innerText = `${seconds}`;
    ap_pmElem.innerText = ampm;

    setTimeout(() => {
        updateClock()
    }, 1000)

};

console.log(updateClock(new Date()));