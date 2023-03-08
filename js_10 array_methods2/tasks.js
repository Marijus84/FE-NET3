const accords = ["D", "G", "C", "C7", "F"];

const checkArray = (arrayToCheck, editFn) => {
  for (let i = 0; i < arrayToCheck.length; i++) {
    if (!arrayToCheck[i].endsWith("7")) {
      arrayToCheck[i] = editFn(arrayToCheck[i]);
    }
  }
};

const addSeven = (item) => item + "7";

checkArray(accords, addSeven);

// console.log(accords);

//? forEach task solution
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

const renderNumbers = (array) => {
  array.forEach(renderHTML);

  function renderHTML(item, index) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `Index Nr: ${index}, value: ${item}`;
    document.body.append(paragraph);
  }
};

renderNumbers(numbers);

//? map task solutions
let numbers2 = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];
const budgets = [
  {
    name: "Rytis",
    budget: 50,
  },
  {
    name: "Saulė",
    budget: 230,
  },
  {
    name: "Paulius",
    budget: 1500,
  },
  {
    name: "Gytis",
    budget: 92,
  },
  {
    name: "Sandra",
    budget: 7,
  },
];

const arrDoubled = (array) => array.map((item) => item * 2);

console.log(arrDoubled(numbers2));

const arrMultiplied = (array, multiplier) =>
  array.map((item) => item * multiplier);

console.log(arrMultiplied(numbers2, 5));

const sumOfBudgets = (budgets) => {
  let total = 0;
  budgets.forEach((person) => (total += person.budget));
  return total;
};

console.log(sumOfBudgets(budgets));

const names = (persons) => persons.map((person) => person.name);

console.log(names(budgets));
