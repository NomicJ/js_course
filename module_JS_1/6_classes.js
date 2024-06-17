class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayInfo() {
    return `Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`;
  }
}

let person1 = new Person("Аня", 30, "Беларусь");
let person2 = new Person("Петя", 25, "Швеция");

console.log(person1.displayInfo());
console.log(person2.displayInfo());

console.log(person1.name);
