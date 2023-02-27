//! Functions

//? function declaration
// function printMyName() {
//   console.log("My name is Marijus");
// }

// printMyName();

//? function with inner variables
// function printMyName() {
//   const myName = "Marijus";
//   console.log("My name is: " + myName);
// }

// printMyName();
// console.log(myName);

//? function with outer variables
// let myName = "Marijus";

// function printMyName() {
//   console.log("My name is: " + myName);
//   myName = "Jonas";
// }

// console.log(myName);
// console.log(printMyName());
// console.log(myName);

//? function with parameters
// const myName = "Marijus";

// function printMyName(data) {

//   console.log("My name is: " + data);
// }

// printMyName(myName);

//? function default values

// function printMyName(data = "not set") {
//   console.log("My name is: " + data);
// }

// printMyName("Marijus");

//? function returning value

// function sum(a, b) {
//   return a + b;
//   console.log("I am here");
// }

// const result = sum(5, 6);
// console.log(result);

//?Task 5-6
// Pasirašykite funkciją kuri pagal amžių,
//  kurį įrašysime po funkcijos iškviesdami funkciją dalyje nuspręs
//  ar žmogui galima gerti energetinį.
//  Jei 18 ir daugiau, funkcija returnins alerta,
//  jei mažiau returnins pasiklausą ar tėvai davė leidimą (confirm, pasigooglinti).

// function validateAge(age) {
//   age >= 18
//     ? alert("You are old enough")
//     : confirm("Did you get permission from your parents?");
// }

// validateAge(17);

//! Arrow functions

// function printMyName() {
//   console.log("My name is Marijus");
// }

// printMyName();

const printMyNameArrow = (name) => console.log("My name is: " + name);
printMyNameArrow("Marijus");

const sum = (a, b) => a + b;
console.log(sum(3, 4));
