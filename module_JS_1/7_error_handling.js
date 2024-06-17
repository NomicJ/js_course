function checkTheNumber(num) {
  try {
    if (!Number.isInteger(num)) {
      throw new Error("Число не являеся целым!");
    }
    console.log("Число целое.");
  } catch (error) {
    console.log(error.message);
  }
  return num;
}

console.log(checkTheNumber(2.2));
