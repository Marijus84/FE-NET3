//! Variables types;
//?global variable

firstVariable = 2023;
console.log(firstVariable);

//?old school var - function scoped;

var functionScoped = "Marijus";
console.log(functionScoped);

var greeting = "Hello";
if (true) {
  var greeting = "Bye bye";
}
console.log(greeting);

//?let - mutable, block scoped;

let greeting2 = "Labas";
// console.log(greeting2);

if (true) {
  let greeting2 = "Viso gero";
  //   let greeting3 = "Hola";
}

console.log(greeting2);
// console.log(greeting3);

//? const - constant, block scoped;

const firstConstant = true;
const GOOGLE_URL = "https://google.com";
// firstConstant = false;
console.log(firstConstant);

//! Basic data types
//? String
const occupation = "IT";
const occupationSecond = "Student";
const occupationThird = `Child ${firstVariable}`;
console.log(occupationThird);
console.log(typeof occupation, typeof occupationSecond, typeof occupationThird);

//? Number
const year = 2023;
const temperature = 3.55;
const largeNumber = 5e6;
console.log(year, temperature, largeNumber);
console.log(typeof year, typeof temperature, typeof largeNumber);

//? Boolean
const isDark = true;
const isSummer = false;
console.log(typeof isDark, typeof isSummer);

//!Advanced data types
//? Array
const array = [];
const array2 = [1, "labas", true];
console.log(array2[1]);

//?Object
const car = {
  color: "blue",
  model: "Passat",
  year: 2009,
  addOns: ["ABS", "ESP"],
};
console.log(car);
console.log(car.color);
console.log(car["color"]);

let newOne;
console.log(typeof newOne);

//! task 1:
const auto = "Audi";
let town = "Vilnius";
const floor = 5;
console.log(auto, town, floor);

//! task 2:
let admin;
let name;
name = "John";
admin = name;
console.log(admin);

document.body.textContent = admin;

//!Basic operators
const a = 10;
const b = 3;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);
console.log(a * b);

const myName = "Marijus";
const justNumber = "5";

console.log(a + myName);
console.log("Marijus" + " Romanovas");
console.log(a - justNumber);
console.log(a + justNumber);

const stringNumber = "2.22";
console.log(parseInt(stringNumber));
console.log(parseFloat(stringNumber));

//! console and alert

// alert("Hello, I am an alert");

// const confirmResult = confirm("Are you tired?");
// console.log(confirmResult);

const promptResult = prompt("Enter your age?", 18);
if (!isNaN(promptResult)) {
  console.log("it is a number");
} else {
  console.warn("I do nothing with this");
}
console.log(promptResult + "labas");
console.log(typeof promptResult);
