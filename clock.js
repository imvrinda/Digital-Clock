function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let millSec = date.getMilliseconds();
  let formatMeridian = convertFormat(hours);
  hours = checkHour(hours);
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  millSec = addZero(millSec);

  document.getElementById(
    "clock"
  ).innerHTML = `${hours}: ${minutes}:${seconds}:${millSec}: ${formatMeridian}`;
}

function convertFormat(time) {
  let format = "AM";
  if (time >= 12) {
    format = "PM";
  }
  return format;
}

function checkHour(time) {
  if (time > 12) {
    time = time - 12;
  }
  if (time == 0) {
    time = 12;
  }
  return time;
}

function addZero(time) {
  if (time < 12) {
    time = "0" + time;
  }
  return time;
}
showTime()
setInterval(showTime, 2)
