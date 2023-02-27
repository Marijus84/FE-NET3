//! Event listeners

// let actOnClick = function () {
//   console.log("Body was clicked");
// };

// document.body.addEventListener("click", actOnClick);

// test.addEventListener("mouseenter", () =>
//   console.log("i am an arrow function")
// );

// function actOnMouseEnter(event) {
//   console.log(event);
// }

//Task with event listeners;

let logOutButton = function (event) {
  console.log(event.key);
};

inputField.addEventListener("keypress", logOutButton);
