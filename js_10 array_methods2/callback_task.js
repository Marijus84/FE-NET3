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

console.log(accords);
