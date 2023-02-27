//! Arrays

//?Create an array

const firstArray = new Array();
console.log(firstArray);

const secondArray = [];
console.log(secondArray);

const cars = ["VW", "Audi", "Mazda"];
console.log(cars);

console.log(cars[0]);
console.log(cars[2]);

cars[2] = "Skoda";
console.log(cars[2]);

cars[4] = "Suzuki";
console.log(cars);

console.log(cars.length);
console.log(secondArray.length);

//? looping through array
//?for loop

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//? for of loop
for (const car of cars) {
  console.log("For of result: " + car);
}
