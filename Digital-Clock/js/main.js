const hour = document.getElementById("hour")
const minute = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const ap_pm = document.getElementById("am__pm")

function formatAMPM(date) {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    console.log(h)
    console.log(m)
    console.log(s)

    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    m = m < 10 ? '0' + { m } : m;
    s = s < 10 ? '0' + { s } : m;

    var ampm = h >= 12 ? 'pm' : 'am';

    hour.innerText = h;
    minute.innerText = m;
    seconds.innerText = s;
    ampm.innerText = ampm;

}
formatAMPM()
