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
    var ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + m : m;
    var strTime = h + ':' + m + ' ' + ampm;
    return strTime;
}
console.log(formatAMPM(new Date()));
