function clock() {
    var hours = document.getElementById('hour');
    var min = document.getElementById('minute');
    var sec = document.getElementById('second');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hours.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
}

var interval = setInterval(clock, 1000);