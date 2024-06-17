function compareProperties(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      result[key] = obj1[key];
    }
  }
  return Object.keys(result).length ? result : "Нет совпадений";
}

let obj1 = { b: 2, c: 3, d: 4, a: 1 };
let obj2 = { a: 1, b: 2, e: 5, f: 6 };

console.log(compareProperties(obj1, obj2)); //
