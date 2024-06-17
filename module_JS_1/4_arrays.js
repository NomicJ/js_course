function arrayUpdate(array) {
  let newArray = array.map((n) => n * 1.1);
  return newArray;
}

console.log(arrayUpdate([10, 20, 30, 40]));
