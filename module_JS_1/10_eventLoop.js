function outputWithDelay(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

outputWithDelay(() => {
  console.log("Время вышло!");
});
