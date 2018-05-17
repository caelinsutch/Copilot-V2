var disp = document.getElementById('disp');
var h = 00; // Define the Hours counter.
var m = 00; // Define the Minutes Counter.
var s = 00; // Define the Seconds Counter.
var t;

function start() {
  clearInterval(t);
  document.getElementById('stop-btn').innerHTML = "STOP";
  t = setInterval(function() {
    if (s == 59) {
      if (m == 59) {
        h += 1;
        m = 00;
      } else m += 1; s = 0;
    } else s += 1;
    document.getElementById('disp').innerHTML = h + ":" + m + ":" + s;
  }, 1000);
}

function stop() {
  clearInterval(t);
  if (document.getElementById('stop-btn').innerHTML == "CLEAR") {
    //clearInterval(t);
    s = 0; // Reset the clock;
    m = 0;
    h = 0;
    document.getElementById('disp').innerHTML = h + ":" + m + ":" + s;
  } else {
  clearInterval(t);
  document.getElementById('stop-btn').innerHTML = "CLEAR";
  }
}
