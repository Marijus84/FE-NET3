//! Array methods 2

//?join, toString
const shoppingList = ["Milk", "Eggs", "Potato"];
console.log(shoppingList.join(" "));
console.log(shoppingList.join("->"));
console.log(shoppingList.toString());

//?splice
const spliceArray = ["I", "love", "javascript"];
let value = spliceArray.splice(2, 1, "C Sharp", "and", "other");
console.log(spliceArray);
console.log(value);
spliceArray.splice(0, 2);
console.log(spliceArray);

//?slice
const sliceArray = ["Winter", "Summer", "Autumm", "Spring"];
value = sliceArray.slice(0, 2);
console.log(value);
console.log(sliceArray);
value = sliceArray.slice();
console.log(value);
value = sliceArray.slice(-1);
console.log(value);

//?concat
const arrA = [0, 1, 2];
const arrB = [3, 4, 5];
console.log(arrA, arrB);
const joinedArray = arrA.concat(arrB, "testElement", 5, true);
console.log(joinedArray);

//  alternative to concat with spread operator;
const arrC = [...arrA, ...arrB, "testElement", 5, true];
console.log(arrC);

//? indexOf, lastIndexOf
const randomDataArray = [5, 3, true, "labas", 5];
console.log(randomDataArray.indexOf(5));
console.log(randomDataArray.indexOf(false));
console.log(randomDataArray.lastIndexOf(5));

//!Callbacks
function getName() {
  const name = prompt("Enter your name");
  return name;
}

function getLastName() {
  const lastName = prompt("Enter your lastName");
  return lastName;
}

function displayName(nameFn) {
  console.log(nameFn);
  console.log("Call me " + nameFn());
}

// displayName(getName);
// displayName(getLastName);

const students = [
  {
    id: 1,
    f_name: "Alex",
    l_name: "B",
    gender: "M",
    married: false,
    age: 17,
    paid: 250,
    courses: ["JavaScript", "React"],
  },
  {
    id: 2,
    f_name: "Ibrahim",
    l_name: "M",
    gender: "M",
    married: true,
    age: 32,
    paid: 150,
    courses: ["JavaScript", "PWA"],
  },
  {
    id: 3,
    f_name: "Rubi",
    l_name: "S",
    gender: "F",
    married: false,
    age: 27,
    paid: 350,
    courses: ["Blogging", "React", "UX"],
  },
  {
    id: 4,
    f_name: "Zack",
    l_name: "F",
    gender: "M",
    married: true,
    age: 36,
    paid: 250,
    courses: ["Git", "React", "Branding"],
  },
];

//? forEach method
students.forEach(logStudents);

function logStudents(student, index) {
  console.log(student.f_name + " " + index);
}

//? map method
const fullNames = students.map((student) => {
  return student.f_name + " " + student.l_name;
});
console.log(fullNames);

//? includes
const namesArray = ["Marijus", "Jonas", "Petras"];
console.log(namesArray.includes("Marijus"));
