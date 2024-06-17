let seconds = 10;

let timer = setInterval(function () {
  seconds--;
  console.log(seconds);

  if (seconds <= 0) {
    clearInterval(timer);
    console.log("Timer stopped!");
  }
}, 1000);
